import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export async function middleware(req) {
   const session = await getSession(req);
   console.log("SESSION RUNNING");
   if (session?.user) {
      const user = session.user;

      // Call your API to sync the user
      await fetch(`http://localhost:3000/api/add-user`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            auth0Id: user.sub,
            email: user.email,
            name: user.name,
            picture: user.picture,
         }),
      });
   }

   return NextResponse.next();
}
