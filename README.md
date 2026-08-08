# Game Week — Vacation Scoreboard

A single-file scoreboard for a week of board games with friends. Track every game —
any game, any kind of score — and see who wins the vacation.

**Open `index.html` in any browser.** No build, no server, no dependencies.
Once deployed via GitHub Pages, the app is served at the repository's Pages URL.

## How it works

- **Players** — up to 9, each with a fixed color and meeple for the whole week.
  The ninth slot is meeple gray: since no ninth hue stays colorblind-safe against
  the other eight, that player's chart line is dashed and their bar striped instead.
- **Log a game** — three ways to record a result:
  - *Winner*: tap whoever won (several for team/co-op wins);
  - *Ranking*: tap players in finishing order;
  - *Scores*: enter numbers, with a "lowest score wins" toggle for golf-style games.
- **Standings** — vacation points, wins, and games played, plus a cumulative
  "race" chart across the week.
- **Scoring schemes** — Winner only (1 pt), Podium (3/2/1, default), or Field size
  (1st of N players gets N points). Games store *placements*, not points, so
  switching schemes rescores the whole week instantly. Ties share the better place.
- **Data** — lives in `localStorage` on the scorekeeper's device. Settings offers a
  JSON backup export/import for safekeeping or handing off to another phone.
