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
- **The leaderboard ranks the sum of each player's ten best games.** Playing
  can never hurt you — a below-par game simply doesn't count — skipping a night
  doesn't sink you, and a single lucky win is just one slot of ten. Play more
  and only your quality can rise.
- **The race** — each player's best-ten sum charted across the week; the lines
  only climb. History lets you edit or delete any result, and everything
  rescores instantly.
- **Data** — lives in `localStorage` on the scorekeeper's device; nothing is
  uploaded. Settings offers a JSON backup export/import for safekeeping or
  handing the scoreboard to another phone.
