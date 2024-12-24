"use client";  // Mark this component as a Client Component

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleNavigate() {
    router.push('/products')
  }

  return (
    <div className="flex min-h-full flex-col justify-center items-center pt-24">
      <h1>Welcome to NEXT JS Course 2024</h1>
      <Link href={'products'}>Navigate to Products page</Link>
      
      <Link href={'account'}>Navigate to Account page</Link>

      <h2 className="font-bold">Alternative way of navigating page</h2>
      <button onClick={handleNavigate}>Navigate to products page using router</button>
    </div>
  );
}
