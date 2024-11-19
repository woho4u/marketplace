import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/api/auth/login"}></Link>
      </div>
    </div>
  );
}
