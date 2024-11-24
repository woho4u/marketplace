import React from "react";
import { useEffect, useState } from "react";
interface Project {
   _id: string;
   name: string;
   description: string;
   price: number;
}

const Project = ({ _id, name, description, price }: Project) => {
   return (
      <div className="w-1/2 px-2 py-6 h-40">
         <div className="rounded-lg bg-slate-50 h-full w-full">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}$</p>
         </div>
      </div>
   );
};

export default Project;
