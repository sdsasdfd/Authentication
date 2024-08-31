import React from "react";

const PasswordInput = ({
  icon: Icon,
  setShowPassword,
  showPassword,

  ...props
}) => {
  return (
    <div className=" relative mb-6">
      <div
        className="absolute inset-y-0   flex items-center pl-3 cursor-pointer"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        <Icon className="size-5 text-blue-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300 transition duration-200"
      />
    </div>
  );
};

export default PasswordInput;
