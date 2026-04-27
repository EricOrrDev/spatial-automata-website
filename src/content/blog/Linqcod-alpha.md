---
title: "LINQCod Alpha and Collaboration"
date: "2026-04-27"
excerpt: "In lue of market research saying otherwise, give your artists creative freedom"
---

Last week I officially ticked LINQCod into alpha, now 'playable' at LINQcod.com, an achievement I worried might have eluded me forever.
It has been a difficult project but a very satisfying project, particularly now that I am past the hardest expected technical hurdles.

## What Even is an Alpha?

Without some kind of structured and rigid guide to say where a project is, alpha, beta, RC are all just labels to give ourselves something to work towards. I decided a certain feature branch merging with production main was 'Alpha' after the fact. My thought process is that I came into this project having a good idea of what was going to kick my butt, and to my credit I was pretty accurate about what kicked my butt and just how badly it would do it. This is my first 'big' (it's all relatively honey) using Blazor, my first non-trival use of Roslyn, and my first time ever making a WebAssembly project. I figured the Blazor portion wouldn't be too hard and I was right because Blazor is AMAZING! I figured Roslyn was going to be confusing, but I've built assemblers before and given that C# compiles to IR I assumed the difficulty would be on the part of getting exposed to the arcane secrets of the CLR Abstract Syntax Tree (AST), and I didn't know much about WASM other than it is a well-loved but troublesome child.

While I was pretty accurate that each of these things might eat a week or two of my life, I certainly did not predict why.

#### Blazor
Blazor ate a few days of my time as I had never used MudBlazor, my Blazor was rusty in general, and visual design has never been my strong-suit as far as my career in technology is concerned. Getting the client project to properly juggle the UI state, evaluate the user's query, and trigger re-renders natively took some trial and error but it was pretty painless.

#### Roslyn
Weird but in a way that makes sense. The core execution relies on the .NET Compiler Platform to dynamically evaluate user queries, setting up a RoslynSandbox to run the C# expressions. But the wildest part was building the scoring system. Because wall-clock time in a browser is totally unreliable and everyone is using different hardware, I had to build a deterministic, hardware-agnostic scoring system. I created a GasRewriter class to walk the Abstract Syntax Tree and literally inject telemetry tracking into operations before they compile to measure "Cycles". To measure the "Code Length" without penalizing whitespace, a ComplexityScorer walks the un-instrumented tree to count functional units like lambda expressions and binary operators.

#### WASM
MetaReference Jungle and how AI really saved the day. Because WebAssembly lacks a physical file system, you have to manually handle metadata loading. Even for basic LINQ, I needed to load assemblies like mscorlib, System.Linq, and System.Collections directly into memory. I ended up writing logic to fetch these via HttpClient and had to actually inspect the first two bytes of the downloaded files to make sure they started with MZ (0x4D, 0x5A). If they didn't, it meant I was getting an HTML fallback page instead of a valid .NET PE image.

#### An unexpected fourth horseman of doom?
Microsoft and its build process for pushing to Azure Static Web Apps. Azure's default build engine, Oryx, can sometimes completely ignore your project-level flags. By default, .NET 8 Blazor adds asset fingerprinting hashes to DLLs and uses the new WebCil format (.wasm), neither of which Roslyn can read. I had to disable <WasmEnableWebCil>, <WasmFingerprintAssets>, and <PublishTrimmed> to make it work. Because Oryx ignored this, the ultimate fix was bypassing the Azure build engine entirely—building the project manually in GitHub Actions and telling Azure to skip its own build step and just upload the artifacts. I am still unsure how wise this action may or may not be.

## Collaboration and Real Art

By far the biggest realization during this project has been just how impactful collaboration has been and value added by working with a real artist. Initially I was going to do what any CS student does these days, have AI make the art, if we get users then we'll upgrade the art later. I am so glad I did not do that and instead contracted with an artist and fellow student of OSU-Cascades, [Venice Bailey](https://baileyve.myportfolio.com/). I gave them some AI generated mock-ups to start the conversation and they quickly talked me into allowing them to play to their strength and work in their artstyle.

Hopefully soon I will identify less as a broke college student and can contract Venice for additional work as their art style brings some much needed levity to this project.

Ultimately my take away from working with Venice is that in lue of market research saying otherwise, give your artists creative freedom, their abiliity to ideate through problems is their superpower and it is foolish to force them to do anything else.