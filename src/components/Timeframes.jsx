import Category from "./Category";
import ellipsis from "/images/icon-ellipsis.svg";
import "./timeframes.scss";

export default function Timeframes({ timeframe, item }) {
  const timeframeMap = {
    Daily: item.timeframes.daily,
    Weekly: item.timeframes.weekly,
    Monthly: item.timeframes.monthly,
  };
  return (
    <li className={`${item.title.toLowerCase().split(" ").join("-")}`}>
      <div
        className={`title_image ${item.title
          .toLowerCase()
          .split(" ")
          .join("-")}`}
      >
        <img
          src={`./images/icon-${item.title
            .toLowerCase()
            .split(" ")
            .join("-")}.svg`}
          alt=""
        />
      </div>
      <div className="timeframes_body">
        <header>
          <h2>{item.title}</h2>
          <img src={ellipsis} alt={`Edit ${item.title}`} />
        </header>
        <Category itemTimeframes={timeframeMap[timeframe]} />
      </div>
    </li>
  );
}
