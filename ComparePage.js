/**
 * Anime Comparison Page
 * This page allows users to search for two anime and compare their information side by side.
 * Features include:
 * - Search functionality for two separate anime
 * - Display detailed information for both anime
 * - Side-by-side comparison layout
 * - Styled to match the website theme
 */

import React, { useState } from "react";
import { searchAnime } from "./api";

/**
 * ComparePage component - search and compare two anime
 * Allows users to search for two anime and view detailed comparison
 * @returns {JSX.Element} Page with dual anime search and comparison display
 */
function ComparePage() {
  // State for first anime search
  const [searchTerm1, setSearchTerm1] = useState("");
  const [anime1, setAnime1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(null);

  // State for second anime search
  const [searchTerm2, setSearchTerm2] = useState("");
  const [anime2, setAnime2] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  // Handle search for first anime
  const handleSearch1 = async (e) => {
    e.preventDefault();
    if (!searchTerm1.trim()) return;

    setLoading1(true);
    setError1(null);
    try {
      const result = await searchAnime(searchTerm1);
      setAnime1(result.data?.[0] || null);
      if (!result.data || result.data.length === 0) {
        setError1("No anime found");
      }
    } catch (err) {
      setError1("Search failed");
    } finally {
      setLoading1(false);
    }
  };

  // Handle search for second anime
  const handleSearch2 = async (e) => {
    e.preventDefault();
    if (!searchTerm2.trim()) return;

    setLoading2(true);
    setError2(null);
    try {
      const result = await searchAnime(searchTerm2);
      setAnime2(result.data?.[0] || null);
      if (!result.data || result.data.length === 0) {
        setError2("No anime found");
      }
    } catch (err) {
      setError2("Search failed");
    } finally {
      setLoading2(false);
    }
  };

  // Clear anime 1
  const clearAnime1 = () => {
    setAnime1(null);
    setSearchTerm1("");
    setError1(null);
  };

  // Clear anime 2
  const clearAnime2 = () => {
    setAnime2(null);
    setSearchTerm2("");
    setError2(null);
  };

  // Helper function to render anime details
  const renderAnimeDetails = (anime) => {
    if (!anime) return null;

    const title = anime.title || anime.name || anime.name_english || "Unknown";
    const image =
      anime.image || anime.image_url || anime.cover || anime.poster || "";
    const score = anime.score || anime.rating || "N/A";
    const episodes = anime.episodes || "N/A";
    const status = anime.status || "N/A";
    const type = anime.type || "N/A";
    const synopsis =
      anime.synopsis || anime.description || "No description available";
    const airedFrom = anime.aired_from || anime.aired || "N/A";
    const studios = anime.studios || anime.studio || "N/A";
    const genres = anime.genres || anime.genre || "N/A";

    return (
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(58, 10, 19, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%)",
          border: "2px solid #FF1744",
          borderRadius: "16px",
          padding: "30px",
          color: "#F5F0E8",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "2px solid #FFB300",
              marginBottom: "20px",
            }}
          />
        )}
        <h3
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "0 0 15px 0",
            color: "#FFB300",
            letterSpacing: "1px",
          }}
        >
          {title}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255, 23, 68, 0.1)",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 5px 0",
                fontSize: "0.9em",
                color: "#FFB300",
              }}
            >
              Score
            </p>
            <p style={{ margin: 0, fontSize: "1.3em", fontWeight: "bold" }}>
              {score}
            </p>
          </div>
          <div
            style={{
              background: "rgba(255, 23, 68, 0.1)",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 5px 0",
                fontSize: "0.9em",
                color: "#FFB300",
              }}
            >
              Episodes
            </p>
            <p style={{ margin: 0, fontSize: "1.3em", fontWeight: "bold" }}>
              {episodes}
            </p>
          </div>
          <div
            style={{
              background: "rgba(255, 23, 68, 0.1)",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 5px 0",
                fontSize: "0.9em",
                color: "#FFB300",
              }}
            >
              Status
            </p>
            <p style={{ margin: 0, fontSize: "1.1em", fontWeight: "bold" }}>
              {status}
            </p>
          </div>
          <div
            style={{
              background: "rgba(255, 23, 68, 0.1)",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 5px 0",
                fontSize: "0.9em",
                color: "#FFB300",
              }}
            >
              Type
            </p>
            <p style={{ margin: 0, fontSize: "1.1em", fontWeight: "bold" }}>
              {type}
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255, 23, 68, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "0.9em",
              color: "#FFB300",
              fontWeight: "bold",
            }}
          >
            Aired
          </p>
          <p style={{ margin: 0, fontSize: "0.95em" }}>{airedFrom}</p>
        </div>

        <div
          style={{
            background: "rgba(255, 23, 68, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "0.9em",
              color: "#FFB300",
              fontWeight: "bold",
            }}
          >
            Studios
          </p>
          <p style={{ margin: 0, fontSize: "0.95em" }}>
            {typeof studios === "string"
              ? studios
              : Array.isArray(studios)
                ? studios.join(", ")
                : "N/A"}
          </p>
        </div>

        <div
          style={{
            background: "rgba(255, 23, 68, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "0.9em",
              color: "#FFB300",
              fontWeight: "bold",
            }}
          >
            Genres
          </p>
          <p style={{ margin: 0, fontSize: "0.95em" }}>
            {typeof genres === "string"
              ? genres
              : Array.isArray(genres)
                ? genres.join(", ")
                : "N/A"}
          </p>
        </div>

        <div
          style={{
            background: "rgba(255, 23, 68, 0.1)",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "0.9em",
              color: "#FFB300",
              fontWeight: "bold",
            }}
          >
            Synopsis
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.95em",
              lineHeight: "1.6",
              maxHeight: "120px",
              overflow: "hidden",
            }}
          >
            {synopsis.substring(0, 200)}...
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3a0a13 0%, #1a1a1a 100%)",
        padding: "60px 40px",
        color: "#F5F0E8",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* PAGE HEADER */}
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
            Compare Anime
          </h1>
          <p
            style={{
              fontSize: "1.3em",
              margin: "0",
              color: "#F5F0E8",
              opacity: 0.95,
            }}
          >
            Search for two anime and compare their details side by side.
          </p>
        </div>

        {/* SEARCH SECTION */}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            {/* Search for first anime */}
            <div>
              <h3
                style={{
                  margin: "0 0 20px 0",
                  color: "#FFB300",
                  fontSize: "1.2em",
                }}
              >
                Anime 1
              </h3>
              <form
                onSubmit={handleSearch1}
                style={{ display: "flex", gap: "15px", marginBottom: "15px" }}
              >
                <input
                  type="text"
                  value={searchTerm1}
                  onChange={(e) => setSearchTerm1(e.target.value)}
                  placeholder="Search first anime..."
                  style={{
                    flex: 1,
                    padding: "18px 28px",
                    fontSize: "1em",
                    border: "2px solid #FFB300",
                    borderRadius: "16px",
                    background: "#0A0A0A",
                    color: "#F5F0E8",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "18px 40px",
                    fontSize: "1em",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(135deg, #FFB300 0%, #FF8800 100%)",
                    color: "#0A0A0A",
                    border: "none",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 20px rgba(255, 179, 0, 0.35)",
                  }}
                >
                  Search
                </button>
              </form>
              {error1 && (
                <p style={{ color: "#FF1744", fontSize: "0.9em" }}>{error1}</p>
              )}
              {loading1 && (
                <p style={{ color: "#FFB300", fontSize: "0.9em" }}>
                  Searching...
                </p>
              )}
              {anime1 && (
                <button
                  onClick={clearAnime1}
                  style={{
                    padding: "10px 20px",
                    background: "#FF1744",
                    color: "#F5F0E8",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9em",
                    transition: "all 0.3s ease",
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search for second anime */}
            <div>
              <h3
                style={{
                  margin: "0 0 20px 0",
                  color: "#FFB300",
                  fontSize: "1.2em",
                }}
              >
                Anime 2
              </h3>
              <form
                onSubmit={handleSearch2}
                style={{ display: "flex", gap: "15px", marginBottom: "15px" }}
              >
                <input
                  type="text"
                  value={searchTerm2}
                  onChange={(e) => setSearchTerm2(e.target.value)}
                  placeholder="Search second anime..."
                  style={{
                    flex: 1,
                    padding: "18px 28px",
                    fontSize: "1em",
                    border: "2px solid #FFB300",
                    borderRadius: "16px",
                    background: "#0A0A0A",
                    color: "#F5F0E8",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "18px 40px",
                    fontSize: "1em",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(135deg, #FFB300 0%, #FF8800 100%)",
                    color: "#0A0A0A",
                    border: "none",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 20px rgba(255, 179, 0, 0.35)",
                  }}
                >
                  Search
                </button>
              </form>
              {error2 && (
                <p style={{ color: "#FF1744", fontSize: "0.9em" }}>{error2}</p>
              )}
              {loading2 && (
                <p style={{ color: "#FFB300", fontSize: "0.9em" }}>
                  Searching...
                </p>
              )}
              {anime2 && (
                <button
                  onClick={clearAnime2}
                  style={{
                    padding: "10px 20px",
                    background: "#FF1744",
                    color: "#F5F0E8",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9em",
                    transition: "all 0.3s ease",
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* COMPARISON SECTION */}
        {(anime1 || anime2) && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              marginBottom: "70px",
            }}
          >
            <div>
              {anime1 ? (
                renderAnimeDetails(anime1)
              ) : (
                <div
                  style={{
                    background: "rgba(232, 0, 45, 0.1)",
                    border: "2px dashed #FF1744",
                    borderRadius: "16px",
                    padding: "60px 30px",
                    textAlign: "center",
                    color: "#FFB300",
                  }}
                >
                  Search for the first anime to compare
                </div>
              )}
            </div>
            <div>
              {anime2 ? (
                renderAnimeDetails(anime2)
              ) : (
                <div
                  style={{
                    background: "rgba(232, 0, 45, 0.1)",
                    border: "2px dashed #FF1744",
                    borderRadius: "16px",
                    padding: "60px 30px",
                    textAlign: "center",
                    color: "#FFB300",
                  }}
                >
                  Search for the second anime to compare
                </div>
              )}
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {!anime1 && !anime2 && (
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(155, 0, 32, 0.2) 0%, rgba(232, 0, 45, 0.1) 100%)",
              border: "1px solid #9B0020",
              padding: "80px 60px",
              borderRadius: "24px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2
              style={{
                color: "#FFB300",
                fontSize: "1.8em",
                margin: "0 0 15px 0",
              }}
            >
              Start Comparing
            </h2>
            <p
              style={{
                color: "#F5F0E8",
                fontSize: "1.1em",
                margin: 0,
                opacity: 0.8,
              }}
            >
              Search for anime above to begin your comparison
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComparePage;
