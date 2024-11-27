"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Components/Profile";
import useUser from "@auth0/nextjs-auth0";

export default function Home() {
   return (
      <div>
         <div>
            <Profile />
         </div>
      </div>
   );
}
