"use client";
// import Scene from "@/components/contact/scene";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/contact/scene"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <div className="h-[100vh] flex">
        <Scene />
        <div className="flex mx-auto text-center align-middle justify-center h-fit  mt-20">
          <h1 className="font-semibold text-8xl uppercase">call me</h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
