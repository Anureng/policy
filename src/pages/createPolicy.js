import Create from "@/components/Create";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

function createPolicy() {
  const styling = {
    backgroundImage: `url('/pHeader.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100",
  };
  return (
    <div style={styling} className="h-screen">
      {/* Header */}
      <div className="flex items-center justify-evenly p-4">
        <div className="text-white text-lg font-medium">Policy</div>
        <div>
          <ConnectButton />
        </div>
      </div>
      {/* Header */}
      <Create />
    </div>
  );
}

export default createPolicy;
