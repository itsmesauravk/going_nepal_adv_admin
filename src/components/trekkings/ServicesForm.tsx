// Services.js
import React from "react"

const Services = ({
  costIncluded,
  costNotIncluded,
  handleCostIncludedChange,
  handleCostNotIncludedChange,
  addCostIncludedField,
  addCostNotIncludedField,
  removeCostIncludedField,
  removeCostNotIncludedField,
}) => (
  <div>
    <h3>Services</h3>
    <div>
      <h4>Cost Included</h4>
      {costIncluded.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <input
            type="text"
            value={item}
            onChange={(e) => handleCostIncludedChange(e, index)}
            placeholder="Enter cost included item"
            style={{ marginRight: "8px" }}
          />
          <button onClick={() => removeCostIncludedField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addCostIncludedField}>Add New Field</button>
    </div>
    <div style={{ marginTop: "16px" }}>
      <h4>Cost Not Included</h4>
      {costNotIncluded.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
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
)

export default Services
