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
- **Log a game** — four ways to record a result: tap the *winner* (several for
  co-op wins), tap players in *finishing order*, type *scores* (numeric keypad,
  "lowest score wins" toggle for golf-style games), or play in *teams* — tap
  players into teams, then tap the teams in finishing order. Any subset of
  players can join any game.
- **Scoring** — *beat a player, earn the game's weight in points.* Every game has
  a weight — Light ×1, Standard ×2, Heavy ×3 (remembered per game name) — and a
  match pays each player (players they finished ahead of) × weight, damped by
  √(field − 1) so field size matters sublinearly: a 9-player win is worth about
  three duels, not eight, and placements in between stay proportional. Ties count as level,
  not beaten; quick Winner entries pay winners only. Every logging mode pays
  the same maximum — a beaten opponent is worth at most 1. In Scores games the
  margin refines that value downward: each beaten opponent is worth
  `½ + ½ · gap / max(|yours| + |theirs|, match's widest gap)`, so a shutout
  pays exactly what a ranked win pays, a 2:1-ratio win about two-thirds, and a
  photo finish half — at any score scale, golf scoring and negative scores
  included, and ratio-equivalent results (2:1 ≡ 10:5) always pay the same.
  Rankings support shared places: tap a player placed earlier in the order to
  tie them with the one before (tapping the last-placed player undoes it).
- **The leaderboard ranks points per game** (with two "ghost games" added), and
  **a win can never count against you**: any win that would pull your average
  down is simply left out of it. Losses and mid-pack finishes always count, so
  quantity can't beat quality; skipping a night doesn't sink you; one lucky
  win can't clinch the week.
- **The race** — each player's points-per-game rating charted across the week;
  a win never dents a line. History lets you edit or delete any result, and
  everything rescores instantly.
- **Highlights** — a fourth tab built for scrolling together as a group:
  current champion, biggest single win, giant-slayer upsets (measured against
  ratings at the time), the week's hot streak, the most crushing scoreline,
  the top rivalry with its head-to-head record, table favorites, the iron
  player, and weight-class champions.
- **Data** — lives in `localStorage` on the scorekeeper's device; nothing is
  uploaded. Settings offers a JSON backup export/import for safekeeping or
  handing the scoreboard to another phone.
