import "./button.scss";

export default function Button({ className, text, onClick }) {
  return (
    <button className={`timeframeBTN ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
