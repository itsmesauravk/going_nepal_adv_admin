"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  // Dummy data for available trekkings
  const trekkings = [
    {
      id: 1,
      name: "Trekking A",
      description:
        "Explore the beautiful mountains of A. A challenging trek with breathtaking views.",
    },
    {
      id: 2,
      name: "Trekking B",
      description:
        "A moderate trek through lush forests and rivers in B region. Perfect for nature lovers.",
    },
    {
      id: 3,
      name: "Trekking C",
      description:
        "A beginner-friendly trek in C. Enjoy scenic landscapes and cultural heritage.",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Trekkings</h1>
        <Button
          onClick={() => router.push("/trekkings/add-trek")}
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Trek
        </Button>
      </div>

      <div className="border-b-2 border-primary my-4"></div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Available Trekkings</h2>
        <p>Here you will see a list of all available trekking options.</p>

        {/* List of available trekkings */}
        <ul className="mt-4 space-y-4">
          {trekkings.map((trek) => (
            <li key={trek.id} className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-medium">{trek.name}</h3>
              <p className="text-gray-600">{trek.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page
