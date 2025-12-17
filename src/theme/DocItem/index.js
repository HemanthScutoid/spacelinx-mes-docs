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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          fill="none"
          stroke="#e11d48"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="200"
          height="200"
        >
          <circle cx="60" cy="60" r="45" stroke-opacity="0.6">
            <animate
              attributeName="r"
              values="45;48;45"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.6;1;0.6"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="60" cy="60" r="35" />

          <line x1="38" y1="38" x2="82" y2="82">
            <animate
              attributeName="stroke-width"
              values="8;10;8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>
    );
  }

  return <DocItem {...props} />;
}
