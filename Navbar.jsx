/**
 * Navbar.jsx - Navigation Component
 *
 * Provides navigation between different pages of the application.
 * This is a simple navbar implementation that can be enhanced later with
 * more sophisticated styling and additional features.
 */

import React from "react";
import { Link } from "react-router-dom";

/**
 * Navbar component - main navigation for the application
 *
 * Displays links to:
 * - Home: Landing page with anime browsing
 * - Compare: Page to compare multiple anime
 * - Timeline: Timeline visualization of anime releases
 *
 * @returns {JSX.Element} Navigation bar with links to all pages
 */
function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #3a0a13 0%, #e8002D 100%)",
        padding: "20px 40px",
        boxShadow: "0 4px 20px rgba(232, 0, 45, 0.4)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#F5F0E8",
            textDecoration: "none",
            fontSize: "1.1em",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "10px 20px",
            borderRadius: "6px",
            transition: "all 0.3s ease",
            cursor: "pointer",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "#FFB300";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          Home
        </Link>
        <Link
          to="/compare"
          style={{
            color: "#F5F0E8",
            textDecoration: "none",
            fontSize: "1.1em",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "10px 20px",
            borderRadius: "6px",
            transition: "all 0.3s ease",
            cursor: "pointer",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "#FFB300";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          Compare
        </Link>
        <Link
          to="/timeline"
          style={{
            color: "#F5F0E8",
            textDecoration: "none",
            fontSize: "1.1em",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "10px 20px",
            borderRadius: "6px",
            transition: "all 0.3s ease",
            cursor: "pointer",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "#FFB300";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          Timeline
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
