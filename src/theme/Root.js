// src/theme/Root.js
import React, { useEffect, useState } from "react";
import Root from "@theme-original/Root";
import { MsalProvider } from "@azure/msal-react";
import msalInstance from "../msalConfig";

export default function RootWrapper(props) {
  const [msalReady, setMsalReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await msalInstance.handleRedirectPromise();
      } catch (e) {
        console.error("MSAL error:", e);
      } finally {
        setMsalReady(true);
      }
    };
    init();
  }, []);

  if (!msalReady) return null;

  return (
    <MsalProvider instance={msalInstance}>
      <Root {...props} />
    </MsalProvider>
  );
}
