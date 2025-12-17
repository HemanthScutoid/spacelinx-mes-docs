import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import {
  useMsal,
  UnauthenticatedTemplate,
  AuthenticatedTemplate,
} from "@azure/msal-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCogs,
  FaTools,
  FaShoppingCart,
  FaWarehouse,
  FaBox,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { accounts, instance } = useMsal();
  const mainRef = useRef(null);
  const moduleRefs = useRef([]);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(mainRef.current, {
      opacity: 0,
      x: -100,
      duration: 2,
      ease: "power3.out",
    });

    moduleRefs.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        x: -150,
        duration: 1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

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

  const modules = [
    {
      title: "Manufacturing",
      icon: <FaCogs color="var( --icon-color-primary)" size={24} />,
      description:
        "Manage your production processes efficiently. This module includes Products, Guides, Work Orders, and Material Kits to track and optimize your shop floor operations.",
    },
    {
      title: "PLM (Product Lifecycle Management)",
      icon: <FaTools color="var( --icon-color-primary)" size={24} />,
      description:
        "Track and control your product development lifecycle. Includes Parts, ECOs, Tools, and Machines for better design, production, and maintenance management.",
    },
    {
      title: "Procurement",
      icon: <FaShoppingCart color="var( --icon-color-primary)" size={24} />,
      description:
        "Simplify purchasing and vendor management. Covers Purchase Orders, Goods Receipts, Requisitions, and Vendors to manage the full procurement lifecycle.",
    },
    {
      title: "Inventory",
      icon: <FaWarehouse color="var( --icon-color-primary)" size={24} />,
      description:
        "Keep your inventory under control. Manage Parts, Goods, Services, and Stock Movements for accurate tracking and planning.",
    },
    {
      title: "Other Features",
      icon: <FaBox color="var( --icon-color-primary)" size={24} />,
      description:
        "Additional tools to enhance your operations: Bulk Upload, Payment Terms, Roles, Permissions, and more.",
    },
  ];

  return (
    <Layout
      title="SpaceLinx MES"
      description="Smart Manufacturing Execution System for Aerospace & Beyond"
    >
      <main
        ref={mainRef}
        style={{
          padding: "2rem",
          maxWidth: "900px",
          margin: "-20px auto",
        }}
      >
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
          {/* <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            SpaceLinx MES
          </h1> */}
          <div
            style={{
              backgroundColor: "#202020",
              borderRadius: "8px",
              width: "250px",
              margin: "auto",
              padding: "15px 20px",
            }}
          >
            <img
              src="/assets/logos/spacelinxlogo.png"
              style={{ width: "300px", height: "40px" }}
            />
          </div>

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
              <div style={{ marginTop: "2rem", color: "#e11d48" }}>
                <p>
                  You are logged in but not authorized to view documentation.
                </p>
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
        </section>

        {/* Modules Overview */}
        {/* Modules Overview */}
        <section style={{ marginTop: "-20px" }}>
          <h2 style={{ textAlign: "center" }}>Modules Overview</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {modules.map((module, index) => (
              <div
                key={index}
                ref={addToRefs}
                style={{
                  color: "var(  --text-color-primary)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 0 2px  #00ccff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "1rem",
                  }}
                >
                  {module.icon}
                  <h3 style={{ margin: 0, color: "#00ccff" }}>
                    {module.title}
                  </h3>
                </div>
                <p style={{ lineHeight: "1.5" }}>{module.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
