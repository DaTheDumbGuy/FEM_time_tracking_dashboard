import "./category.scss";
export default function Category({ itemTimeframes }) {
  return (
    <div className="category">
      <p>{itemTimeframes.current}hrs</p>
      <p>Last Week - {itemTimeframes.previous}hrs</p>
    </div>
  );
}
