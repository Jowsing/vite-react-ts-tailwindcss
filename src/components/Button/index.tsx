import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
