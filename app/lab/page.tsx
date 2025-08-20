'use client';

import Lab from "@/components/lab";
import { useState } from "react";

const labs = [

    {
  
      title: "C2 Montreal",
  
      src: "pic1.jpg",
  
      color: "#000000"
  
    },
  
    {
  
      title: "Office Studio",
  
      src: "pic2.jpg",
  
      color: "#8C8C8C"
  
    },
  
    {
  
      title: "Locomotive",
  
      src: "pic3.jpg",
  
      color: "#EFE8D3"
  
    },
  
    {
  
      title: "Silencio",
  
      src: "pic1.jpg",
  
      color: "#706D63"
  
    }
  
  ]

  const page = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
      <main>
          <div className="labs-container">
              {
                  labs.map((lab, index) => {
                      return <Lab index={index} title={lab.title} setModal={setModal} key={index} />
                  })
              }
          </div>
          {/* <Modal modal={modal} labs={labs} /> */}
      </main>
    );
  };

  export default page;