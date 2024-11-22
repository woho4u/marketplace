import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const profile = () => {
   const [apiStatus, setApiStatus] = useState("Loading...");
   const [user, setUser] = useState<string>();
   interface User {
      _id: string;
      name: string;
      price: number;
   }

   const [users, setUsers] = useState<User[]>();
   useEffect(() => {
      if (apiStatus === "Loading...") {
         try {
            const fetchData = async () => {
               const response = await axios.get("http://localhost:3000/api/status");
               setApiStatus(response.data.message);
            };
            fetchData();
         } catch (error) {
            setApiStatus("Error: " + error);
         }
      }
   }),
      [apiStatus];

   const handleSubmit = async () => {
      try {
         const response = await axios.post("http://localhost:3000/api/add-data", {
            name: user,
            price: 100,
         });
         setApiStatus(response.data.message);
      } catch (error) {
         setApiStatus("Error: " + error);
      }
   };

   useEffect(() => {
      if (!users) {
         try {
            const fetchData = async () => {
               const response = await axios.get("http://localhost:3000/api/get-users");
               setUsers(response.data.data);
            };
            fetchData();
         } catch (error) {
            setApiStatus("Error: " + error);
         }
      }
   }, [users]);
   return (
      <div>
         <Link href={"/api/auth/login"}>Login</Link>
         <p>{apiStatus}</p>
         <input placeholder="Username" type="text" onChange={(e) => setUser(e.target.value)} />
         <button onClick={handleSubmit}>Submit</button>

         <div>
            <h1>Users</h1>
            <ul>
               {users?.map((u) => (
                  <li key={u._id}>{u.name}</li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default profile;
