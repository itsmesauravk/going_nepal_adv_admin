// PackingList.js
import React from "react"

const PackingList = ({
  list,
  setList,
  handleChange,
  addField,
  removeField,
}) => (
  <div>
    <h3>Packing List</h3>
    {Object.keys(list).map((section) => (
      <div key={section} style={{ marginTop: "16px" }}>
        <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
        {list[section].map((item, index) => (
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
              onChange={(e) => handleChange(section, index, e.target.value)}
              placeholder={`Enter ${section} item`}
              style={{ marginRight: "8px" }}
            />
            <button onClick={() => removeField(section, index)}>Remove</button>
          </div>
        ))}
        <button onClick={() => addField(section)}>Add New Field</button>
      </div>
    ))}
  </div>
)

export default PackingList
