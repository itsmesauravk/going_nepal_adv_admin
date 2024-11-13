"use client"

import React, { useState } from "react"

// Define types for the state
interface Highlight {
  content: string
  links: { text: string; url: string }[]
}

interface FAQ {
  question: string
  answer: string
}

const TrekForm: React.FC = () => {
  // State management
  const [overview, setOverview] = useState("")
  const [highlights, setHighlights] = useState<Highlight[]>([
    { content: "", links: [{ text: "", url: "" }] },
  ])
  const [costIncluded, setCostIncluded] = useState<string[]>([])
  const [costNotIncluded, setCostNotIncluded] = useState<string[]>([])
  const [general, setGeneral] = useState<string[]>([])
  const [clothes, setClothes] = useState<string[]>([])
  const [firstAid, setFirstAid] = useState<string[]>([])
  const [essentials, setEssentials] = useState<string[]>([])
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }])

  // Handlers for overview input
  const handleOverviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOverview(e.target.value)
  }

  // Handlers for highlights section
  const handleContentChange = (index: number, value: string) => {
    const newHighlights = [...highlights]
    newHighlights[index].content = value
    setHighlights(newHighlights)
  }

  const handleLinkChange = (
    index: number,
    linkIndex: number,
    key: "text" | "url",
    value: string
  ) => {
    const newHighlights = [...highlights]
    newHighlights[index].links[linkIndex][key] = value
    setHighlights(newHighlights)
  }

  const addNewHighlight = () => {
    setHighlights([
      ...highlights,
      { content: "", links: [{ text: "", url: "" }] },
    ])
  }

  const addNewLink = (index: number) => {
    const newHighlights = [...highlights]
    newHighlights[index].links.push({ text: "", url: "" })
    setHighlights(newHighlights)
  }

  // Handlers for cost included and not included sections
  const addCostIncludedField = () => {
    setCostIncluded([...costIncluded, ""])
  }

  const addCostNotIncludedField = () => {
    setCostNotIncluded([...costNotIncluded, ""])
  }

  const handleCostIncludedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCostIncluded = [...costIncluded]
    newCostIncluded[index] = e.target.value
    setCostIncluded(newCostIncluded)
  }

  const handleCostNotIncludedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCostNotIncluded = [...costNotIncluded]
    newCostNotIncluded[index] = e.target.value
    setCostNotIncluded(newCostNotIncluded)
  }

  const removeCostIncludedField = (index: number) => {
    const newCostIncluded = costIncluded.filter((_, i) => i !== index)
    setCostIncluded(newCostIncluded)
  }

  const removeCostNotIncludedField = (index: number) => {
    const newCostNotIncluded = costNotIncluded.filter((_, i) => i !== index)
    setCostNotIncluded(newCostNotIncluded)
  }

  // Handlers for packing list section
  const addField = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[]
  ) => {
    setState([...state, ""])
  }

  const handleChange = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[],
    index: number,
    value: string
  ) => {
    const newState = [...state]
    newState[index] = value
    setState(newState)
  }

  const removeField = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[],
    index: number
  ) => {
    const newState = state.filter((_, i) => i !== index)
    setState(newState)
  }

  // Handlers for FAQ section
  const handleFaqChange = (
    index: number,
    key: "question" | "answer",
    value: string
  ) => {
    const newFaqs = [...faqs]
    newFaqs[index][key] = value
    setFaqs(newFaqs)
  }

  const addFaqField = () => {
    setFaqs([...faqs, { question: "", answer: "" }])
  }

  const removeFaqField = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index)
    setFaqs(newFaqs)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Overview Section */}
      <div>
        <label
          htmlFor="overview"
          className="block text-lg font-semibold text-gray-700"
        >
          Overview
        </label>
        <textarea
          id="overview"
          name="overview"
          value={overview}
          onChange={handleOverviewChange}
          placeholder="Write a brief overview of the trek..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={5}
        ></textarea>
        <div className="mt-2 text-sm text-gray-500">
          {overview ? `Overview Preview: ${overview}` : "No overview entered"}
        </div>
      </div>

      {/* Trek Highlights Section */}
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <input
                type="text"
                value={highlight.content}
                onChange={(e) => handleContentChange(index, e.target.value)}
                placeholder="Enter highlight content"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Links Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Links
              </label>
              {highlight.links.map((link, linkIndex) => (
                <div key={linkIndex} className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={link.text}
                    onChange={(e) =>
                      handleLinkChange(index, linkIndex, "text", e.target.value)
                    }
                    placeholder="Text (key)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) =>
                      handleLinkChange(index, linkIndex, "url", e.target.value)
                    }
                    placeholder="URL (value)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addNewLink(index)}
                className="text-blue-600 hover:text-blue-800 mt-2"
              >
                + Add New Link
              </button>
            </div>

            {index === highlights.length - 1 && (
              <button
                type="button"
                onClick={addNewHighlight}
                className="text-green-600 hover:text-green-800 mt-4 px-4 py-2 bg-green-100 rounded-md"
              >
                + Add New Highlight
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Services Section (Cost Included, Not Included) */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Services</h3>

        {/* Cost Included */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700">Cost Included</h4>
          {costIncluded.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) => handleCostIncludedChange(e, index)}
                placeholder="Enter cost included item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeCostIncludedField(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addCostIncludedField}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>

        {/* Cost Not Included */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">
            Cost Not Included
          </h4>
          {costNotIncluded.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) => handleCostNotIncludedChange(e, index)}
                placeholder="Enter cost not included item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeCostNotIncludedField(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addCostNotIncludedField}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>
      </div>

      {/* Packing List Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Packing List</h3>

        {/* General */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-700">General</h4>
          {general.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleChange(setGeneral, general, index, e.target.value)
                }
                placeholder="Enter general packing item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeField(setGeneral, general, index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addField(setGeneral, general)}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>

        {/* Clothes */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">Clothes</h4>
          {clothes.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleChange(setClothes, clothes, index, e.target.value)
                }
                placeholder="Enter clothes packing item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeField(setClothes, clothes, index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addField(setClothes, clothes)}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>

        {/* First Aid */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">First Aid</h4>
          {firstAid.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleChange(setFirstAid, firstAid, index, e.target.value)
                }
                placeholder="Enter first aid item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeField(setFirstAid, firstAid, index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addField(setFirstAid, firstAid)}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>

        {/* Essentials */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">Essentials</h4>
          {essentials.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleChange(setEssentials, essentials, index, e.target.value)
                }
                placeholder="Enter essential item"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => removeField(setEssentials, essentials, index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addField(setEssentials, essentials)}
            className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
          >
            + Add New Field
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">FAQ</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <input
              type="text"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              placeholder="Enter question"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              placeholder="Enter answer"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => removeFaqField(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addFaqField}
          className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
        >
          + Add New FAQ
        </button>
      </div>
    </div>
  )
}

export default TrekForm
