import React from "react";
import {Provider} from "jotai"
import NextTopLoader from 'nextjs-toploader';
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";

export const metadata = {
  title: 'Dashcode Next Js',
  description: 'Dashcode is a popular dashboard template.',
}
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="font-inter  custom-tippy dashcode-app">
          <Provider>
          <NextTopLoader />
            {children}
          </Provider>
        </body>
      </html>
    </>
  );
}
