import React, { ReactNode } from 'react';

// type properties
interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  id?: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
