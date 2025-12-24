"use client";
import Lab from "@/components/lab/lab";
import Modal from "@/components/modal/modal";
import { useState } from "react";

const labs = [
  { title: "Tempest AI", src: "tempest.png", color: "#000", description: "Fullstack", url: "https://tempestai.vercel.app/" },
  { title: "Layers", src: "layers.png", color: "#8C8C8C", description: "Frontend", url: "https://saas-landing-page-v2-git-main-itteba-gs-projects.vercel.app/" },
  { title: "Zen", src: "zen.png", color: "#EFE8D3", description: "Frontend", url: "https://saas-landing-page-v1-git-main-itteba-gs-projects.vercel.app/" },
  { title: "New Reality", src: "new_reality.png", color: "#706D63", description: "Frontend", url: "https://project-07-ten.vercel.app/" },
  { title: "ELEM3NT", src: "elem3nt.png", color: "#000", description: "Frontend", url: "https://project-06-rosy.vercel.app/" },
  { title: "T27", src: "t27.png", color: "#8C8C8C", description: "Frontend", url: "https://project-05-beta.vercel.app/" },
];

const Work = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main>
      <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[150px] font-light tracking-tight leading-[1.1] text-center sm:text-left">
        Featured Work
      </h1>

      <div className="labs-container">
        {labs.map((lab, index) => (
          <Lab
            key={index}
            index={index}
            title={lab.title}
            setModal={setModal}
            description={lab.description}
            url={lab.url}
          />
        ))}
      </div>

      <Modal modal={modal} projects={labs} />
    </main>
  );
};

export default Work;
