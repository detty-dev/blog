import React from "react";
import { FaCamera } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-white">
      <div className="flex justify-between items-center py-5 max-w-5xl mx-auto">
        <div className="flex items-center gap-x-3">
          <div className="bg-secondary p-3 rounded-full">
                <FaCamera className="text-primary text-xl" />
          </div>
          <h1 className="text-2xl  font-bold text-tertiary">blogging wizard</h1>
        </div>
        <div>
            <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
