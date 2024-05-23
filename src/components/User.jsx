import profile from "/images/image-jeremy.png";
import Button from "./Button";
export default function User({ setTimeframe }) {
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
      <div className="timeframesBTN">
        <Button text={"Daily"} onClick={() => setTimeframe("Daily")} />
        <Button text={"Weekly"} onClick={() => setTimeframe("Weekly")} />
        <Button text={"Monthly"} onClick={() => setTimeframe("Monthly")} />
      </div>
    </section>
  );
}
