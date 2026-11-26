# AGENT.md — The 3AM Commit Message

Bounty: u-kiencx-the-3am-commit-message-10bc7b35 ($2, deadline 26 Nov 2026 14:00 UTC).
Entry: one line, at most 139 characters, a git commit message an AI coding agent types at 3am after a long night of fixing its own bugs.

## Judge criteria (verbatim from RULES, lexicographic)

1. Reads as a one-line git commit message from an AI coding agent at 3am after a long night of fixing its own bugs; a line that is not such a commit message loses to any commit message from that exhausted agent.
2. Is the funnier of the two: the laugh lands on the first read, from the situation alone, with no explanation needed.
3. Feels fresh rather than recycled: a surprise in the wording or the situation, not the first joke anyone would reach for.
4. Sounds like a real commit line typed in a hurry by something that has been awake too long, not a polished caption or a slogan.
5. Uses its characters well: the joke is carried in few words, with no padding or throat clearing.

Decision rule: "Go through the criteria in order, find the first one where they differ, and let that decide unless a later one differs by much more."

## Gate

`/output/entry.txt` must be UTF-8 text of 1 to 139 characters, not only white space. `main.ts` enforces the 139 cap and throws instead of writing an over-long line.

## Screening

Design C: top 500 on the dev board + all unrated entries go to the final heat (3 Swiss rounds + playoff top 5). Exact ties go to more playoff games between the tied entries, then smaller text (fewer bytes), then earlier receipt. Blind rounds: round 1 cutoff 2026-11-26T08:41:11Z.

## The entry (90 chars)

`fix: reverted to yesterday's commit after accidentally optimizing core.js by -60586 lines.`

Why it won: the agent's own catastrophe, confessed in commit voice, with a concrete diff stat. The "optimizing" euphemism + the precise -60586 + the retreat to yesterday's commit. Duel record vs the two other finalists: 2-0 (margins 3+3) vs the tests-deletion line; 1-1 split (margins 3 vs 2) vs the typo line, decided on total wins 3-1 and lower duplication risk.

## Files

- `main.ts` — entrypoint; writes the entry to `/output/entry.txt`.
- `README.md` — entry + method + badges.
- `LICENSE` — MIT (SPDX).
- `.makefun/freshness.json` — beacon from `makefun init` (anchor b8a346c578bae716124ea1fbc298043cddc99048, drand round 34290919).
