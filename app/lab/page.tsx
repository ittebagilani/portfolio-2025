"use client";

import Lab from "@/components/lab/lab";
import Modal from "@/components/modal/modal";
import { useState } from "react";

const labs = [
  {
    title: "Tempest AI",

    src: "tempest.png",

    color: "#000000",
    description: "Fullstack",
    url: "https://tempestai.vercel.app/"
  },

  {
    title: "Layers",

    src: "layers.png",

    color: "#8C8C8C",
    description: "Frontend",
    url: "https://saas-landing-page-v2-git-main-itteba-gs-projects.vercel.app/"
  },

  {
    title: "Zen",

    src: "zen.png",

    color: "#EFE8D3",
    description: "Frontend",
    url: "https://saas-landing-page-v1-git-main-itteba-gs-projects.vercel.app/"
  },

  {
    title: "New Reality",

    src: "new_reality.png",

    color: "#706D63",
    description: "Frontend",
    url: "https://project-07-ten.vercel.app/"
  },
  {
    title: "ELEM3NT",

    src: "elem3nt.png",

    color: "#000000",
    description: "Frontend",
    url: "https://project-06-rosy.vercel.app/",
  },

  {
    title: "T27",

    src: "t27.png",

    color: "#8C8C8C",
    description: "Frontend",
    url: "https://project-05-beta.vercel.app/"
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
