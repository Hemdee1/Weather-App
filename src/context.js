import React, { useContext, useState, useEffect, useCallback } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // console.log(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${"bauchi"}&appid=${
  //     process.env.react_app_api_key
  //   }`
  // );

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.react_app_api_key}`
      );
      const res = await response.json();
      setLoading(false);
      if (res.cod === "404") {
        throw Error("City name doesn't exist, try a different name");
      }
      setData(res);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchWeather("bauchi");
  }, []);

  return (
    <AppContext.Provider
      value={{ ...data, loading, setData, fetchWeather, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
