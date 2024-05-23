import profile from "/images/image-jeremy.png";
import Button from "./Button";
import "./user.scss";
export default function User({ setTimeframe, timeframe }) {
  const getButtonClass = (btnTimeframe) => {
    return timeframe === btnTimeframe ? "active" : "";
  };
  return (
    <section className="userContainer">
      <header>
        <div className="userImageContainer">
          <img src={profile} alt="Profile Picture" />
        </div>
        <div className="userName">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </header>
      <div className="timeframesBTN_container">
        <Button
          className={getButtonClass("Daily")}
          text={"Daily"}
          onClick={() => setTimeframe("Daily")}
        />
        <Button
          className={getButtonClass("Weekly")}
          text={"Weekly"}
          onClick={() => setTimeframe("Weekly")}
        />
        <Button
          className={getButtonClass("Monthly")}
          text={"Monthly"}
          onClick={() => setTimeframe("Monthly")}
        />
      </div>
    </section>
  );
}
