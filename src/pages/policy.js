import Navbar from "@/components/Navbar";
import PolicyFooter from "@/components/PolicyFooter";
import PolicyHeader from "@/components/PolicyHeader";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

function policy() {
  const styling = {
    backgroundImage: `url('/pHeader.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100",
  };
  return (
    <div className="h-screen">
      {/* Header start */}
      <div className="flex items-center justify-evenly p-4">
        <div className="text-white text-lg font-medium">Policy</div>
        <div>
          <ConnectButton />
        </div>
      </div>
      {/* Header End */}
      <PolicyHeader />
      <PolicyFooter />
    </div>
  );
}

export default policy;
