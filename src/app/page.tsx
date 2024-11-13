"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push("/login")}>Login</button>
    </>
  )
}
