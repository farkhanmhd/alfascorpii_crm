import React from "react";

export const metadata = {
  title: 'Dashcode Next Js',
  description: 'Dashcode is a popular dashboard template.',
}

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default layout;
