import React from "react";
import Link from "next/link";
import { Dumbbell } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center gap-2">
        <Dumbbell className="text-accent-blue" />
        <h1 className="text-2xl font-bold text-accent-blue dark:text-accent-blue">
          Dýnamis
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
