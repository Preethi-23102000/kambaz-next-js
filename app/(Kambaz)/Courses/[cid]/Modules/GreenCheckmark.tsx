import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span
      className="position-relative d-inline-flex align-items-center"
      style={{ width: "20px", height: "20px" }}
    >
      <FaCircle
        className="text-white position-absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1rem",
        }}
      />
      <FaCheckCircle
        className="text-success position-absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.25rem",
        }}
      />
    </span>
  );
}
