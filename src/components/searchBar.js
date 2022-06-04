import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { fetchWeather } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      fetchWeather(value);
    }
    setValue("");
  };

  return (
    <div className="searchBar">
      <FaCloudMoon className="cloud" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <BiCurrentLocation />
      </form>
    </div>
  );
};

export default SearchBar;
