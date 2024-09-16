import classNames from 'classnames';
import React from 'react';

export declare interface ButtonPrimaryProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
  onClick?: () => void;
  textColor?: string;
}

export default function ButtonPrimary(props: ButtonPrimaryProps): JSX.Element {
  const { className, children, onClick, textColor } = props;

  return (
    <>
      <button
        onClick={onClick}
        className={classNames(``, className)}
        // disabled={disabled}
      >
        <span className={`${textColor ? textColor : "text-white"} `}>{children}</span>
      </button>
    </>
  );
}
