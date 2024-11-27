// app/api/auth/[auth0]/route.js
import {
   handleAuth,
   handleLogin,
   handleLogout,
   handleCallback,
   handleProfile,
} from "@auth0/nextjs-auth0";

export async function GET(req, { params }) {
   console.log("LOGIN");
   switch (params.auth0) {
      case "login":
         return handleLogin(req);
      case "logout":
         return handleLogout(req);
      case "callback":
         return handleCallback(req);
      case "me":
         return handleProfile(req);
      default:
         return new Response("Not Found", { status: 404 });
   }
}
