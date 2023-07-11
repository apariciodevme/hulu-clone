import Link from "next/link";


import requests from "@/utils/requests";

export default function Nav() {

  return (
    <nav className="relative">
      <div className="flex px-10 space-x-8 overflow-x-scroll text-lg sm:space-x-16 scrollbar-hide whitespace-nowrap ">
        {Object.entries(requests).map(([key, { title, url }]) => (
        <Link href={`/?genre=${key}`}
            className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-green-400"
            key={key}
          >
            {title}
          </Link>

        ))}
      </div>

      <div className="absolute top-0 right-0 w-1/6 h-10 bg-gradient-to-l from-slate-900 " />
    </nav>
  );
};

