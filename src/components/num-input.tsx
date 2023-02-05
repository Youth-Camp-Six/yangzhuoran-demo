import React from "react";


interface IProps {
  value?: number
  onChange?: (newValue: number) => void
}

const NumberInput: React.FC<IProps> = ({ value = 0, onChange, ...props }) => {
  const clickHandler = (
    num: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 阻止默认事件
    e.preventDefault();
    if(onChange){
      onChange(value + num);
    }
  };

  return (
    <div style={{ padding: 10 }} {...props}>
      <button onClick={(e) => clickHandler(-1, e)}>-1</button>
      {value}
      <button onClick={(e) => clickHandler(1, e)}>+1</button>
    </div>
  );
};
export default NumberInput;
