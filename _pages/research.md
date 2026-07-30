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
    <h2>Funding</h2>
    <p>
      VAISS is funded by the NWO Veni Talent Programme.
    </p>
  </section>
</div>
