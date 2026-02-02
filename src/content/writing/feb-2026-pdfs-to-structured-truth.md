---
title: Feb 2026: PDFs to Structured Truth
summary: NYISO + PJM interconnection is a document problem. Here’s how I’m turning PDFs, DOCXs, and spreadsheets into a graph agents can cite and use to catch human error early.
date: 2026-02-02
---

# Feb 2026: PDFs to Structured Truth

Most important systems still run on documents.

PDFs are the interface.  
Spreadsheets are the database.  
DOCXs are the business logic.

And the cost of one missed detail is not a bug. It is weeks. Sometimes months.

Interconnection is like that.

A developer can have land, a signed PPA, and a solid EPC. Then the project slows down because the packet is easy to get wrong, hard to review, and painful to correct once it’s submitted.

So a lot of what I’m building right now is not “AI magic.”

It’s a translation layer: from documents to structured truth.

## // The World Is Still Run By Documents

If you want to change a real industry, you eventually end up in PDF land. Not because people are dumb, but because PDFs are portable, legible, and the lowest common denominator between organizations that don’t share software.

The problem is that a PDF is not a system. It’s a screenshot of a system.

When you treat it like a system anyway, you get the usual outcomes. People copy values between tabs. They miss one line in a 200-page tariff. They use last year’s template. They attach the wrong exhibit. Then everyone argues about what is true.

The goal is not to “chat with PDFs.”

The goal is to turn them into something you can rely on. Something you can point to, validate, and build an agent on top of without betting your timeline on hallucinations.

## // The Domain: NYISO, PJM, And The IOUs

In the Northeast, two of the big surfaces are NYISO and PJM. They’re not the same process. Then you add the utilities, and the IOUs do not behave like the ISOs.

Different portals. Different templates. Different interpretations of what “complete” means.

Same outcome if you get it wrong: you wait.

The queue does not care that you made a reasonable mistake. It cares that you filed a complete packet.

## // The Failure Mode: Human Error

Most of the pain is not because the grid is complicated. It’s because humans are moving information between artifacts, and one of them lies.

Not maliciously. Just accidentally.

A site address is slightly different in two places. The MW numbers don’t match the one-line and the form. A checkbox that should have been checked wasn’t. An attachment is missing. A diagram exists, but not the right version, not signed, or not consistent with the rest of the packet.

And the failure is asymmetric. You don’t lose minutes. You lose a cycle.

So the problem I care about is boring on purpose: catch inconsistencies before submission, and generate the scaffolding so the team doesn’t miss something basic.

Less rework means less burn. It also gives interconnection teams their attention back, so they can do higher-leverage thinking instead of dotting I’s and crossing T’s.

## // The Pipeline: Ingest → Normalize → Extract → Verify

If you want an agent to help with a document workflow, you need a pipeline that earns trust.

My model is simple: ingest, normalize, extract, verify. Only then assist.

Ingest means we accept the real stuff: PDFs from counterparties, DOCX templates, spreadsheets with key project inputs, and the inevitable scans that require OCR.

Normalize means everything becomes machine-readable in a predictable shape: text, tables, images, and metadata. This is also where provenance gets baked in.

If you can’t point back to the source, you don’t have knowledge. You have vibes.

Extract means we pull out the entities we care about: which market, which submission type, which requirements apply, which artifacts are required, and the project facts that should stay consistent across the packet (site, POI, MW, technology, ownership, contacts).

Verify is the heart of it.

Not “does this field look plausible?” but “does it match everywhere it appears?” Does the packet satisfy the checklist implied by the rules? Are we missing something that will predictably trigger a deficiency notice?

This is where a lot of AI products die. They skip verification and jump straight to generation.

That feels good until it’s wrong.

## // The Graph: Memory With Provenance

This is where the knowledge graph matters. Not because graphs are trendy, but because compliance workflows are relational.

A requirement is tied to a market, a submission type, a specific template version, a conditional rule, and a source citation. If an agent says “you need Exhibit K,” I want it to say why, where, and under what condition.

Which document. Which section. Which page.

If the answer can’t be traced, it doesn’t belong in the workflow.

## // The Agent Layer: Use The Graph, Don’t Hallucinate One

Once you have structured truth, the agent becomes useful in a specific way. It stops being a writer and becomes a reviewer, coordinator, and diff engine between what you have and what the rules imply you should have.

The primary job is straightforward: get you to submission-ready faster.

“Faster” doesn’t mean the calendar collapses to zero. There are external timelines you can’t brute force. But internal time spent can shrink dramatically when the loop is gather, reconcile, assemble, review.

Instead of gather, guess, submit, wait, fix, wait again.

A good agent feels like a second set of eyes that never gets tired, and never forgets what page 143 said.

## // What This Enables (And What It Doesn’t)

This enables speed, but the deeper win is confidence. Reduce rework, reduce burn, and more projects survive long enough to get built.

That’s the mission-level framing.

But I’m not pretending this is solved. Documents change. Interpretations change. Counterparties still send messy inputs. The hard part is not extracting text—it’s building a system that stays correct as the world changes.

That’s why I care about structured truth more than clever prompts.

