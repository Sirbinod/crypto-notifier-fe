import { FC } from "react";

interface InputInterface {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Corrected the onChange type
}

const Input: FC<InputInterface> = (props) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <input
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className="mb-2 p-2 border rounded bg-white border-[#003458]"
    />
  );
};

export default Input;