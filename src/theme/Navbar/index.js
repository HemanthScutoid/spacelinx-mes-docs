// src/theme/Navbar/index.js
import React from "react";
import OriginalNavbar from "@theme-original/Navbar";
import { useMsal } from "@azure/msal-react";

export default function NavbarWrapper(props) {
  const { accounts, instance } = useMsal();
  const isLoggedIn = accounts.length > 0;
  const existingItems = props.navbar?.items || [];

  // Create a new navbar config with conditional items
  const navbarConfig = {
    ...props.navbar,
    items: [
      ...existingItems,

      ...(isLoggedIn
        ? [
            {
              to: "/docs",
              label: "Docs",
              position: "left",
              activeBasePath: "/docs",
            },
          ]
        : []),
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <OriginalNavbar {...props} navbar={navbarConfig} />

      <div style={{ marginRight: "16px" }}>
        <button
          className="LoginButton"
          style={{}}
          onClick={() => {
            if (isLoggedIn) {
              instance.logoutRedirect();
            } else {
              instance.loginRedirect();
            }
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
