import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {BoltIcon, CheckBadgeIcon, HomeIcon, MagnifyingGlassIcon, RectangleStackIcon, UserIcon} from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-auto p-5 mx-5 sm:flex-row">
      {/*left section*/}
      <div className="flex flex-grow max-w-2xl space-x-2 justify-evenly">
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='trending' Icon={BoltIcon} />
        <HeaderItem title='verified' Icon={CheckBadgeIcon} />
        <HeaderItem title='collections' Icon={RectangleStackIcon} />
        <HeaderItem title='Search' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='account' Icon={UserIcon} />
      </div>

      {/*right section*/}
      <Image
        src={"https://links.papareact.com/ua6"}
        width={120}
        height={120}
        alt="logo"
        className="object-contain "
      />
    </header>
  );
};

export default Header;
