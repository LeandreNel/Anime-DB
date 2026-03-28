/**
 * Reusable Anime Display Component
 * This component displays a single anime title in a compact card format.
 * It's used throughout the app (Landing page, Compare page, etc.) to show anime information.
 * Handles varying API response field names for compatibility with different data formats.
 */

import React, { useState } from "react";

/**
 * AnimeCard component, displays a single anime in a card layout
 * @param {Object} props Component props
 * @param {Object} props.anime Anime object containing title and image data
 * @returns {JSX.Element} Card displaying anime title and image
 */
function AnimeCard({ anime }) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract title, API returns different field names, so check multiple options
  const title = anime.title || anime.name || anime.name_english || "Untitled";

  // Extract image URL, API can return image in different field names
  // This ensures compatibility with various API response formats
  const image =
    anime.image || anime.image_url || anime.cover || anime.poster || "";

  return (
    <div
      style={{
        width: "150px",
        borderRadius: "12px",
        padding: "12px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(58, 10, 19, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%)",
        border: isHovered ? "2px solid #FFB300" : "2px solid #FF1744",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 8px 24px rgba(232, 0, 45, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
          : "0 4px 12px rgba(232, 0, 45, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            marginBottom: "10px",
            borderRadius: "8px",
            display: "block",
            border: "1px solid #FFB300",
          }}
        />
      )}
      <h4
        style={{
          fontSize: "0.95rem",
          fontWeight: "600",
          margin: "0",
          color: "#F5F0E8",
          lineHeight: "1.3",
          wordWrap: "break-word",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </h4>
    </div>
  );
}

export default AnimeCard;
