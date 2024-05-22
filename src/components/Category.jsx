export default function Category({ itemTimeframes }) {
  return (
    <div>
      <p>{itemTimeframes.current}hrs</p>
      <p>Last Week - {itemTimeframes.previous}hrs</p>
    </div>
  );
}
