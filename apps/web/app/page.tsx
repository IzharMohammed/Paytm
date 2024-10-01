import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";


export default function Home() {
  const prisma = new PrismaClient();
  return (
    <div className="text-2xl">
      Starting paytm waala project
    </div>
  );
}
