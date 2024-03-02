import { Metadata } from "next"
import Link from "next/link"
import {Navigation} from "lucide-react";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-20rem)]">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p>
        The page you tried to access does not exist.
      </p>
      <Link
        className="flex gap-x-1 items-center text-sky-500 hover:text-sky-700"
        href="/"
      >
        <p>Return to Home Page</p>
        <Navigation className="w-4 h-4"/>
      </Link>
    </div>
  )
}