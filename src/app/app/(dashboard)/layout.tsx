import Nav from "@/components/nav";
import Profile from "@/components/profile";
import { ReactNode, Suspense } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </Nav>
      <div className="ml-64 min-h-screen dark:bg-black">{children}</div>
    </div>
  );
}
