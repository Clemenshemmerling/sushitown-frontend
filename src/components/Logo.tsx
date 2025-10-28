import logoPng from "../assets/logo.png";

const Logo = ({
  size = 40,
  className = "",
  alt = "Sushitown",
  hover = "tilt",
  onClick
}) => {
  const hoverClass =
    hover === "tilt" ? "transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-3 active:scale-95" :
    hover === "spin" ? "transition-transform duration-500 ease-out hover:rotate-180" :
    hover === "pulse" ? "hover:animate-pulse" :
    hover === "bounce" ? "hover:animate-bounce" : "";
  const dimension = typeof size === "number" ? `${size}px` : size;
  return (
    <img
      src={logoPng}
      alt={alt}
      className={`${hoverClass} ${className}`}
      style={{ width: dimension, height: dimension }}
      draggable={false}
      onClick={onClick}
    />
  );
};

export default Logo;
