import React from "react";
import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 flex justify-between align-center">
        <div className="flex-none">
          <Link href="/" className="btn btn-ghost text-xl">DrizzleNextjsTodoApp</Link>
        </div>
        <div className="gap-2 p-2">
          <ul className="menu sm:menu-horizontal rounded-box flex justify-end items-center p-0 gap-2">
            <li>
                <Link href="/todos">
                Todos
                </Link>
            </li>
            <li>
                <Link href="/categories">
                Categories
                </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
