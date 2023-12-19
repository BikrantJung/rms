import { InlineSnippet } from "@/components/form/domain-configuration";
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
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={100}
        height={100}
        src="/logo.png"
        alt="Platforms on Vercel"
        className="w-24"
      />
      <h1 className="font-normal text-white">
        Welcome to Restaurant Management Platform
      </h1>
      <a
        href={
          process.env.NODE_ENV === "development"
            ? "http://app.localhost:3000"
            : `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
        }
      >
        <button className="h-11 rounded bg-white px-4 font-medium text-black">
          Create your app
        </button>
      </a>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
