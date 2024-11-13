"use client"

import Image from "next/image"
import React from "react"
import { useState } from "react"

//interface
interface Link {
  text: string
  url: string
}

interface TrekHighlight {
  content: string
  links: Link[]
}

// itenary - interface

const AddTrek = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const [country, setCountry] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [accommodations, setAccommodations] = useState<string[]>([""])
  const [meal, setMeal] = useState("")
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([])
  const [overview, setOverview] = useState("")
  const [highlights, setHighlights] = useState<TrekHighlight[]>([
    { content: "", links: [{ text: "", url: "" }] }, // Initial highlight with one empty link
  ])
  const [costIncluded, setCostIncluded] = useState<string[]>([""])
  const [costNotIncluded, setCostNotIncluded] = useState<string[]>([""])
  const [general, setGeneral] = useState<string[]>([""])
  const [clothes, setClothes] = useState<string[]>([""])
  const [firstAid, setFirstAid] = useState<string[]>([""])
  const [otherEssentials, setOtherEssentials] = useState<string[]>([""])
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
    { question: "", answer: "" },
  ])
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [video, setVideo] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)

  // thumbnail
  const handleImageChangeThumb = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setPreview(imageUrl)
    }
  }
  //country
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value)
  }
  //difficulty
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficulty(event.target.value)
  }
  // accommodation
  const handleAddAccommodation = () => {
    setAccommodations([...accommodations, ""])
  }
  // Handle input change for a specific accommodation
  const handleAccommodationChange = (index: number, value: string) => {
    const updatedAccommodations = [...accommodations]
    updatedAccommodations[index] = value
    setAccommodations(updatedAccommodations)
  }
  // Handle meal selection
  const handleMealChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMeal(e.target.value)
  }
  // Handle best seasons selection
  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Get the selected options and update the state with them
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )
    setSelectedSeasons(options)
  }
  //overview
  const handleOverviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOverview(e.target.value)
  }
  //trek highlights
  const handleContentChange = (index: number, value: string) => {
    const updatedHighlights = [...highlights]
    updatedHighlights[index].content = value
    setHighlights(updatedHighlights)
  }

  const handleLinkChange = (
    highlightIndex: number,
    linkIndex: number,
    field: "text" | "url",
    value: string
  ) => {
    const updatedHighlights = [...highlights]
    updatedHighlights[highlightIndex].links[linkIndex][field] = value
    setHighlights(updatedHighlights)
  }

  const addNewLink = (highlightIndex: number) => {
    const updatedHighlights = [...highlights]
    updatedHighlights[highlightIndex].links.push({ text: "", url: "" })
    setHighlights(updatedHighlights)
  }

  const addNewHighlight = () => {
    setHighlights([
      ...highlights,
      { content: "", links: [{ text: "", url: "" }] },
    ])
  }

  // services
  // Handle input change for Cost Included
  const handleCostIncludedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCostIncluded = [...costIncluded]
    updatedCostIncluded[index] = e.target.value
    setCostIncluded(updatedCostIncluded)
  }

  // Handle input change for Cost Not Included
  const handleCostNotIncludedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCostNotIncluded = [...costNotIncluded]
    updatedCostNotIncluded[index] = e.target.value
    setCostNotIncluded(updatedCostNotIncluded)
  }

  // Add a new field in Cost Included
  const addCostIncludedField = () => setCostIncluded([...costIncluded, ""])

  // Add a new field in Cost Not Included
  const addCostNotIncludedField = () =>
    setCostNotIncluded([...costNotIncluded, ""])

  // Remove a field in Cost Included
  const removeCostIncludedField = (index: number) => {
    const updatedCostIncluded = costIncluded.filter((_, i) => i !== index)
    setCostIncluded(updatedCostIncluded)
  }

  // Remove a field in Cost Not Included
  const removeCostNotIncludedField = (index: number) => {
    const updatedCostNotIncluded = costNotIncluded.filter((_, i) => i !== index)
    setCostNotIncluded(updatedCostNotIncluded)
  }

  // packing list
  // Generic function to handle changes in any category
  const handleChange = (
    setFunction: React.Dispatch<React.SetStateAction<string[]>>,
    items: string[],
    index: number,
    value: string
  ) => {
    const updatedItems = [...items]
    updatedItems[index] = value
    setFunction(updatedItems)
  }

  // Generic function to add a new field in any category
  const addField = (
    setFunction: React.Dispatch<React.SetStateAction<string[]>>,
    items: string[]
  ) => {
    setFunction([...items, ""])
  }

  // Generic function to remove a field in any category
  const removeField = (
    setFunction: React.Dispatch<React.SetStateAction<string[]>>,
    items: string[],
    index: number
  ) => {
    const updatedItems = items.filter((_, i) => i !== index)
    setFunction(updatedItems)
  }

  // faq
  // Handle change for question and answer fields
  const handleFaqChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const updatedFaqs = [...faqs]
    updatedFaqs[index][field] = value
    setFaqs(updatedFaqs)
  }

  // Add a new FAQ entry
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }])
  }

  // Remove an FAQ entry
  const removeFaq = (index: number) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index)
    setFaqs(updatedFaqs)
  }

  // images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      const newImages = [...images, ...selectedFiles].slice(0, 10) // Limit to 10 images
      setImages(newImages)

      // Generate image previews
      const newPreviews = newImages.map((file) => URL.createObjectURL(file))
      setPreviews(newPreviews)
    }
  }

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index)
    setImages(updatedImages)

    const updatedPreviews = previews.filter((_, i) => i !== index)
    setPreviews(updatedPreviews)
  }

  // video
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    if (selectedFile) {
      setVideo(selectedFile)
      setVideoPreview(URL.createObjectURL(selectedFile))
    }
  }

  const removeVideo = () => {
    setVideo(null)
    setVideoPreview(null)
  }

  return (
    <div>
      <form action="">
        {/* name  */}
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        {/* price */}
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
        </div>
        {/* thumbnail */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChangeThumb}
          />
          {preview && (
            <div style={{ marginTop: "20px" }}>
              <Image
                src={preview}
                alt="Image Preview"
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
        {/* country */}
        <div>
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={handleCountryChange}
            className="input"
          >
            <option value="">Select Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="Bhutan">Bhutan</option>
          </select>
        </div>
        {/*trekking days  */}
        <div>
          <h1>Trekking Days</h1>
          <div>
            {/* min  */}
            <div>
              <label htmlFor="min">Min</label>
              <input type="number" id="min" />
            </div>
            {/* max */}
            <div>
              <label htmlFor="max">Max</label>
              <input type="number" id="max" />
            </div>
          </div>
        </div>
        {/* location  */}
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
        </div>
        {/* difficulty  */}
        <div>
          <label
            htmlFor="difficulty"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Difficulty
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
            className="input"
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>
        {/* group size  */}
        <div>
          <h1>Grou size</h1>
          <div>
            {/* min  */}
            <div>
              <label htmlFor="min">Min</label>
              <input type="number" id="min" />
            </div>
            {/* max */}
            <div>
              <label htmlFor="max">Max</label>
              <input type="number" id="max" />
            </div>
          </div>
        </div>
        {/* starting & ending point  */}
        <div>
          <h1>Starting & Ending Point</h1>
          <div>
            <div>
              <label htmlFor="startingPoint">Starting Point</label>
              <input type="text" id="startingPoint" />
            </div>
            <div>
              <label htmlFor="endingPoint">Ending Point</label>
              <input type="text" id="endingPoint" />
            </div>
          </div>
        </div>
        {/* accommodation  */}
        <div>
          <label
            htmlFor="accommodation"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Accommodation
          </label>

          {accommodations.map((accommodation, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={accommodation}
                onChange={(e) =>
                  handleAccommodationChange(index, e.target.value)
                }
                className="input flex-1"
                placeholder={`Accommodation ${index + 1}`}
              />
              {accommodations.length - 1 === index && (
                <button
                  onClick={handleAddAccommodation}
                  className="text-green-600 hover:text-green-800"
                >
                  + Add New
                </button>
              )}
            </div>
          ))}
        </div>
        {/* meal  */}
        <div>
          <label
            htmlFor="meal"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Meal
          </label>
          <select
            id="meal"
            value={meal}
            onChange={handleMealChange}
            className="input w-full"
          >
            <option value="" disabled>
              Select a meal type
            </option>
            <option value="Inclusive">Inclusive</option>
            <option value="Exclusive">Exclusive</option>
          </select>
        </div>
        {/* best seasons  */}
        <div className="w-full">
          <label
            htmlFor="bestSeasons"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Best Seasons (Select multiple)
          </label>
          <select
            id="bestSeasons"
            name="bestSeasons"
            multiple
            value={selectedSeasons}
            onChange={handleSeasonChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>

          {/* Display selected seasons */}
          <div className="mt-2 text-sm text-gray-600">
            Selected Seasons:{" "}
            {selectedSeasons.length > 0 ? selectedSeasons.join(", ") : "None"}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Note: You can select multiple seasons by holding down `Ctrl`
            (Windows) or `Cmd` (Mac).
          </div>
        </div>
        {/* overview  */}
        <div className="w-full">
          <label
            htmlFor="overview"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Overview
          </label>
          <textarea
            id="overview"
            name="overview"
            value={overview}
            onChange={handleOverviewChange}
            placeholder="Write a brief overview of the trek..."
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            rows={5} // Adjusts the height of the textarea (5 rows in this case)
          ></textarea>

          {/* Optionally, display the current text */}
          <div className="mt-2 text-sm text-gray-600">
            {overview ? `Overview Preview: ${overview}` : "No overview entered"}
          </div>
        </div>
        {/* trek highlights  */}
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="border p-4 rounded-md shadow-md">
              {/* Content Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <input
                  type="text"
                  value={highlight.content}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                  placeholder="Enter highlight content"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Links Input */}
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Links
                </label>
                {highlight.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={link.text}
                      onChange={(e) =>
                        handleLinkChange(
                          index,
                          linkIndex,
                          "text",
                          e.target.value
                        )
                      }
                      placeholder="Text (key)"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(
                          index,
                          linkIndex,
                          "url",
                          e.target.value
                        )
                      }
                      placeholder="URL (value)"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
                {/* Add new link button */}
                <button
                  type="button"
                  onClick={() => addNewLink(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Add New Link
                </button>
              </div>

              {/* Add New Highlight button */}
              {index === highlights.length - 1 && (
                <button
                  type="button"
                  onClick={addNewHighlight}
                  className="text-green-600 hover:text-green-800 mt-4"
                >
                  Add New Highlight
                </button>
              )}
            </div>
          ))}
        </div>
        {/* Services -error while clicking on add new  */}
        <div>
          <h3>Services</h3>

          {/* Cost Included Section */}
          <div>
            <h4>Cost Included</h4>
            {costIncluded.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleCostIncludedChange(e, index)}
                  placeholder="Enter cost included item"
                  style={{ marginRight: "8px" }}
                />
                <button onClick={() => removeCostIncludedField(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addCostIncludedField}>Add New Field</button>
          </div>

          {/* Cost Not Included Section */}
          <div style={{ marginTop: "16px" }}>
            <h4>Cost Not Included</h4>
            {costNotIncluded.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleCostNotIncludedChange(e, index)}
                  placeholder="Enter cost not included item"
                  style={{ marginRight: "8px" }}
                />
                <button onClick={() => removeCostNotIncludedField(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addCostNotIncludedField}>Add New Field</button>
          </div>
        </div>
        {/* packing list  */}
        <div>
          <h3>Packing List</h3>

          {/* General Section */}
          <div>
            <h4>General</h4>
            {general.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleChange(setGeneral, general, index, e.target.value)
                  }
                  placeholder="Enter general item"
                  style={{ marginRight: "8px" }}
                />
                <button onClick={() => removeField(setGeneral, general, index)}>
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addField(setGeneral, general)}>
              Add New Field
            </button>
          </div>

          {/* Clothes Section */}
          <div style={{ marginTop: "16px" }}>
            <h4>Clothes</h4>
            {clothes.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleChange(setClothes, clothes, index, e.target.value)
                  }
                  placeholder="Enter clothes item"
                  style={{ marginRight: "8px" }}
                />
                <button onClick={() => removeField(setClothes, clothes, index)}>
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addField(setClothes, clothes)}>
              Add New Field
            </button>
          </div>

          {/* First Aid Section */}
          <div style={{ marginTop: "16px" }}>
            <h4>First Aid</h4>
            {firstAid.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleChange(setFirstAid, firstAid, index, e.target.value)
                  }
                  placeholder="Enter first aid item"
                  style={{ marginRight: "8px" }}
                />
                <button
                  onClick={() => removeField(setFirstAid, firstAid, index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addField(setFirstAid, firstAid)}>
              Add New Field
            </button>
          </div>

          {/* Other Essentials Section */}
          <div style={{ marginTop: "16px" }}>
            <h4>Other Essentials</h4>
            {otherEssentials.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleChange(
                      setOtherEssentials,
                      otherEssentials,
                      index,
                      e.target.value
                    )
                  }
                  placeholder="Enter essential item"
                  style={{ marginRight: "8px" }}
                />
                <button
                  onClick={() =>
                    removeField(setOtherEssentials, otherEssentials, index)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addField(setOtherEssentials, otherEssentials)}
            >
              Add New Field
            </button>
          </div>
        </div>
        {/* faq  */}
        <div>
          <h3>FAQ</h3>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) =>
                    handleFaqChange(index, "question", e.target.value)
                  }
                  placeholder="Enter question"
                  style={{ marginRight: "8px", width: "45%" }}
                />
                <input
                  type="text"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFaqChange(index, "answer", e.target.value)
                  }
                  placeholder="Enter answer"
                  style={{ marginRight: "8px", width: "45%" }}
                />
                <button onClick={() => removeFaq(index)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={addFaq}>Add New FAQ</button>
        </div>
        {/* note  */}
        <div>
          <label htmlFor="note">Note</label>
          <span>Write a note about the trek</span>
          <textarea id="note"></textarea>
        </div>
        {/* images */}
        <div>
          <h3>Upload Images (up to 10)</h3>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={images.length >= 10}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "16px" }}>
            {previews.map((preview, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  margin: "8px",
                  width: "100px",
                  height: "100px",
                }}
              >
                <Image
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  objectFit="cover"
                  width={100}
                  height={100}
                />
                <button
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "4px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          {images.length >= 10 && (
            <p style={{ color: "red" }}>You can only upload up to 10 images.</p>
          )}
        </div>
        {/* video  */}
        <div>
          <h3>Upload Video</h3>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
          {videoPreview && (
            <div style={{ marginTop: "16px" }}>
              <video
                src={videoPreview}
                controls
                width="400"
                style={{ borderRadius: "4px" }}
              />
              <button
                onClick={removeVideo}
                style={{
                  display: "block",
                  marginTop: "8px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove Video
              </button>
            </div>
          )}
        </div>
        {/* submit  */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddTrek
