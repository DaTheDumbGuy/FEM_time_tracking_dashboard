import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import Timeframes from "./Timeframes";
import User from "./User";
import "./timeTrackingDashboard.scss";

export default function TimeTrackingDashboard() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("Daily");

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(!isLoading);
      });
  }, []);

  console.log(timeframe);
  return (
    <article className="time_tracking_dashboard">
      <User setTimeframe={setTimeframe} timeframe={timeframe} />
      <ul className="timeframes_container">
        {isLoading
          ? "Loading..."
          : data.map((item) => (
              <Timeframes timeframe={timeframe} key={item.title} item={item} />
            ))}
      </ul>
    </article>
  );
}
