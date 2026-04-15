import React, { ReactNode } from 'react'

const bgVariants = {
  primary: "bg-[#084B83]",
  secondary: "bg-white",
};

const textVariants = {
  light: "text-white",
  dark: "text-black",
};

const borderVariants = {
  outline: "border-2 border-black",
  none: "border-0",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof bgVariants;
  text?: keyof typeof textVariants;
   border?: keyof typeof borderVariants;
};

const Button = ({
  children,
  variant = "primary",
  text = "light",
  border = "none"
}: ButtonProps) => {
  return (
    <button
      className={`${bgVariants[variant]} ${textVariants[text]} ${borderVariants[border]} py-2.5 px-5 rounded text-[20px] font-medium btn-text w-[225px] h-[46px] flex justify-center items-center cursor-pointer`}
    >
      {children}
    </button>
  );
};
export default Button