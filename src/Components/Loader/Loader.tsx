import React from "react";
import CircularProgress from "../../Assets/SVGs/CircularProgress/CircularProgress";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-10">
      <CircularProgress height="2rem" width="2rem" color="#0D6EFD" />
    </div>
  );
};

export default Loader;
