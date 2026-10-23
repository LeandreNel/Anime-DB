# The Crossroads Exchange: a web application

> A browser-based trading game where every trade shapes your reputation and your ending.

**Type of digital solution:** Website (browser game)
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

The Crossroads Exchange is a browser-based trading game. The player chooses one of four characters (the Witch, the Blacksmith, the Alchemist or the Rogue) and runs a small shop at a crossroads. Eight visitors arrive one at a time, each requesting one item and offering another in return. The player decides whether to accept or decline each trade, and every choice raises or lowers their reputation. Some trades are kind, some are shady, and some are morally grey. After the last visitor, the player's final reputation decides which ending they receive, from **Saintly** to **Sinister**.

The project was built to practise combining PHP page templating, JavaScript game logic, responsive CSS and a relational database design in one themed application.

> *Add a screenshot or mockup of the character selection screen here, e.g. `![Character select](./screenshots/index.png)`*

### Built With

| Technology | Purpose |
| --- | --- |
| **PHP** | Page templates for the character select, game and end screens |
| **JavaScript (ES6)** | Game data, trading logic, inventory, reputation and endings |
| **CSS3** | Page styling and responsive layouts (media queries) |
| **MariaDB / MySQL** | Database schema and seed data |
| **XAMPP (Apache)** | Local development server |
| **Adobe Fonts (Typekit)** | Custom typography |

---

## Getting Started

### Prerequisites

