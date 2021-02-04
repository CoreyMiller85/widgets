import React from "react";

const Dropdown = (props) => {
  const options = props.options.map((option) => {
    return <option value={option.value}>{option.label}</option>;
  });

  return (
    <div>
      <select>{options}</select>
    </div>
  );
};

export default Dropdown;
