import React from "react";
import Footer from "../footer";

const FooterStickyWrapper: React.FC = () => {
  return (
    <div
      className="relative h-[800px]"
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} 
    >
      <div className="fixed bottom-0 h-[800px] w-screen left-1/2 -ml-[50vw]">
        <Footer />
      </div>
    </div>
  );
};

export default FooterStickyWrapper;