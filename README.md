# CheapFlix

CheapFlix is a frontend web application for browsing movies and TV shows, comparing streaming subscription plans, and managing a personal watchlist. It brings popular OTT platforms together in one place with a simple, Netflix-inspired interface.

Built using React, Vite, and TypeScript, the project focuses on frontend development, reusable components, responsive design, and interactive user experiences.

## Features

* Browse movies and TV series
* Search titles and filter by genre
* View trending and popular content
* Add movies and series to a watchlist
* Compare subscription plans across streaming platforms
* Calculate how subscription costs can be split
* View profile information and watch history
* Responsive layout for different screen sizes
* Smooth animations and interactive movie cards
* Local sample data without requiring a backend

## Tech Stack

* **Frontend:** React, TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Animations:** Framer Motion
* **Icons:** Lucide React

## Pages

### Home

Displays featured titles, trending movies, popular series, and subscription plans.

### Movies

Browse movie cards, search for titles, and filter content by genre.

### Series

Explore TV shows with details and streaming platform information.

### Subscriptions

Compare plans from platforms such as Netflix, Amazon Prime Video, Disney+, Spotify, and YouTube Premium.

### Watchlist

Keep track of movies and series you want to watch.

### Profile

View user information, favorites, watch history, and sample spending details.

## Project Structure

```text
CheapFlix/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── data/
│   ├── assets/
│   ├── types/
│   ├── routes/
│   └── utils/
├── package.json
├── index.html
└── vite.config.ts
```

*The structure above is illustrative; adjust it to match the actual repository.*

## Getting Started

### Prerequisites

* Node.js
* npm
* Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/arjuniverse/CheapFlix.git
```

**2. Open the project folder**

```bash
cd CheapFlix
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Data and Images

CheapFlix currently uses local sample data to display movie details, series, genres, and subscription plans. Movie posters and banners may use images hosted by TMDB's image CDN.

The project does not require a custom backend for its current demo functionality.

## Future Improvements

* Integrate the TMDB API for up-to-date movie and series information
* Add user authentication
* Store watchlists and preferences in a database
* Add subscription renewal reminders
* Improve spending summaries and watch history
* Connect a backend for persistent user data

## Purpose

CheapFlix was built as a portfolio project to practise React, TypeScript, component-based development, routing, and responsive UI design.

## Author

**Arjun Sharma**

* GitHub: [arjuniverse/CheapFlix](https://github.com/arjuniverse/CheapFlix)

---

*CheapFlix is an educational project. Streaming platform names are used for comparison and demonstration purposes; the application is not affiliated with those services.*

