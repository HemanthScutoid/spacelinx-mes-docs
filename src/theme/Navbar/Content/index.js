import React from "react";
import NavbarContent from "@theme-original/Navbar/Content";
import { useMsal } from "@azure/msal-react";

export default function NavbarContentWrapper(props) {
  const { accounts, instance } = useMsal();
  const isLoggedIn = accounts.length > 0;

  const handleLogin = () => instance.loginRedirect();
  const handleLogout = () => instance.logoutRedirect();

  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      {/* Original left navbar items */}
      <NavbarContent {...props} />

      {/* Right side: email + login/logout in a single flex item */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap", // prevent breaking
        }}
      >
        {isLoggedIn && <span className="usermail">{accounts[0].username}</span>}
        <button
          onClick={isLoggedIn ? handleLogout : handleLogin}
          className={
            isLoggedIn ? "LoginButton AuthLogoutButton" : "LoginButton "
          }
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
