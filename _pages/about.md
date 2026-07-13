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
My work on certification has influenced the development of hardware model checking infrastructure and competition workflows. This line of work received Distinguished Paper Awards at CAV 2025 and CAV 2026, the most prestigious conference in formal verification. I also previously received the highly competitive ESPRIT fellowship in Austria.

Before joining Leiden, I was a postdoctoral researcher (2023-2025) in <a href='https://pub.ista.ac.at/group_henzinger/'>Prof. Thomas Henzinger</a>’s group at the Institute of Science and Technology Austria. I received my PhD in 2023 in the doctoral program ‘Logical Methods in Computer Science’ (LogiCS) funded by FWF, and the LIT AI Lab under the supervision of <a href='https://cca.informatik.uni-freiburg.de/biere/'>Prof. Armin Biere</a>, at the Johannes Kepler University Linz in Austria. My thesis was on hardware model checking certification. Before that, I completed my undergraduate studies in the Department of Computing at Imperial College London, UK, where I was advised by <a href='https://www.doc.ic.ac.uk/~alessio/index.html'>Prof. Alessio Lomuscio</a>.

## Research

My research develops formal methods and automated reasoning techniques for building trustworthy systems, with a focus on safety-critical hardware and learning-enabled autonomous systems. Current topics include:

<div class="research-topic-grid">
  <details class="research-topic-card">
    <summary>
      <span>Neural Control for Safe Autonomy</span>
      <i class="fa-solid fa-chevron-down"></i>
    </summary>
    <div class="research-topic-body">
      <p>
        I work on methods that make learning-enabled control systems safer and more trustworthy, with an emphasis on
        neural certificates, runtime monitoring, and formal guarantees for autonomous systems.
      </p>
      <p class="research-topic-label">Research topics:</p>
      <ul>
        <li>How can we synthesize neural certificates that prove formal specifications for learned controllers?</li>
        <li>How can runtime monitors enforce formal safety guarantees for learning-enabled autonomous systems?</li>
        <li>How can formal logic, control theory, and machine learning be combined into practical verification tools?</li>
      </ul>
    </div>
  </details>

<details class="research-topic-card">
    <summary>
      <span>Automated Reasoning and Hardware Model Checking</span>
      <i class="fa-solid fa-chevron-down"></i>
    </summary>
    <div class="research-topic-body">
      <p>
        I develop certification and verification techniques for hardware and solver-based reasoning, including
        SAT-based model checking, independently checkable certificates, and trustworthy automated reasoning pipelines.
      </p>
      <p class="research-topic-label">Research topics:</p>
      <ul>
        <li>How can model-checking results for hardware designs be accompanied by independently checkable certificates?</li>
        <li>How can we leverage certificates to teach LLMs to optimize for performance and efficiency without sacrificing correctness and safety?</li>
        <li>How can automated reasoning scale to complex safety-critical systems without sacrificing correctness guarantees?</li>
      </ul>
    </div>
  </details>
</div>

<script>
  document.querySelectorAll(".research-topic-card").forEach((card) => {
    card.addEventListener("toggle", () => {
      if (card.dataset.syncing === "true") return;

      const cards = document.querySelectorAll(".research-topic-card");
      cards.forEach((otherCard) => {
        if (otherCard === card) return;
        otherCard.dataset.syncing = "true";
        otherCard.open = card.open;
        otherCard.dataset.syncing = "false";
      });
    });
  });
</script>

Check out my [publications](/publications/) or connect with me via email. 
