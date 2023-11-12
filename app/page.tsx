"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

import { useState } from "react";

export default function Home() {
  //const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
