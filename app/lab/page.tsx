"use client";

import Lab from "@/components/lab/lab";
import Modal from "@/components/modal/modal";
import { useState } from "react";

const labs = [
  {
    title: "Tempest AI",

    src: "pic1.jpg",

    color: "#000000",
    description: "Fullstack",
  },

  {
    title: "Layers",

    src: "pic2.jpg",

    color: "#8C8C8C",
    description: "Frontend",
  },

  {
    title: "Pulse",

    src: "pic3.jpg",

    color: "#EFE8D3",
    description: "Frontend",
  },

  {
    title: "New Reality",

    src: "pic1.jpg",

    color: "#706D63",
    description: "Frontend",
  },
  {
    title: "ELEM3NT",

    src: "pic1.jpg",

    color: "#000000",
    description: "Frontend",
  },

  {
    title: "T27",

    src: "pic2.jpg",

    color: "#8C8C8C",
    description: "Frontend",
  },
];

const LabPage = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-9xl font-light tracking-tight leading-[1.1] text-left">
        Featured Work
      </h1>
      <div className="labs-container">
        {labs.map((lab, index) => {
          return (
            <Lab
              index={index}
              title={lab.title}
              setModal={setModal}
              key={index}
              description={lab.description}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={labs} />
    </main>
  );
};

export default LabPage;
