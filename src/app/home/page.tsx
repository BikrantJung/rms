import { PageContainer } from "@/components/container";
import { InlineSnippet } from "@/components/form/domain-configuration";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const session = await getSession();
  const headersList = headers();
  const domain =
    headersList
      .get("host")
      ?.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) ??
    "vercel.pub";
  return (
    <div className="relative min-h-screen">
      <div className="blob absolute inset-0 -z-10 bg-opacity-60 bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100 blur-3xl"></div>
      <PageContainer>
        <Navbar />
        <div className="mt-16">
          <h1 className="text-4xl font-semibold">
            Restaurant management solution
          </h1>
          <h1 className="text-4xl font-semibold">in one place</h1>
          <p className="text-lg font-medium">
            Manage your hotels, restaurants, and business from one place.
          </p>
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "http://app.localhost:3000"
                : `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
            }
          >
            <Button className="mt-4">Dashboard</Button>
          </a>
        </div>
      </PageContainer>
    </div>
  );
}
