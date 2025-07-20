function Button({ children, text, color = "black" }) {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

export default Button;
