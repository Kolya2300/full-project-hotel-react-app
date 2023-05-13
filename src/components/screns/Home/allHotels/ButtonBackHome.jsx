import React from "react";
import { useNavigate } from "react-router-dom";
const ButtonBackHome = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    try {
      navigate("/");
    } catch (e) {
      console.log(e.meesage);
    }
  };
  return (
    <div class="flex justify-center mb-5">
      <button onClick={handleHome} class="items-center border border-blue-500 bg-blue-600 hover:bg-blue-500 w-60 p-4 my-2 text-white inline text-center">
        Back Home
      </button>
    </div>
  );
};

export default ButtonBackHome;
