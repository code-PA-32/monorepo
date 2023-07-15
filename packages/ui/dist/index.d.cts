import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: ({ children, onClick }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
