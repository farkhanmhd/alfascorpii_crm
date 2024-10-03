import React from "react";
import { Provider } from "jotai";
import NextTopLoader from "nextjs-toploader";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";

export const metadata = {
  title: "AlfaScorpii CRM | ",
  description: "AlfaScorpii CRM",
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="custom-tippy dashcode-app">
          <Provider>
            <NextTopLoader />
            {children}
          </Provider>
        </body>
      </html>
    </>
  );
}
