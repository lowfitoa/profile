import "./custom-dot.css";
import { useMousePosition } from "../hooks/useMousePosition";
import { isMobile } from "react-device-detect";

export const CustomDot = () => {
  // 1.
  const { x, y } = useMousePosition();
  if (isMobile) {
    return <></>;
  }
  return (
    <>
      {/* 2. */}
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>
      {/* 3. */}
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};
