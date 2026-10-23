# Anime DB: a web application

> A React website for browsing, searching and comparing anime, with a release timeline chart.

**Type of digital solution:** Website (single-page React application)
**Author:** [Your Name & Surname]

---

## Table of Contents

<details>
<summary>Click to expand</summary>

1. [About the Project](#about-the-project)
   - [Short Description](#short-description)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [How to Install](#how-to-install)
3. [Project Features](#project-features)
4. [Development Process](#development-process)
5. [Final Outcome](#final-outcome)
6. [Conclusion](#conclusion)
7. [Footer](#footer)
   - [License](#license)
   - [Author](#author)
   - [Acknowledgements](#acknowledgements)

</details>

---

## About the Project

### Short Description

Anime DB is a website that lets users explore anime in one place. It pulls data from the Anime DB API (via RapidAPI) and presents it in a dark red and amber themed interface. Users can browse a sample list of titles on the Home page, search for specific anime by keyword, compare two anime side by side on the Compare page, and view a line chart of release trends on the Timeline page.

The project was built to practise connecting a React front end to an external API, handling loading, error and empty states, and structuring a multi-page application with client-side routing.

> *Add a screenshot or mockup of the Home page here, e.g. `![Home page](./screenshots/home.png)`*

### Built With

| Technology | Purpose |
| --- | --- |
| **React** | UI components and state management |
| **React Router** | Client-side routing between pages |
| **Axios** | HTTP requests to the API |
| **Chart.js / react-chartjs-2** | Timeline line chart |
| **RapidAPI: Anime DB API** | Source of anime data |
| **JavaScript (ES6+), CSS** | Application logic and styling |

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended): [Download here](https://nodejs.org/)
- **npm** (installed with Node.js)
- **A RapidAPI key** for the Anime DB API:
  1. Create a free account at [RapidAPI](https://rapidapi.com/).
  2. Subscribe to the [Anime DB API](https://rapidapi.com/) (search for "Anime DB").
  3. Copy your `X-RapidAPI-Key` from the API's dashboard.

> **Note:** This project is a front-end only application. There is no separate backend repository to set up.

### How to Install

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   If the packages are not already listed in `package.json`, install them manually:
   ```bash
   npm install axios react-router-dom chart.js react-chartjs-2
   ```

3. **Add your API key**
   Create a `.env` file in the project root:
   ```
   REACT_APP_RAPIDAPI_KEY=your_api_key_here
   ```
   Then in `api.js`, read the key from the environment instead of hardcoding it:
   ```js
   const API_HEADERS = {
     "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
     "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
   };
   ```
   Make sure `.env` is listed in your `.gitignore` so your key is never committed.

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

---

## Project Features

### Home: Browse and Search
Displays a grid of anime cards (title and cover image) loaded from the API when the page opens. A search bar lets users look up any anime by keyword, and the grid updates with the results. Cards lift and highlight on hover.

> *Add a screenshot or GIF of browsing and searching here.*

### Compare: Side-by-Side Comparison
Users search for two anime independently and view their details next to each other: score, episodes, status, type, aired date, studios, genres and a short synopsis. Each side can be cleared and searched again.

> *Add a screenshot or GIF of the comparison here.*

### Timeline: Release Trends
A line chart built with Chart.js that visualises the number of anime releases across different years. It currently uses sample data and is designed to be connected to real API data.

> *Add a screenshot of the timeline chart here.*

### Additional Features
- Sticky navigation bar with hover effects, shared across all pages
- Loading, error and "no results" states for every request
- Defensive handling of inconsistent API field names (e.g. `title`, `name`, `name_english`)
- Consistent fallback response so a failed request never crashes the interface

---

## Development Process

### Architecture

The app is a single-page React application with three routes, wrapped by a persistent navigation bar.

```
App.js (Router)
├── Navbar.jsx            (shown on every page)
├── LandingPage.js        (route: /)
│   └── AnimeCard.jsx     (reusable card)
├── ComparePage.js        (route: /compare)
└── TimeLinePage.js       (route: /timeline)

api.js                    (all communication with the Anime DB API)
```

**Key decisions**

- **API logic is centralised in `api.js`.** `getAnimeList` and `searchAnime` are shared by the Home and Compare pages, which avoids duplicated request code and allows a consistent fallback (`{ data: [], meta: {} }`) when a request fails.
- **A reusable `AnimeCard` component** displays a single anime and is used wherever titles are listed.
- **Local component state** (`useState`, `useEffect`) tracks the list of results, loading status, errors and search terms for each page.

### Theme and Design

The interface uses a dark background with a crimson-to-black gradient, red borders and amber accents, chosen to give the site a bold, cinematic feel that suits anime. Colours used throughout:

| Colour | Hex | Use |
| --- | --- | --- |
| Dark red | `#3a0a13` | Gradient backgrounds |
| Crimson | `#e8002D` / `#FF1744` | Headers, borders, highlights |
| Amber | `#FFB300` | Accents, buttons, headings |
| Cream | `#F5F0E8` | Text |
| Near black | `#1a1a1a` / `#0A0A0A` | Backgrounds, inputs |

> *Optionally add a moodboard or wireframe summary image here.*

### Challenges and Solutions

| Challenge | Solution |
| --- | --- |
| The API returns different field names for the same data | Checked multiple possible fields (e.g. `anime.title \|\| anime.name \|\| anime.name_english`) with a safe default |
| Keeping the UI responsive during network requests | Tracked `loading`, `error` and result state separately for every search |
| Two independent searches on one page | Duplicated state and handlers for each side of the Compare page |
| Matching the chart to the site theme | Customised Chart.js options for colours, fonts, grid lines and tooltips |

### Testing

The application was tested manually, covering: initial page load, searching with valid and invalid terms, empty search submissions, clearing a comparison slot, navigating between pages, and behaviour when the API request fails.

---

## Final Outcome

### Demonstration Video

The walkthrough is split across three videos because of a recording time limit:

1. [Walkthrough: Part 1](https://drive.google.com/file/d/1eI1LQk5D3LSMJgODo2_MpKixxHDbKhBQ/view?usp=drive_link)
2. [Walkthrough: Part 2](https://drive.google.com/file/d/1VWp2fgEsaY0tpwiz41Hti_6DDrsqm__J/view?usp=drive_link)
3. [Walkthrough: Part 3](https://drive.google.com/file/d/1jLFMUmN-kPzpjzho-WARizR6IgbzztlX/view?usp=drive_link)

### Promotional Video / Deployed Link (optional)

*Add a link to the deployed site here, if available.*

---

## Conclusion

Building Anime DB gave me practical experience connecting a React app to an external API and handling the unpredictable parts of real data: inconsistent fields, slow responses and failed requests. Centralising API calls and tracking loading, error and empty states made the interface more reliable, and routing, state management and Chart.js came together in a working multi-page app.

**Challenges:** Dealing with varying API response formats and managing separate state for two independent searches.

**Future improvements**

- Connect the Timeline page to real release-year data from the API instead of sample data
- Extract the repeated search form on the Compare page into a reusable `SearchPanel` component
- Replace the repeated navbar link styling with a single `NavLink` component
- Move inline styles into a shared stylesheet so the theme can be changed in one place
- Add a small backend proxy to keep the API key off the client entirely
- Add pagination and filtering by genre, type and status

---

## Footer

### License

*Choose a license (e.g. MIT) and add it here. If you prefer to reserve all rights, state this explicitly:*

> Copyright © 2026 [Your Name & Surname]. All rights reserved.

### Author

**[Your Name & Surname]**
Email: [your.email@example.com]
LinkedIn: [your LinkedIn profile URL]
GitHub: [your GitHub profile URL]

### Acknowledgements

- [Anime DB API on RapidAPI](https://rapidapi.com/): anime data
- [React](https://react.dev/) documentation
- [React Router](https://reactrouter.com/) documentation
- [Axios](https://axios-http.com/) documentation
- [Chart.js](https://www.chartjs.org/) and [react-chartjs-2](https://react-chartjs-2.js.org/) documentation
- AI assistance (Claude by Anthropic) used for code review and documentation drafting
