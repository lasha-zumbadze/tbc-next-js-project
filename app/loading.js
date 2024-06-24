"use client";

import { Spinner } from "flowbite-react";

export default function Component() {
  return (
    <div className="bg-backgroundDarkblue flex justify-center items-center h-screen">
      <Spinner aria-label="Default status example" color="gray" size="xl" />;
    </div>
  );
}
