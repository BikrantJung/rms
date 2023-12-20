import React from "react";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[1140px] px-4 lg:p-0">{children}</div>
  );
};
