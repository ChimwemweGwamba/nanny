import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce animation-delay-300"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce animation-delay-500"></div>
      </div>
    </div>
  );
}

export default Loader;
