# Game Week — Vacation Scoreboard

A scoreboard for a week of board games with friends. Track every game — any game,
any kind of score, any subset of players — and see who wins the vacation.

**Open `index.html` in any browser**, or better: open the GitHub Pages URL on your
phone and use **Share → Add to Home Screen** — it installs as a full-screen app,
works offline (service worker + manifest included), and your scoreboard lives on
that phone between openings.

## How it works

- **Players** — up to 9, each with a fixed color and meeple for the whole week.
  The ninth slot is meeple gray: since no ninth hue stays colorblind-safe against
  the other eight, that player's chart line is dashed and their bar striped instead.
- **Log a game** — three ways to record a result: tap the *winner* (several for
  team/co-op wins), tap players in *finishing order*, or type *scores* (numeric
  keypad, "lowest score wins" toggle for golf-style games). Any subset of players
  can join any game.
- **Scoring** — *beat a player, earn the game's weight in points.* Every game has
  a weight — Light ×1, Standard ×2, Heavy ×3 (remembered per game name) — and a
  match pays each player (players they finished ahead of) × weight. Winning a
  heavy 9-player game pays 24; edging a light duel pays 1. Ties count as level,
  not beaten; quick Winner entries pay winners only.
- **The leaderboard ranks points per game**, not totals, computed with two
  "ghost games" added to everyone's count. Skipping a night doesn't sink you,
  and a single lucky win can't top the board for the whole week.
- **The race** — each player's points-per-game rating charted across the week;
  flat stretches mean they sat that game out. History lets you edit or delete
  any result, and everything rescores instantly.
- **Data** — lives in `localStorage` on the scorekeeper's device; nothing is
  uploaded. Settings offers a JSON backup export/import for safekeeping or
  handing the scoreboard to another phone.
