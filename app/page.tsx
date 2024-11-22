"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Components/Profile";

export default function Home() {
   return (
      <div>
         <div>
            <Profile />
         </div>
      </div>
   );
}
