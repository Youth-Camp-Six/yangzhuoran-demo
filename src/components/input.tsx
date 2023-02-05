import React, { memo } from "react";

const Input: React.FC<any> = ({ value = "", onChange, ...props }) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <div style={{ padding: 10 }}>
      <input
        style={{ outline: "none" }}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </div>
  );
};
export default memo(Input);
