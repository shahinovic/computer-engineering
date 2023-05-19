import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsFillPencilFill as Edit } from "react-icons/bs";
import { AiOutlineInfoCircle as Info } from "react-icons/ai";

const Location = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [term, setTerm] = useState("Noida, India");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="location d-flex flex-column align-items-center gap-2">
      <div className="location-input d-flex align-items-center">
        <IoLocationOutline className="text-dark fs-5" />
        <input
          type="text"
          value={term}
          className="form-control"
          onChange={(e) => setTerm(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter your location"
        />
        {isFocused ? <Close /> : <Edit />}
      </div>
      <div className="location-info d-flex gap-2 align-items-start mt-3">
        <Info className="d-flex align-items-start" />
        <p className="text-muted">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

export default Location;
