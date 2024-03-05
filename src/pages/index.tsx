import { TodoMain } from "@/components/TodoMain";
import Image from "next/image";
import React from "react";
import { RecoilRoot } from "recoil";

function index() {
  return (
    <div className="relative h-screen">
      {/* <div className="absolute -z-10 inset-0">
        <Image
          src="/nebula.png"
          alt="nebula"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <div className="mt-32">
        <h1>Todo List</h1>
        <TodoMain />
      </div>
    </div>
  );
}

export default index;
