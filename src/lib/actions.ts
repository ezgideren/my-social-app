"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"

export const switchFollow = async (userId: string) => {
    const { userId: currentUserId } = auth()

    if (!currentUserId) {
        throw new Error("User is not authenticated!");
    }

    try {

        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: userId,
            }
        })

        if (existingFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingFollow.id,
                }
            })
        }else {
            const existingFollowRequest = await prisma.followRequest.findFirst({
                  where: {

                  }
            })
        }

    } catch (err) {
        console.log(err)
        throw new Error("Something went wrong!");
    }

}