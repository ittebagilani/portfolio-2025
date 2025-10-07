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
        {/* <Scene /> */}
        <div className="flex flex-col mx-auto text-center align-middle justify-center h-fit  mt-20">
          <h1 className="font-semibold text-8xl">get in touch</h1>
          <div>
            <form className="border-black border-2 p-10">
              dasdas
              <input type="text" />
              <button>hello</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
