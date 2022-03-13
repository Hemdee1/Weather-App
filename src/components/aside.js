import { FaTemperatureHigh } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";
import { BsWind } from "react-icons/bs";
import { FaCompress } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Aside = () => {
  const { main, wind, loading, error } = useGlobalContext();

  let feelsLike;
  let pressure;
  let humidity;
  let windSpeed;

  if (loading || error) {
    feelsLike = pressure = humidity = windSpeed = 0;
  } else {
    feelsLike = main ? (main.feels_like - 273).toFixed(1) : "";
    pressure = main ? (main.pressure / 1000).toFixed(1) : "";
    humidity = main ? main.humidity.toFixed(1) : "";
    windSpeed = main ? wind.speed.toFixed(1) : "";
  }

  return (
    <aside>
      <div className="box">
        <FaTemperatureHigh />
        <div>
          <h3>{feelsLike} °C</h3>
          <h4>Feels like</h4>
        </div>
      </div>
      <div className="box">
        <GiDrop />
        <div>
          <h3>{humidity} %</h3>
          <h4>Humidity</h4>
        </div>
      </div>
      <div className="box">
        <BsWind />
        <div>
          <h3>{windSpeed} k/h</h3>
          <h4>Wind</h4>
        </div>
      </div>
      <div className="box">
        <FaCompress />
        <div>
          <h3>{pressure} KPa</h3>
          <h4>Pressure</h4>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
