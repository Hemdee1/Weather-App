import { ImLocation2 } from "react-icons/im";
import { useGlobalContext } from "../context";

const Main = () => {
  const { weather, main, name, sys, loading, error } = useGlobalContext();
  const { description, icon } = weather ? weather[0] : "";
  const temp = main ? Math.round(main.temp - 273) : "";
  const country = sys ? sys.country : "";

  if (loading) {
    return (
      <main>
        <p>Loading....</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>City name doesn't exist, try a different name</p>
      </main>
    );
  }

  return (
    <main>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={description}
        className="icon"
      />
      <div className="text">
        <h1>{temp} °C</h1>
        <h4>{description}</h4>
        <div>
          <ImLocation2 />
          <h3>
            {name}, {country}
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
