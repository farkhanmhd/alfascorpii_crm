import React from "react";

export const metadata: {
  title: string;
  description: string;
} = {
  title: 'Dashcode Next Js',
  description: 'Dashcode is a popular dashboard template.',
}

/**
 * A layout component that wraps children in a fragment.
 * @param {{ children: React.ReactNode }} props The component props.
 * @returns {JSX.Element} A fragment containing the children.
 */
const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
