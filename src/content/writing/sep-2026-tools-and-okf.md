---
title: Sep 2026: The stack moved. The data had to follow.
summary: Codex got me far. Cursor, Composer 2.5, Grok 4.6, and Grok Bot changed how I work. Bun is the base layer. The real unlock was treating knowledge like code the agents can share.
date: 2026-09-07
image: writing/sep-2026-tools-and-okf.jpg
---

# Sep 2026: The stack moved. The data had to follow.

Writing this for future me again.

In January I said Codex was for code, ChatGPT was the board, and I default to AI unless the data is sensitive.

That still holds.

What changed is the shape of the work.

The last couple of months were less about picking a smarter chat window, and more about building an environment agents can live in without me babysitting every turn.

## What I was doing with Codex

For a stretch I leaned hard on OpenAI Codex.

Same habit as January: specific targets, not vague rewrites.

Point at a file. Name the replacement. Ask for tests. Iterate.

It was still the fastest way to turn a clear intent into a branch when I already knew the destination.

The limit showed up when the job stopped being one repo and one prompt.

Lumion is not one coding task.

It is package reviews, tariff text, slot rules, security gates, customer packs, and a two-person team that cannot afford to re-explain the company every morning.

Codex is excellent at moving code.

It is worse at carrying the company: which report path is honest, why an official case stays Not evaluated, which agent may touch a zip.

That context lived in my head, in Linear, in Granola notes, and in half-updated docs.

Every new session paid the tax again.

## Why Cursor stuck

I moved the day-to-day coding loop into Cursor.

Composer 2.5 for the hard multi-file edits.

Grok 4.6 when I want a longer, more opinionated pass.

The important part is not the model names.

It is that the IDE finally behaves like an agent runtime instead of a fancy autocomplete.

Cloud agents can take a monorepo ticket and come back with a PR.

Connectors mean the same session can see Linear, Notion, Drive, and GitHub without me pasting screenshots.

Skills and workflows turn “how we do UI” or “how we unslop a draft” into something reusable instead of a prompt I rewrite every time.

That is the seat Codex was missing for me: durable process, not just durable code edits.

## Bun is the base layer

One unlock that is easy to miss if you only watch model launches: Bun.

Most of what I build now starts there.

Lumion’s worker path.

Side projects.

Personal tooling.

Same runtime, same package habits, same fast feedback loop.

The agents benefit too.

When Composer or a cloud agent has to install, test, and ship, a single fast JS runtime beats a stack of half-configured Node rituals.

If the tooling story is only “which LLM,” you are shopping.

If it is “what can the agent actually run, test, and ship,” you are building.

Bun is the boring part of that answer.

It is also the part that compounds.

## Grok Bot is the other half

Grok Bot became the operating layer outside the editor.

Not one chat.

A set of specialists: product, interconnection, security, fundraising, design, a founding AI engineer.

Same company context, different jobs.

That is the January “AI board” idea, except the board can now open the repo, write a Linear ticket, and refuse an uncleared pack instead of only giving advice.

I also learned to keep a hard split.

Company agents stay on Lumion.

A separate personal bot stays on life admin and side projects.

If you mix those contexts, you get clever answers and bad boundaries.

And I learned when not to productize the chrome.

A Grok Bot-style multi-agent UI is seductive.

Pre-defined personas. A collected report. Agents talking to each other.

For us it was the wrong next build.

Customers pay for a review that catches real packet risk.

They do not pay for a place to watch agents perform.

Ship the dumb path on a real pack first.

Persona chrome can wait.

## The lesson under the tools

The tooling shift forced a clearer rule.

Agents are only as good as the structures you leave for them.

If your truth lives in a PDF, a Notion page, a Slack thread, and a senior engineer’s memory, every agent rebuilds the same incomplete picture.

If your truth lives as files in git, with stable paths, citations, and a small amount of structured frontmatter, agents and humans can share one surface.

The monorepo is the architecture source of truth.

Notion stack docs go stale.

Agents should read the same markdown a new hire reads, not a third copy of the company story.

That is what I mean by AI-friendly data structures.

Not a new database product.

A shape of knowledge that is:

- readable in a normal editor
- diffable in a PR
- linkable between concepts
- progressive, so an agent can open an index before it opens the whole tariff
- honest about provenance, so “you need Exhibit K” points at a page, not a vibe
- closed where it matters: fixed enums for presence and severity, so the model cannot invent a soft pass

This is the same thesis as the February post.

PDFs to structured truth.

The last few months just made the consumer side real: the consumers are agents that run while I sleep, or while I am in a customer call.

## Closed enums beat vibes

One concrete learning from shipping reviews: vocabulary is a product decision.

Present. Mismatch. Missing. Not evaluated.

Blocker. Advisory.

