import React from "react";
import BlogLayout from "@theme-original/BlogLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

export default function BlogLayoutWrapper(props) {
  const { accounts, instance } = useMsal();

  return (
    <>
      {/* If user is not logged in */}
      <UnauthenticatedTemplate>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <h2 style={{ color: "#e11d48" }}>Please log in to view blog posts</h2>
          <button
            onClick={() => instance.loginRedirect()}
            style={{
              backgroundColor: "var(--ifm-color-primary)",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            Login to Continue
          </button>
        </div>
      </UnauthenticatedTemplate>

      {/* If user is logged in */}
      <AuthenticatedTemplate>
        {accounts[0]?.username?.endsWith("@xdlinx.space") ? (
          <BlogLayout {...props} />
        ) : (
          <div
            style={{ textAlign: "center", padding: "4rem", color: "#e11d48" }}
          >
            <p>You are logged in but not authorized to view blog content.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              fill="none"
              stroke="#e11d48"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="200"
              height="200"
            >
              <circle cx="60" cy="60" r="45" strokeOpacity="0.6">
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
        )}
      </AuthenticatedTemplate>
    </>
  );
}
