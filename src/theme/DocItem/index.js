import React from "react";
import DocItem from "@theme-original/DocItem";
import { useMsal } from "@azure/msal-react";

export default function DocItemWrapper(props) {
  const { accounts, instance } = useMsal();
  const isLoggedIn = accounts.length > 0;
  const isAllowedUser =
    isLoggedIn && accounts[0]?.username?.endsWith("@xdlinx.space");

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Access Denied</h2>
        <p>You must be logged in to view this documentation.</p>
        <button
          onClick={() => instance.loginRedirect()}
          style={{
            padding: "10px 20px",
            marginTop: "1rem",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  if (!isAllowedUser) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Access Denied</h2>
        <p>You are logged in but not authorized to view this documentation.</p>
      </div>
    );
  }

  return <DocItem {...props} />;
}