If an official case is in the pack and you omit the Not evaluated row, that is not a small omission.

It is a lie.

Same for identity keys.

If you pick the latest file by timestamp instead of the selected version, the agent will confidently score the wrong model.

Data structure bugs become agent hallucinations with better manners.

## The exception list is the interface

The deliverable that matters is not a chat transcript.

It is a ranked, cited exception list.

Rule. Location. Observed. Expected. Evidence. Why it matters.

PDF and CSV.

Judgment with citations.

Not “AI said this pack is ready.”

That shape is also what GTM, social, and engineering can share as one locked sentence.

When the print lock drifts, the agents drift with it.

## Open Knowledge Format

Google’s Open Knowledge Format formalizes the pattern people were already improvising with Obsidian vaults, `AGENTS.md` files, and LLM wikis.

OKF v0.1 is almost boring on purpose.

A directory of markdown files.

YAML frontmatter for the few fields that need to be queryable: type, title, description, resource, tags, timestamp.

Normal markdown links between concepts.

Optional `index.md` for progressive disclosure.

Optional `log.md` for history.

No required SDK.

No proprietary account to read the files.

That is the point.

A format, not another catalog product.

Producer and consumer stay independent.

A human can hand-author a concept.

An enrichment agent can draft one from BigQuery or a tariff PDF.

A different agent can reason over the same bundle tomorrow.

Looking back, we were already building OKF-shaped pieces without the name.

Public guides parked as raw sources.

Liteparse into versioned markdown.

Humans review the prose.

Only then compile rules.

The extractor is not the source of truth.

Empty extract means encode from the reviewed markdown, not invent JSON.

Grok Bot memory is the same pattern in miniature: profile facts, dated logs, human curation, agents reading and writing files.

OKF is the portable contract for that instinct.

## What this means inside Lumion

Lumion’s product is already a knowledge problem dressed as a compliance product.

Markets, submission types, required artifacts, exception lists, and the project facts that must match across a pack.

The direction I want in the codebase is simple.

Treat each important concept as a file, not a row trapped behind a private API.

A MISO Appendix 1 field list.

An ERCOT DWG screen.

A required slot in a package.

A finding template with the citation shape baked in.

Frontmatter carries type and links out to the source system.

The body carries the schema, joins, conditions, and the “why” an agent needs when it reviews a pack at 1am.

Then the agents stop improvising a knowledge graph in context every run.

They navigate a bundle.

They update it when the world changes.

We review the diff like code.

Same rule for portal work.

A signed field map is a schema.

It is not RPA.

The human opens the session.

The agent types reviewed facts into known fields.

Submit stays human.

Passwords stay human.

If you skip that and let an agent “just use the portal,” you inherit every secret into screenshots, DOM dumps, and logs.

## What I am not claiming

I am not claiming we “solved interconnection with a wiki.”

Documents still change.

Counterparties still send mess.

Security still decides what never enters the laptop.

OKF does not replace verification.

It gives verification a place to live that both humans and agents can trust.

I am also not claiming Composer or Grok replaced judgment.

They removed the re-setup cost.

I still have to say no to the clever build that is wrong for this quarter.

Review first.

Generation and unsupervised filing can wait until the exception list earns trust.

## Practical habits that survived the switch

Give agents a precise target.

Prefer files over folklore.

Make refusal a first-class output, not a missing row.

Keep personal and company agent contexts separate.

Write instructions the way you write production code: short, testable, no slop.

If a process happens twice, turn it into a skill or a routine before you rely on memory.

Lock one product sentence and make every agent and every post obey it.

## What to check later

If you are reading this in a few months, ask three questions.

Do the agents still need me to paste the same company brief into every chat?

Can a new hire and a new agent learn a market rule from the same markdown path?

When a finding ships, can you click from the claim to the source without leaving git?

If the answers go soft, the stack got fancy again, and the data structures got lazy.

The tools will keep changing.

The bet that compounds is still the same: structured truth first, agents second.

## What I’m building on the side right now

Lumion is the job.

These are the sandboxes that keep the edge sharp.

**Scrunch.** A baby activity tracking mobile app.

Sleep, feeds, nappy changes, the boring log that parents actually need at 3am.

**pdfx.** A Rust CLI for PDF compression.

Small tool. Clear job. No account. No upload. Just a binary that makes files smaller without me thinking about it.

**otion.** A Notion Mail replacement.

I still live in Notion for docs.

I do not want my mail trapped in a half-AI inbox I cannot reshape.

otion is the experiment: keep the calm Notion-shaped workflow, own the mail surface.

Same rule as January.

Side projects are where I test models, runtimes, and agent habits before I bet the company on them.

If you are reading this later, check whether these three still exist, or whether they taught me something and got deleted on purpose.

