import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[71px] py-6 md:py-9 flex justify-center items-center border-t border-gray-200 mt-10 md:mt-20">
        <p className="text-gray-700 text-sm md:text-base">
          copyright 2025{" "}
          <Link href="/" className="text-pink-500">
          woomanly.blog
          </Link>{" "}
          All rights reserved.
        </p>
      </footer>
    )
}