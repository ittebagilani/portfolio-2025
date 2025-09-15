'use client';

import Lab from "@/components/lab/lab";
import Modal from "@/components/modal/modal";
import { useState } from "react";

const labs = [

    {
  
      title: "C2 Montreal",
  
      src: "pic1.jpg",
  
      color: "#000000",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Office Studio",
  
      src: "pic2.jpg",
  
      color: "#8C8C8C",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Locomotive",
  
      src: "pic3.jpg",
  
      color: "#EFE8D3",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Silencio",
  
      src: "pic1.jpg",
  
      color: "#706D63",
      description: "Design & Dev"
  
    },
    {
  
      title: "C2 Montreal",
  
      src: "pic1.jpg",
  
      color: "#000000",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Office Studio",
  
      src: "pic2.jpg",
  
      color: "#8C8C8C",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Locomotive",
  
      src: "pic3.jpg",
  
      color: "#EFE8D3",
      description: "Design & Dev"
  
    },
  
    {
  
      title: "Silencio",
  
      src: "pic1.jpg",
  
      color: "#706D63",
      description: "Design & Dev"
  
    }
  
  ]

  const page = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
      <main>
          <div className="labs-container">
              {
                  labs.map((lab, index) => {
                      return <Lab index={index} title={lab.title} setModal={setModal} key={index} description={lab.description}/>
                  })
              }
          </div>
          <Modal modal={modal} projects={labs} />
      </main>
    );
  };

  export default page;