- **XAMPP** (includes Apache, PHP and MySQL/MariaDB): [Download here](https://www.apachefriends.org/)
- **MySQL 8.0+ or MariaDB 10.5+** (included with XAMPP)
- **A modern web browser** (Chrome, Firefox, Edge or Safari)
- An internet connection (the Typekit font stylesheet is loaded from Adobe)

> **Note:** This project is a single repository containing both the front end and the PHP pages. There is no separate backend repository.

### How to Install

1. **Clone the repository** into the XAMPP `htdocs` folder
   ```bash
   cd C:\xampp\htdocs
   git clone https://github.com/<your-username>/<your-repo-name>.git "The Crossroads Exchange"
   ```

2. **Start the servers**
   Open the XAMPP Control Panel and start **Apache** and **MySQL**.

3. **Import the database**
   Either import `crossroads_exchange.sql` through phpMyAdmin (`http://localhost/phpmyadmin`), or run this from a PowerShell terminal in the project folder:
   ```powershell
   Get-Content -Raw crossroads_exchange.sql | C:\xampp\mysql\bin\mysql.exe -u root
   ```
   The dump creates the `crossroads_exchange` database and fills these tables:
   `characters`, `items`, `starting_stock`, `visitors`, `ending_tiers`, `game_sessions` and `trade_responses`.

4. **Open the game**
   Go to:
   ```
   http://localhost/The%20Crossroads%20Exchange/Test/index.php
   ```

5. **Choose a character** to begin playing.

---

## Project Features

### Character Selection
Four playable characters, each with their own themed shop, colours, artwork and tagline:

| Character | Location | Tagline |
| --- | --- | --- |
| The Witch | The Witch's Hollow | Herbs, hexes, and a suspiciously good cup of tea. |
| The Blacksmith | The Ember Forge | Every hammer swing has two possible futures. |
| The Alchemist | The Peppermint Atelier | One tiny measurement away from 'oops'. |
| The Rogue | The Hollow Den | Finders keepers, askers... also keepers, technically. |

> *Add a screenshot or GIF of the character selection screen here.*

### Trading with Visitors
Eight visitors arrive in a fixed order. Each one has a story and asks for a specific item in exchange for another. The player can **accept** or **decline** each trade.

| # | Visitor | Requests | Offers | Accept / Decline |
| --- | --- | --- | --- | --- |
| 1 | Old Bramblewick, the hedge healer | Wolfbane Sprig | Healing Poultice | +2 / -1 |
| 2 | Tomas Ironhand, the fair smith | Iron Ingot | Obsidian Shard | +1 / -1 |
| 3 | Grix the Pawnbroker | Lantern Oil | Iron Ingot | 0 / 0 |
| 4 | Sister Marrow, the plague-witch | Wolfbane Sprig | Grave Dust | -2 / +1 |
| 5 | Yenna the Wayfinder | Harvest Bread | Moonstone | +2 / -1 |
| 6 | Brother Aldous, the quiet monk | Healing Poultice | Blessed Candle | +2 / -1 |
| 7 | The Widow in Grey | Grave Dust | Stolen Ring | -2 / +1 |
| 8 | The Tithe Collector | Stolen Ring | Cursed Coin | +1 / 0 |

> *Add a screenshot or GIF of a trade in progress here.*

### Inventory and Goods
The player starts with a small stock (2 Iron Ingots, 1 Lantern Oil, 1 Wolfbane Sprig and 2 Harvest Bread). Goods are shown as cards that update as trades are made, so earlier decisions affect what the player has available later.

### Reputation and Endings
Reputation changes after every decision. The final total decides the ending:

| Minimum reputation | Ending | Summary |
| --- | --- | --- |
| 10 | **Saintly** | You traded with more hearts than pockets. |
| 5 | **Honest** | You kept more promises than you broke. |
| 1 | **Pragmatic** | You balanced mercy and survival. |
| -4 | **Questionable** | You walked a thin line. |
| below -4 | **Sinister** | You took more than you gave. |

### End Screen
A summary shows the final ending and a "How it went" list of every visitor with whether the trade was accepted or declined and the reputation change. A **Choose again** button returns to character selection.

> *Add a screenshot of the end screen here.*

### Responsive Design
Layouts adapt to tablet and mobile screens using CSS media queries.

---

## Development Process

### Architecture

The game runs in the browser. PHP renders each page, JavaScript drives the gameplay, and the database holds the game content and the schema for future saved sessions.

```
index.php            Character selection
├── witch.php        ┐
├── blacksmith.php   │  Game pages (one per character)
├── alchemist.php    │  share game.js and index.css
├── rogue.php        ┘
└── endScreen.php    Final reputation and trade summary

game.js              Game data, trading logic, inventory, reputation, endings
index.css            Styling and responsive layouts
crossroads_exchange.sql   Database schema and seed data
```

**Key decisions**

- **One shared `game.js` for all four characters.** Every game page loads the same script, which detects which page it is on and renders the matching visitors, goods and results. This avoids duplicating game logic four times.
- **Gameplay state is kept in the browser's `sessionStorage`.** Reputation, the current visitor, inventory and past responses are saved under a single key, so the game survives page changes (for example, moving to the end screen) without needing a server round trip.
- **The database is designed for the future.** The `game_sessions` and `trade_responses` tables are already in place so that gameplay can later be saved server-side without changing the schema.
- **Content is data-driven.** Items, visitors and endings are defined as data (in `game.js` and mirrored in the SQL seed data), so adding a visitor or changing a reputation value does not require changing the game logic.

### Database Design

```
characters      (id, slug, name, description, location_title, location_description)
items           (id, name, image_path)
starting_stock  (item_id → items, quantity)
visitors        (id, display_order, name, role, avatar_path, quote,
                 request_item_id → items, offer_item_id → items,
                 accept_reputation, reject_reputation)
ending_tiers    (id, minimum_reputation, title, summary)
game_sessions   (id, character_id → characters, reputation,
                 current_visitor_order, created_at, completed_at)
trade_responses (id, session_id → game_sessions, visitor_id → visitors,
                 accepted, reputation_change, created_at)
```

Relationships:
- A visitor **requests** one item and **offers** one item (two foreign keys to `items`).
- A game session belongs to one character and has many trade responses.
- Each visitor can only be answered once per session (unique key on `session_id` + `visitor_id`).

> *The full entity relationship diagram is in `crossroads_exchange_erd.md`. Consider embedding it as an image here.*

### Theme and Design

The game has a storybook-fantasy theme with a morally grey tone: each character has their own colour palette, shop illustration and scale artwork, and every visitor has a portrait and a short story that makes the choice feel personal. Quotes and taglines are written with dry humour to keep the mood light even when the trades are not.

> *Optionally add a moodboard, colour palette or wireframe summary here.*

### Challenges and Solutions

| Challenge | Solution |
| --- | --- |
| Four characters with different looks but identical gameplay | Used one shared `game.js` and per-character CSS classes instead of four copies of the logic |
| Keeping state between pages without a backend | Stored the game state in `sessionStorage` and rebuilt the UI from it on every page |
| Making choices feel meaningful | Designed trades where the "good" option is not always the obvious one, with items that chain together (e.g. Wolfbane Sprig → Healing Poultice → Blessed Candle) |
| Making the layout work on all screen sizes | Added media queries for tablet and mobile breakpoints |
| Keeping content easy to change | Stored visitors, items and endings as structured data rather than hardcoding them into the page markup |

### Testing

The game was tested manually, covering: starting a game with each of the four characters, accepting and declining every visitor, reaching each ending tier, the end screen summary, the "Choose again" button, importing the SQL dump on a fresh database, and layouts at desktop, tablet and mobile widths.

---

## Final Outcome

### Demonstration Video

[Watch the demonstration on Loom](https://www.loom.com/share/7d73fcc553cd468e882a046a5861f7ec)

### Promotional Video / Deployed Link (optional)

*Add a link to the deployed game here, if available.*

---

## Conclusion

Building The Crossroads Exchange showed me how to combine several layers (PHP templates, JavaScript logic, CSS and a relational database) into one cohesive game. Sharing a single script across four character pages kept the logic consistent, and saving state in `sessionStorage` let me deliver a complete playthrough without a server-side session system. Designing the trade chains and reputation values taught me to think about gameplay balance, and the database design gave me practice modelling relationships between items, visitors and endings.

**Challenges:** Keeping four themed pages consistent while sharing one set of game logic, and balancing reputation values so that every ending is reachable.

**Future improvements**

- Save game sessions to the database using the existing `game_sessions` and `trade_responses` tables
- Add a leaderboard or history of past endings
- Make each character's starting stock and visitors unique
- Add sound effects and background music
- Add more visitors and branching story paths
- Add animations for trades and reputation changes
- Deploy the game online so it can be played without XAMPP

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

- [XAMPP / Apache Friends](https://www.apachefriends.org/): local development environment
- [Adobe Fonts (Typekit)](https://fonts.adobe.com/): typography
- [MDN Web Docs](https://developer.mozilla.org/): JavaScript, CSS and `sessionStorage` reference
- [PHP Manual](https://www.php.net/manual/): PHP documentation
- [MariaDB Documentation](https://mariadb.com/kb/): database reference
- *Artwork and illustrations: [add credits or tools used]*
- AI assistance (Claude by Anthropic) used for documentation drafting
