import React from "react";

const NannyCard = ({ nanny }) => {
  return (
    <div className="w-11/12 md:w-8/12 m-auto rounded shadow-lg bg-white border border-black m-10">
      <div className="relative w-full h-96 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={nanny.images[0].file}
          alt={nanny.name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-2 capitalize">{nanny.name}</div>
        <p className="text-gray-700 text-base">{nanny.about}</p>
        <div className="mt-4">
          <p className="text-gray-700 text-base my-3">
            <span className="font-bold">Age:</span> {nanny.age}
          </p>
          <p className="text-gray-700 text-base my-3">
            <span className="font-bold">Education:</span> {nanny.education}
          </p>
          <p className="text-gray-700 text-base my-3">
            <span className="font-bold">Skills:</span> {nanny.skills}
          </p>
          <p className="text-gray-700 text-base my-3">
            <span className="font-bold">Categories:</span>{" "}
            {nanny.category.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NannyCard;
