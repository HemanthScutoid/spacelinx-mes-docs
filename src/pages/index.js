import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import {
  useMsal,
  UnauthenticatedTemplate,
  AuthenticatedTemplate,
} from "@azure/msal-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { accounts, instance } = useMsal();
  const mainRef = useRef(null);

  const moduleRefs = useRef([]);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.from(mainRef.current, {
      opacity: 0,
      x: -100,
      duration: 2.5,
      ease: "power3.out",
    });

    // Animate modules on scroll
    moduleRefs.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        x: -150,
        duration: 2.5,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    // About section animation
    gsap.from(aboutRef.current, {
      opacity: 0,
      x: -150,
      duration: 2.5,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // Utility to add refs for modules
  const addToRefs = (el) => {
    if (el && !moduleRefs.current.includes(el)) {
      moduleRefs.current.push(el);
    }
  };
  const handleLogin = () => {
    gsap.to(mainRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        instance.loginRedirect();
      },
    });
  };

  return (
    <Layout
      title="SpaceLinx MES"
      description="Smart Manufacturing Execution System for Aerospace & Beyond"
    >
      <main
        ref={mainRef}
        style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}
      >
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
                onClick={handleLogin}
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
            {accounts[0]?.username?.endsWith("@xdlinx.space") ? (
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
            ) : (
              <div style={{ marginTop: "2rem", color: "red" }}>
                <p>
                  You are logged in but not authorized to view documentation.
                </p>
              </div>
            )}
          </AuthenticatedTemplate>
        </section>

        {/* Modules Overview */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Modules Overview
          </h2>

          <div ref={addToRefs} style={{ marginBottom: "2rem" }}>
            <h3>Manufacturing</h3>
            <p>
              Manage your production processes efficiently. This module includes
              Products, Guides, Work Orders, and Material Kits to track and
              optimize your shop floor operations.
            </p>
          </div>

          <div ref={addToRefs} style={{ marginBottom: "2rem" }}>
            <h3>PLM (Product Lifecycle Management)</h3>
            <p>
              Track and control your product development lifecycle. Includes
              Parts, ECOs, Tools, and Machines for better design, production,
              and maintenance management.
            </p>
          </div>

          <div ref={addToRefs} style={{ marginBottom: "2rem" }}>
            <h3>Procurement</h3>
            <p>
              Simplify purchasing and vendor management. Covers Purchase Orders,
              Goods Receipts, Requisitions, and Vendors to manage the full
              procurement lifecycle.
            </p>
          </div>

          <div ref={addToRefs} style={{ marginBottom: "2rem" }}>
            <h3>Inventory</h3>
            <p>
              Keep your inventory under control. Manage Parts, Goods, Services,
              and Stock Movements for accurate tracking and planning.
            </p>
          </div>

          <div ref={addToRefs} style={{ marginBottom: "2rem" }}>
            <h3>Other Features</h3>
            <p>
              Additional tools to enhance your operations: Bulk Upload, Payment
              Terms, Roles, Permissions, and more.
            </p>
          </div>

          {/* About Section */}
          <section
            ref={aboutRef}
            style={{ marginTop: "3rem", textAlign: "center" }}
          >
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
