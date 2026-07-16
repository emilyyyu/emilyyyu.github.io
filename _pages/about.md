---
layout: about
title: about
permalink: /
subtitle: <a href='https://liacs.leidenuniv.nl/'>Leiden Institute of Advanced Computer Science (LIACS)</a>, Leiden University, Netherlands. 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>To reach me:</p>
    <p>z.yu@liacs.leidenuniv.nl</p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

---

I am a tenured assistant professor in Computer Science at Leiden University in the Netherlands.

My research broadly develops formal methods and automated reasoning techniques for building trustworthy systems. A central theme of my work is certification - designing independently checkable evidence that makes verification process more reliable and transparent for safety-critical systems.
My work on certification has influenced the development of hardware model checking infrastructure and solver reliability. This line of work received Distinguished Paper Awards at CAV 2025 and CAV 2026, the most prestigious conference in formal verification. Additionally, my research has been recognized with the Dutch Research Council (NWO) Veni Talent Program in the Netherlands, and the highly competitive ESPRIT fellowship from the Austrian Science Fund (FWF) in Austria.

Before joining Leiden, I was a postdoctoral researcher (2023-2025) in <a href='https://pub.ista.ac.at/group_henzinger/'>Prof. Thomas Henzinger</a>’s group at the Institute of Science and Technology Austria. I received my PhD in 2023 in the doctoral program ‘Logical Methods in Computer Science’ (LogiCS) funded by FWF, and the LIT AI Lab under the supervision of <a href='https://cca.informatik.uni-freiburg.de/biere/'>Prof. Armin Biere</a>, at the Johannes Kepler University Linz in Austria. My thesis was on hardware model checking certification. Before that, I completed my undergraduate studies in the Department of Computing at Imperial College London, UK, where I was advised by <a href='https://www.doc.ic.ac.uk/~alessio/index.html'>Prof. Alessio Lomuscio</a>.

<p class="phd-note">Interested in doing a PhD with me? Please feel free to get in touch by email with your CV, transcript, and a brief note explaining how your research interests align with the Veritas Lab. Additionally, there may also be opportunities to apply for a CSC scholarship.</p>

## Research Directions

My research develops practical ways to understand whether complex systems are safe and correct, and to provide evidence that their results can be trusted. My work centers on four connected directions:

<div class="research-direction-grid">
  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-runtime-monitoring.webp' | relative_url }}" alt="Runtime monitor observing an autonomous rover and predicting an obstacle">
    <h3>Runtime Monitoring</h3>
    <p>
      Some systems cannot be fully analyzed before deployment, especially when their dynamics are unknown. We develop
      monitors that observe their behavior, predict safety violations, and support timely intervention.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-automated-reasoning.webp' | relative_url }}" alt="Automated reasoning engine exploring safe and unsafe system behaviors">
    <h3>Automated Reasoning and Model Checking</h3>
    <p>
      We investigate how automated reasoning technologies such as SAT, SMT, and model checking can enable the
      verification of safety-critical systems at scale.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-ai-verification.webp' | relative_url }}" alt="Neural network passing through a formal verification scanner">
    <h3>AI Verification</h3>
    <p>
      AI models are powerful, but their decisions can be difficult to understand and guarantee. We develop methods for
      checking their safety, robustness, and fairness, and design learning architectures that are easier to verify.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-certification.webp' | relative_url }}" alt="Verification tool producing a proof for an independent certificate checker">
    <h3>Certification</h3>
    <p>
      Verification tools are themselves complex and may contain bugs. We develop formal proofs and independent checkers
      so that verification results come with compact, machine-checkable evidence of correctness.
    </p>
  </article>
</div>

## Featured Publications

<div class="featured-publications">
  <article class="featured-publication">
    <div class="featured-publication-figure"><img src="{{ '/assets/img/featured-cav26-plot.webp' | relative_url }}" alt="CAV 2026 performance plot comparing solved instances and runtime"></div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">CAV 2026 · Distinguished Paper Award</p>
      <h3>Liveness Proofs for Hardware Model Checking</h3>
      <p class="featured-publication-authors">Nils Froleyks, Emily Yu, Bart Bogaerts, Armin Biere, and Keijo Heljanko</p>
      <p>Liveness proofs at scale.</p>
      <div class="featured-publication-links"><a href="{{ '/assets/pdf/LivenessCertificationCAV26.pdf' | relative_url }}">PDF</a></div>
    </div>
  </article>
  <article class="featured-publication">
    <div class="featured-publication-formula" aria-label="Signal First-Order Logic bounded-stabilization formula">
      <span class="featured-formula-name">Bounded stabilization</span>
      <span class="featured-formula-detail">\(\displaystyle \varphi \equiv \uparrow b[t] \rightarrow \exists r \in \mathbb{R}.\ \exists c \in [0,10].\)</span>
      <span class="featured-formula-detail">\(\displaystyle \forall d \in [0,8].\ |f(t+c+d)-r| \leq 0.5\)</span>
    </div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">FM 2026</p>
      <h3>Quantitative Monitoring of Signal First-Order Logic</h3>
      <p class="featured-publication-authors">Marek Chalupa, Thomas A. Henzinger, N. Ege Sarac, and Emily Yu</p>
      <p>The first quantitative semantics and online monitoring method for expressive Signal First-Order Logic.</p>
      <div class="featured-publication-links"><a href="https://arxiv.org/pdf/2603.00728">PDF</a><a href="https://doi.org/10.1007/978-3-032-26220-2_11">DOI</a></div>
    </div>
  </article>
  <article class="featured-publication">
    <div class="featured-publication-figure"><img src="{{ '/assets/img/featured-aaai25-plot.webp' | relative_url }}" alt="AAAI 2025 plots of estimated certificate values for drone and ship control systems"></div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">AAAI 2025 · Selected for oral presentation</p>
      <h3>Neural Control and Certificate Repair via Runtime Monitoring</h3>
      <p class="featured-publication-authors">Emily Yu, Dorde Zikelic, and Thomas A. Henzinger</p>
      <p>Runtime feedback detects unsafe behavior and helps repair neural controllers and their safety certificates when the system dynamics are unknown.</p>
      <div class="featured-publication-links"><a href="https://arxiv.org/pdf/2412.12996">PDF</a><a href="https://doi.org/10.1609/aaai.v39i25.34840">DOI</a></div>
    </div>
  </article>
</div>

<p class="featured-publications-more"><a href="{{ '/publications/' | relative_url }}">All publications <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></p>
