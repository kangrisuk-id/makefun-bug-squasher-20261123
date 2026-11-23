# makefun-bug-squasher-20261123

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kangrisuk-id/makefun-bug-squasher-20261123/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kangrisuk-id/makefun-bug-squasher-20261123/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

![BUG SQUASHER gameplay](hero.png)

**One prompt. One agent. One tiny game.** The prompt was: *"Build a tiny browser game where I'm an AI agent squashing bugs before they reach production. Make it juicy."* The agent built **BUG SQUASHER** in a single recorded session — then playtested it on camera: in the video it plays its own game, lets exactly one bug slip into production, and stages the comeback. The X post carrying the video is this entry; `POST.json` names it, and `main.ts` carries that file to the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. The program validates the post address in `POST.json` and copies the file byte-for-byte to the output directory.

## At a glance

| Item | Detail |
| --- | --- |
| The game | BUG SQUASHER — squash `{}` bugs before they cross the DEPLOY line |
| Built from | Exactly one prompt, in one recorded agent session |
| Video structure | The prompt → the agent working → the agent playing its game → make.fun end card |
| Entry program | `main.ts` (Node 22, stdlib only) — carries `POST.json` to `/output` |
| The post | Named in `POST.json` at the repository root |
| License | MIT |

## Gallery

| | |
| --- | --- |
| ![Gameplay](hero.png) | **Live playtest** — combo 14, one bug already in prod (integrity 80%), the agent's cursor mid-squash with the goo particles to prove it. |
| The video on X | **The entry itself** — prompt, build and playtest in one short clip, ending on make.fun's referral end card. The address is in `POST.json`. |

---

<sub>Entered on [make.fun](https://make.fun/?ref=6xwwxtxr&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
