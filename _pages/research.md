---
layout: page
permalink: /research/
title: research
description:
nav: true
nav_order: 1
---

<div class="vaiss-research">
  <section class="vaiss-hero">
    <div class="vaiss-hero-content">
      <p class="vaiss-kicker">NWO Veni Talent Program</p>
      <h2 class="vaiss-title">
        <span>Verified Analysis for Infinite-State Systems</span>
        <img class="vaiss-wordmark" src="{{ '/assets/img/vaiss-logo.svg' | relative_url }}" alt="VAISS">
      </h2>
      <p class="vaiss-lede">
        VAISS develops certification techniques for the analysis of infinite-state systems:
        systems whose behavior cannot be represented by a fixed, finite set of states, but
        whose correctness is still essential for trustworthy hardware, software, and
        AI.
      </p>
    </div>
    <a class="vaiss-logo-link" href="https://www.nwo.nl/en/calls/nwo-talent-programme" target="_blank" rel="noopener noreferrer" aria-label="NWO Talent Programme">
      <img class="vaiss-nwo-logo" src="{{ '/assets/img/nwo-logo.svg' | relative_url }}" alt="NWO logo">
    </a>
  </section>

  <section class="vaiss-section">
    <h2>Motivation</h2>
    <p>
      Formal verification provides mathematical guarantees that systems satisfy their
      specifications. In practice, however, many systems are too large or too complex
      to be treated as finite-state objects. They may contain counters, queues, memories,
      data-dependent control, recursive structure, or parameterized components. These
      features make verification powerful, but they also make verification results harder
      to trust.
    </p>
    <p>
      The central idea of VAISS is that verification tools should not be simply
      trusted. Instead, they should produce independently checkable evidence. Such
      certificates make analysis results transparent, reproducible, and robust against
      implementation bugs in complex verification engines.
    </p>
  </section>

  <section class="vaiss-section">
    <h2>Research Directions</h2>
    <div class="vaiss-direction-list">
      <article>
        <h3>Word-Level Reasoning</h3>
        <p>
          Design compact proof objects for infinite-state analysis, with a focus on
          certificates that can be checked by small, independent validators.
        </p>
      </article>
      <article>
        <h3>Solver-Aided Checking</h3>
        <p>
          Reduce certificate validation to reliable automated reasoning tasks, such as
          SAT, SMT, or theory-specific proof checks, while keeping the trusted core small.
        </p>
      </article>
      <article>
        <h3>Abstraction and Refinement</h3>
        <p>
          Certify the abstraction steps that make infinite-state systems analyzable, so
          that scalability does not come at the cost of trust.
        </p>
      </article>
      <article>
        <h3>Tools and Benchmarks</h3>
        <p>
          Build prototype tooling and benchmark suites that connect certification methods
          to real verification workflows.
        </p>
      </article>
    </div>
  </section>

  <section class="vaiss-section">
    <h2>Impact</h2>
    <p>
      VAISS aims to make the analysis of infinite-state systems more trustworthy. This supports a
      verification ecosystem in which powerful tools can be used aggressively, while their
      results remain independently auditable.
    </p>
    <p>
      The project builds on my work on certification for hardware model checking and
      extends this perspective toward richer systems, stronger specifications, and more
      expressive automated reasoning pipelines.
    </p>
  </section>

  <section class="vaiss-section">
    <h2>Funding</h2>
    <p>
      VAISS is funded by the NWO Veni Talent Programme.
    </p>
  </section>
</div>
