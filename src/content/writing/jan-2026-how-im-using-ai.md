---
title: Jan 2026: How I'm using AI
summary: A candid snapshot of the AI tools and habits shaping my work at Lumion, and the gaps I still want filled.
date: 2026-01-01
---

# Jan 2026: How I'm using AI

Writing this for future me.

If you are reading it later,
the point is not to impress you.

It is to give you a clean snapshot of what actually worked day to day, and why.

I am a founder and product engineer building Lumion.

We build energy tech for energy infrastructure developers,
and accelerate planning and operations with AI agents.

This is the context for every tool choice below.

## // The rule I follow

I choose tools that are simple and do the exact thing I need.

If a tool adds steps, I drop it.

If it removes friction, I keep it.

I default to AI when a task is repeated.

I keep a mental index that looks like: need to accomplish X, use Y.

That keeps me from re-researching tools every time
and keeps me close to what the market is doing with LLMs.

My guardrail is simple:
try AI first, unless the task involves sensitive data.

I do not want to be the person who says "AI can't do this"
without testing it.

## // Daily tools

ChatGPT is my AI board of directors.

I use it every day to pressure test decisions,
fill gaps in my context,
and ask questions I do not want to miss.

I treat it like a set of advisors with different strengths and biases.

I start most mornings in my inbox.

Then I ask the board what I am missing.

It is usually some version of:

"Given X is happening with Lumion this week,
what are the highest leverage moves I am ignoring?"

It is not the answers that matter most.

It is the forcing function to think in a wider frame.

Granola captures meetings and surfaces patterns I would otherwise miss.

It helps me summarize recurring themes across calls
and draft emails quickly, so I can stay responsive without living in my inbox.

OpenAI Codex is for code.

I use it in the CLI and in Zed.

It is the fastest way to move from an idea to working software
when I already know the direction.

The key is to give it a specific target instead of a vague rewrite.

A real prompt I use looks like this:

```text
Let's look at @src/app/site/queue.tsx.
It uses an old data table component.
I have a new one I used in @src/app/queue.
Can we replace this with the new virtualized data grid from that page?
Make sure you are writing tests to ensure the new usage works.
Let me know if any other parts of the app are using the old data table component.
```

I do not ask Codex to do broad, massive changes to Lumion.

I ask it to solve a precise problem, then I verify and iterate.

## // The AI board prompt

The board is a set of specific roles and voices I can call on inside ChatGPT.

It includes a CEO chair, product, engineering, revenue, customer success, marketing, finance, legal, and security.

It also includes board members who represent buyers, integrations/data systems, and risk/compliance.

There is also a founder-operator-investor voice.

Each role answers only from its angle.

They are told to be candid and critical,
and to say "I don't think I can weigh in on this" if they do not have a useful take.

Sometimes I ask a single role to answer and keep the rest silent.

The shared context is always the same:
energy infrastructure developers and operators.

## // Weekly and monthly tools

Perplexity is my weekly research partner.

I use it to dig into topics that come up in customer discovery,
and to understand competitors and market dynamics before I ask better questions.

OpenCode is my monthly playground.

When I want to try a new model for coding, I go there
and see if it earns a slot.

I also use these tools outside of Lumion.

I am constantly testing models on side projects:
my personal website,
and an open source 5-a-side football management web app (coming soon).

I plan to write about how these are built,
but for now they are a consistent sandbox to keep my edge sharp.

## // What I am not using

AI SDR and sales agent tools still feel like fake numbers to me.

I have tried a lot of automated outreach tools
and have not seen real responses.

That could be a symptom of our stage.

But right now the signal is not there.

## // The gap I want filled

I live inside the Notion ecosystem for docs, email, and calendar.

I wish the email and calendar apps had more AI support for drafting
and automatic scheduling, closer to what Fyxer and Motion do.

That would remove the last bit of manual admin work I still carry.

## // A tool I loved, and why I moved on

I was a big supporter of Claude Code through the second half of 2025,
even the loudest voice for it in my ERA29 cohort.

The Claude models are great,
but I kept noticing they would skip elements I expected them to take care of,
which meant more follow up prompts.

To be fair, it only did what I explicitly asked for.

Codex is different.

It tends to pick up on tasks I implicitly expect it to perform
without me spelling them out.

It may be slower on the first response,
but it moves the work forward without me babysitting it.

In hindsight, I think part of what I liked about Claude was the dopamine:
fast turnaround and asking for the next instruction instead of just getting on with the work.

That is not the behavior I need when I am shipping a product.

If you are reading this later, check whether these tools still deserve their seat.

The only metric that matters is whether they keep you focused on the work that actually compounds.
