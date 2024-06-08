"use client";

import { useUser } from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  const displayName = user?.firstName ? `, ${user?.firstName}👋` : "👋";

  return (
    <div className="space-y-2 mb-4">
      <h2 className="flex items-center gap-x-2 text-2xl lg:text-4xl text-white font-medium">
        Welcome back
        {isLoaded ? (
          displayName
        ) : (
          <Skeleton className="w-[100px] lg:w-[200px] h-[20px] lg:h-[30px] rounded-md inline-block" />
        )}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};
