import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import FriendRequestList from "./friendRequestList";

const FriendRequests = async () => {
  const { userId } = auth();
  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });
  if (requests.length === 0) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Title */}
      <div className="flex justify-between items-center font-md">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* User */}

      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
