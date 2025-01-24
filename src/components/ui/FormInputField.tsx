import React from "react";
import { InfoIcon } from "@/common/icons";

type InputFieldComponentProps = {
  title: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  maxLength?: number;
};

const InputFieldComponent = ({
  title,
  placeholder = "",
  value,
  setValue,
  maxLength = 40,
}: InputFieldComponentProps) => {
  return (
    <div className="p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <InfoIcon />
          <div className="text-white font-medium ml-2">{title}</div>
        </div>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-gray-700 text-white-400 font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputFieldComponent;
