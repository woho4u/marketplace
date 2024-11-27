"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Project from "../Components/Project";

const page = () => {
   const [apiStatus, setApiStatus] = useState("Loading...");
   const [projName, setProjName] = useState<string>();
   const [projDescription, setProjDescription] = useState<string>();
   const [projPrice, setProjPrice] = useState<string>();
   interface Project {
      _id: string;
      title: string;
      description: string;
      price: number;
   }
   const [projects, setProjects] = useState<Project[]>();

   const handleSubmit = async () => {
      try {
         const response = await axios.post("http://localhost:3000/api/add-project", {
            title: projName,
            description: projDescription,
            price: projPrice,
            category: "Web Development",
         });
         setApiStatus(response.data.message);
      } catch (error) {
         setApiStatus("Error: " + error);
      }
   };

   useEffect(() => {
      if (!projects) {
         try {
            const fetchData = async () => {
               const response = await axios.get("http://localhost:3000/api/get-projects");
               setProjects(response.data.data);
            };
            fetchData();
         } catch (error) {
            setApiStatus("Error: " + error);
         }
      }
   }, [projects]);
   return (
      <div className="w-1/2 ">
         <Link href={"/api/auth/login"}>Login</Link>

         <div className="flex flex-col w-full px-6 py-4 shadow-lg rounded-2xl">
            <input
               placeholder="Project Name"
               type="text"
               onChange={(e) => setProjName(e.target.value)}
            />
            <input
               placeholder="Project Description"
               type="text"
               onChange={(e) => setProjDescription(e.target.value)}
            />
            <input
               placeholder="Project Price"
               type="text"
               onChange={(e) => setProjPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
         </div>

         <div>
            <h1>Projects</h1>

            <div className="flex flex-wrap">
               {projects?.map((p) => (
                  <Project
                     key={p._id}
                     _id={p._id}
                     title={p.title}
                     description={p.description}
                     price={p.price}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default page;
