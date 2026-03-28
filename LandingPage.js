/**
 * LandingPage - Home Page Component
 * Displays anime list, search functionality, and information about the app
 */

import React, { useState, useEffect } from "react";
import { getAnimeList, searchAnime } from "./api";
import AnimeCard from "./AnimeCard";

function LandingPage() {
  // STATE MANAGEMENT
  const [animeList, setAnimeList] = useState([]); // Stores all anime data
  const [loading, setLoading] = useState(true); // Loading state for API calls
  const [error, setError] = useState(null); // Error messages from API
  const [searchTerm, setSearchTerm] = useState(""); // User's search input

  // EFFECTS
  // Fetches initial anime list when the page first loads
  useEffect(() => {
    async function load() {
      try {
        const result = await getAnimeList(1, 12);
        setAnimeList(result.data || []);
      } catch (e) {
        setError("Unable to fetch anime");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []); // Empty dependency array = run only once on mount

  // EVENT HANDLERS
  // Handles when user clicks the Search button
  async function handleSearch(e) {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await searchAnime(searchTerm);
      setAnimeList(data || []);
    } catch (e) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3a0a13 0%, #1a1a1a 100%)",
        padding: "60px 40px",
        color: "#F5F0E8",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* WELCOME SECTION
            Displays the main heading and tagline at the top of the page */}
        <div
          style={{
            background: "linear-gradient(135deg, #3a0a13 0%, #e8002D 100%)",
            padding: "70px 60px",
            borderRadius: "28px",
            marginBottom: "70px",
            boxShadow:
              "0 12px 40px rgba(232, 0, 45, 0.25), 0 0 2px rgba(232, 0, 45, 0.5)",
          }}
        >
          <h1
            style={{
              fontSize: "3.5em",
              margin: "0 0 20px 0",
              color: "#F5F0E8",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Welcome to the Anime DB
          </h1>
          <p
            style={{
              fontSize: "1.3em",
              margin: "0",
              color: "#F5F0E8",
              opacity: 0.95,
            }}
          >
            Browse, compare, and explore anime timelines.
          </p>
        </div>

        {/* SEARCH SECTION
            Contains input field and search button for users to find anime */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(232, 0, 45, 0.1) 0%, rgba(255, 23, 68, 0.05) 100%)",
            border: "2px solid #FF1744",
            padding: "60px 50px",
            borderRadius: "24px",
            marginBottom: "70px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <form
            onSubmit={handleSearch}
            style={{ display: "flex", gap: "15px", alignItems: "center" }}
          >
            {/* Search input field - user types anime titles here */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search anime..."
              style={{
                padding: "18px 28px",
                fontSize: "1.1em",
                width: "300px",
                border: "2px solid #FFB300",
                borderRadius: "16px",
                background: "#0A0A0A",
                color: "#F5F0E8",
                outline: "none",
                transition: "all 0.3s ease",
                boxShadow:
                  "inset 0 2px 8px rgba(0,0,0,0.5), 0 0 0 0px rgba(255, 179, 0, 0)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#FF1744";
                e.target.style.boxShadow =
                  "inset 0 2px 8px rgba(0,0,0,0.5), 0 0 12px rgba(255, 23, 68, 0.4)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#FFB300";
                e.target.style.boxShadow =
                  "inset 0 2px 8px rgba(0,0,0,0.5), 0 0 0 0px rgba(255, 179, 0, 0)";
              }}
            />
            {/* Search button - submits the search query */}
            <button
              type="submit"
              style={{
                padding: "18px 55px",
                fontSize: "1.1em",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #FFB300 0%, #FF8800 100%)",
                color: "#0A0A0A",
                border: "none",
                borderRadius: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(255, 179, 0, 0.35)",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 8px 30px rgba(255, 179, 0, 0.5), 0 0 20px rgba(255, 179, 0, 0.3)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow =
                  "0 6px 20px rgba(255, 179, 0, 0.35)")
              }
            >
              Search
            </button>
          </form>
        </div>

        {/* LOADING STATE
            Shows a loading message while fetching data from the API */}
        {loading && (
          <p
            style={{
              fontSize: "1.2em",
              textAlign: "center",
              padding: "40px",
              color: "#FFB300",
            }}
          >
            Loading anime samples...
          </p>
        )}

        {/* ERROR STATE
            Shows error message if the API request fails */}
        {error && (
          <p
            style={{
              fontSize: "1.2em",
              textAlign: "center",
              padding: "40px",
              color: "#FF1744",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        {/* ANIME LIST SECTION
            Displays anime cards in a grid layout or no results message */}
        {!loading && !error && (
          <>
            {animeList.length === 0 ? (
              <p
                style={{
                  fontSize: "1.2em",
                  textAlign: "center",
                  padding: "40px",
                  color: "#FFB300",
                }}
              >
                No anime found.
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "16px",
                  marginBottom: "60px",
                }}
              >
                {animeList.map((a) => (
                  <AnimeCard key={a._id || a.mal_id || a.id} anime={a} />
                ))}
              </div>
            )}
          </>
        )}

        {/* FOOTER SECTION
            Information box explaining what the app does and its features */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(155, 0, 32, 0.2) 0%, rgba(232, 0, 45, 0.1) 100%)",
            border: "1px solid #9B0020",
            padding: "50px 60px",
            borderRadius: "24px",
            marginTop: "70px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p
            style={{
              fontSize: "1em",
              color: "#F5F0E8",
              lineHeight: "1.8",
              margin: "0",
            }}
          >
            This page uses the Anime DB API to fetch a sample list of titles.
            Click on an item in the navigation bar to explore further features
            like comparing or viewing timelines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
