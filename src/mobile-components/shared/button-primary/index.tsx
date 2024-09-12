import classNames from 'classnames';
import React from 'react';

export declare interface ButtonPrimaryProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ButtonPrimary(props: ButtonPrimaryProps): JSX.Element {
  const { className, children, onClick } = props;

  return (
    <>
      <button
        onClick={onClick}
        className={classNames(`btn bg-gray-900 border-none rounded-none text-white`, className)}
        // disabled={disabled}
      >
        <span className="text-white">{children}</span>
      </button>
    </>
  );
}
