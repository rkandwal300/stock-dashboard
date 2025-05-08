import React from "react";
import Search from "./Search";

function Header({ name }) {
  return (
    <header className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
      <div className="xl:px-32">
        <h1 className="text-5xl font-medium">{name}</h1>
        <Search />
      </div>
      {/* <ThemeIcon /> */}
    </header>
  );
}

export default Header;
