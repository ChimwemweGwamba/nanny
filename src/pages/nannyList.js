import React from "react";
import NannyCard from "../components/NannyCard";

const nanniesData = {
  "5z74p0d": {
    about: "This is about",
    age: "18",
    category: [
      "Parents Helper",
      "Sitters",
      "Nanny (Part or Full Time)",
      "Specialty Nanny",
      "Newborn and Infant Care",
      "Overnight Nannies"
    ],
    education: "eduationdw",
    id: "5z74p0d",
    images: [
      {
        file:
          "https://firebasestorage.googleapis.com/v0/b/nanny-services-b826a.appspot.com/o/nannies%2F5z74p0d%2Fshutterstock_1104246035.png?alt=media&token=7f13ea72-5820-4fd4-a109-ceacb636a40b",
        name: "shutterstock_1104246035.png"
      }
    ],
    name: "Ben Benny",
    skills: "skill 1, skill 2, skill 3"
  },
  "gs41viu": {
    about: "werrwerew",
    age: "345",
    category: [
      "Parents Helper",
      "Nanny (Part or Full Time)",
      "Newborn and Infant Care"
    ],
    education: "wre",
    id: "gs41viu",
    images: [
      {
        file:
          "https://firebasestorage.googleapis.com/v0/b/nanny-services-b826a.appspot.com/o/nannies%2Fgs41viu%2Fshutterstock_1104246035.png?alt=media&token=6780db3e-f965-4a39-81d4-a7f2d0a6a498",
        name: "shutterstock_1104246035.png"
      }
    ],
    name: "adsads",
    skills: "ffsddf,wreer,erfds,dfg,gf,fgsd"
  },
  "o3r0uyij": {
    about: "this is a nanny",
    age: "29",
    category: ["Parents Helper", "Sitters"],
    education: "bachelors degree",
    id: "o3r0uyij",
    images: [
      {
        file:
          "https://firebasestorage.googleapis.com/v0/b/nanny-services-b826a.appspot.com/o/nannies%2Fo3r0uyij%2Ffrank-mckenna-o3NHC6x-zfk-unsplash%201.png?alt=media&token=fc3242d0-c30b-41f1-bc77-88b07ceba002",
        name: "frank-mckenna-o3NHC6x-zfk-unsplash 1.png"
      }
    ],
    name: "tash mumba",
    skills: "skill 1, skill 2, skill 3"
  }
};

const NannyList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-10">
      <h1 className="text-2xl text-primary font-bold my-8">List of Nannies</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        {Object.values(nanniesData).map((nanny) => (
          <NannyCard key={nanny.id} nanny={nanny} />
        ))}
      </div>
    </div>
  );
};

export default NannyList;
