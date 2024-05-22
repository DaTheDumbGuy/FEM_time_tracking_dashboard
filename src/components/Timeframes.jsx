import Category from "./Category";
import ellipsis from "../../public/images/icon-ellipsis.svg";

export default function Timeframes({ timeframe, item }) {
  const timeframeMap = {
    Daily: item.timeframes.daily,
    Weekly: item.timeframes.weekly,
    Monthly: item.timeframes.monthly,
  };
  return (
    <li>
      <header>
        <h2>{item.title}</h2>
        <img src={ellipsis} alt={`Edit ${item.title}`} />
      </header>
      <Category itemTimeframes={timeframeMap[timeframe]} />
    </li>
  );
}
