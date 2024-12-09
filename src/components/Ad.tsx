import React from "react";
import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* Bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/250716/pexels-photo-250716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/250716/pexels-photo-250716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={24}
            height={24}
            className="rounded-full h-6 w-6 object-cover"
          />
          <span className="text-blue-500 font-medium">FlowersToGo</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam bibendum risus, sit amet aliquet enim ultricies venenatis."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam bibendum risus, sit amet aliquet enim ultricies venenatis."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
