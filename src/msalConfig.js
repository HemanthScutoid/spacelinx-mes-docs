import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "36204b2f-bfd1-4820-a158-96d3d877eb68",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000/docs/intro",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
      },
    },
  },
});

export default msalInstance;
