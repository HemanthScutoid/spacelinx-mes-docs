import React from "react";
import DocItem from "@theme-original/DocItem";
import { useMsal } from "@azure/msal-react";

export default function DocItemWrapper(props) {
  const { accounts, instance } = useMsal();
  const isLoggedIn = accounts.length > 0;

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Access Denied</h2>
        <p>You must be logged in to view this documentation.</p>
        <button
          className="LoginButton"
          onClick={() => instance.loginRedirect()}
        >
          Login
        </button>
      </div>
    );
  }

  return <DocItem {...props} />;
}
