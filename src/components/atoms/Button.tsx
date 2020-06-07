import React, { ReactNode } from 'react';

// interface properties
interface iButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  id?: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<iButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
