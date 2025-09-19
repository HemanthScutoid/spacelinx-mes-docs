// src/pages/index.js
import React from "react";
import Layout from "@theme/Layout";
import {
  useMsal,
  UnauthenticatedTemplate,
  AuthenticatedTemplate,
} from "@azure/msal-react";

export default function Home() {
  const { accounts, instance } = useMsal();

  return (
    <Layout
      title="SpaceLinx MES"
      description="Smart Manufacturing Execution System for Aerospace & Beyond"
    >
      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            SpaceLinx MES
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--ifm-color-emphasis-600)",
            }}
          >
            A platform to streamline and digitize manufacturing operations
            across your enterprise.
          </p>

          {/* Login Button */}
          <UnauthenticatedTemplate>
            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={() => instance.loginRedirect()}
                style={{
                  backgroundColor: "var(--ifm-color-primary)",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  fontSize: "1.1rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Login to Continue
              </button>
            </div>
          </UnauthenticatedTemplate>

          <AuthenticatedTemplate>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="/docs/intro"
                style={{
                  backgroundColor: "var(--ifm-color-primary)",
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 24px",
                  fontSize: "1.1rem",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              >
                View Documentation
              </a>
            </div>
          </AuthenticatedTemplate>
        </section>

        {/* Modules Overview */}
        <section style={{ marginTop: "4rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Modules Overview
          </h2>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Manufacturing</h3>
            <p>
              Manage your production processes efficiently. This module includes
              Products, Guides, Work Orders, and Material Kits to track and
              optimize your shop floor operations.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>PLM (Product Lifecycle Management)</h3>
            <p>
              Track and control your product development lifecycle. Includes
              Parts, ECOs, Tools, and Machines for better design, production,
              and maintenance management.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Procurement</h3>
            <p>
              Simplify purchasing and vendor management. Covers Purchase Orders,
              Goods Receipts, Requisitions, and Vendors to manage the full
              procurement lifecycle.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Inventory</h3>
            <p>
              Keep your inventory under control. Manage Parts, Goods, Services,
              and Stock Movements for accurate tracking and planning.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Other Features</h3>
            <p>
              Additional tools to enhance your operations: Bulk Upload, Payment
              Terms, Roles, Permissions, and more.
            </p>
          </div>

          <section style={{ marginTop: "3rem", textAlign: "center" }}>
            <h2>About SpaceLinx MES</h2>
            <p style={{ lineHeight: "1.6" }}>
              SpaceLinx MES bridges the gap between ERP systems and actual
              production execution. It ensures real-time visibility, better
              control over manufacturing operations, and improved
              decision-making across all your processes.
            </p>
          </section>
        </section>
      </main>
    </Layout>
  );
}
