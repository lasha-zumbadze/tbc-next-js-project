"use client";

import Link from "next/link";
import { useState } from "react";

function UserIcon({ user }) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className={`w-20 h-20 rounded-full cursor-pointer bg-cover bg-slate-200 relative`}
      onClick={() => setDropDown((ex) => !ex)}
    >
      <div
        className={`bg-[#fff0dcda] w-36 ${
          dropDown ? "h-36 opacity-100" : "h-0 opacity-0"
        } absolute top-full translate-y-8 right-0 rounded-sm transition-all flex flex-col items-end gap-2 pr-4 pt-4 font-semibold text-[#704d1e]`}
      >
        <Link
          className="no-underline  cursor-pointer transition-all hover:text-[#b99056] drop-shadow-3xl text-[1.8rem]"
          href="/profile"
        >
          Profile
        </Link>
        <a
          href="/api/auth/logout"
          className="transition-all text-[1.8rem] hover:text-[#b99056]"
        >
          Logout
        </a>
      </div>
    </div>
  );
}

export default UserIcon;
