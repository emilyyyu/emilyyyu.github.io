---
layout: about
title: über mich
permalink: /de/
lang: de
subtitle: <a href='https://liacs.leidenuniv.nl/'>Leiden Institute of Advanced Computer Science (LIACS)</a>, Universität Leiden, Niederlande.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Kontakt:</p>
    <p>z.yu@liacs.leidenuniv.nl</p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

---

Ich bin Assistant Professor mit Tenure in Informatik an der Universität Leiden in den Niederlanden.

Meine Forschung entwickelt breit gefasst formale Methoden und automatisierte Schlussfolgerungsverfahren für den Bau vertrauenswürdiger Systeme. Ein zentrales Thema meiner Arbeit ist Zertifizierung: unabhängig prüfbare Nachweise, die Verifikationsprozesse für sicherheitskritische Systeme zuverlässiger und transparenter machen.

Meine Arbeit zur Zertifizierung hat die Entwicklung von Infrastruktur für Hardware Model Checking und Solver-Zuverlässigkeit beeinflusst. Diese Forschungslinie erhielt Distinguished Paper Awards auf der CAV 2025 und CAV 2026, der renommiertesten Konferenz im Bereich formale Verifikation. Außerdem wurde meine Forschung durch das Veni Talent Program des Dutch Research Council (NWO) in den Niederlanden und das hochkompetitive ESPRIT Fellowship des Austrian Science Fund (FWF) in Österreich ausgezeichnet.

Vor meiner Zeit in Leiden war ich Postdoktorandin (2023-2025) in der Gruppe von <a href='https://pub.ista.ac.at/group_henzinger/'>Prof. Thomas Henzinger</a> am Institute of Science and Technology Austria. Ich habe im Doktoratsprogramm "Logical Methods in Computer Science" (LogiCS), gefördert durch den FWF, und am LIT AI Lab promoviert. Betreut wurde ich von <a href='https://cca.informatik.uni-freiburg.de/biere/'>Prof. Armin Biere</a> an der Johannes Kepler Universität Linz in Österreich. Meine Dissertation beschäftigte sich mit Zertifizierung im Hardware Model Checking. Davor habe ich mein Bachelorstudium am Department of Computing des Imperial College London in Großbritannien abgeschlossen, wo ich von <a href='https://www.doc.ic.ac.uk/~alessio/index.html'>Prof. Alessio Lomuscio</a> betreut wurde.

<p class="phd-note">Interesse an einer Promotion bei mir? Schreiben Sie mir gerne eine E-Mail mit Ihrem Lebenslauf, Ihrem Transcript und einer kurzen Erklärung, wie Ihre Forschungsinteressen zum Veritas Lab passen. Zusätzlich kann es Möglichkeiten geben, sich für ein CSC-Stipendium zu bewerben.</p>

## Forschungsrichtungen

Meine Forschung entwickelt praktische Methoden, um festzustellen, ob komplexe Systeme sicher und korrekt sind, und um überprüfbare Belege für ihre Ergebnisse zu liefern. Meine Arbeit konzentriert sich auf vier miteinander verbundene Richtungen:

<div class="research-direction-grid">
  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-runtime-monitoring.webp' | relative_url }}" alt="Laufzeitmonitor beobachtet einen autonomen Rover und sagt ein Hindernis voraus">
    <h3>Laufzeitüberwachung</h3>
    <p>
      Manche Systeme können vor ihrem Einsatz nicht vollständig analysiert werden, insbesondere wenn ihre Dynamik
      unbekannt ist. Wir entwickeln Monitore, die ihr Verhalten beobachten, Sicherheitsverletzungen vorhersagen und
      rechtzeitiges Eingreifen ermöglichen.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-automated-reasoning.webp' | relative_url }}" alt="Automatisierte Reasoning-Engine untersucht sichere und unsichere Systemverhalten">
    <h3>Automatisiertes Schließen und Model Checking</h3>
    <p>
      Wir untersuchen, wie automatisierte Reasoning-Technologien wie SAT, SMT und Model Checking die skalierbare
      Verifikation sicherheitskritischer Systeme ermöglichen können.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-ai-verification.webp' | relative_url }}" alt="Neuronales Netz durchläuft einen formalen Verifikationsscanner">
    <h3>KI-Verifikation</h3>
    <p>
      KI-Modelle sind leistungsfähig, doch ihre Entscheidungen sind oft schwer zu verstehen und abzusichern. Wir
      entwickeln Methoden zur Prüfung ihrer Sicherheit, Robustheit und Fairness sowie leichter verifizierbare
      Lernarchitekturen.
    </p>
  </article>

  <article class="research-direction">
    <img class="research-direction-visual" src="{{ '/assets/img/research-certification.webp' | relative_url }}" alt="Verifikationswerkzeug erzeugt einen Beweis für einen unabhängigen Zertifikatsprüfer">
    <h3>Zertifizierung</h3>
    <p>
      Verifikationswerkzeuge sind selbst komplex und können Fehler enthalten. Wir entwickeln formale Beweise und
      unabhängige Prüfer, damit Verifikationsergebnisse kompakte, maschinenprüfbare Korrektheitsnachweise enthalten.
    </p>
  </article>
</div>

## Ausgewahlte Publikationen

<div class="featured-publications">
  <article class="featured-publication">
    <div class="featured-publication-figure"><img src="{{ '/assets/img/featured-cav26-plot.webp' | relative_url }}" alt="CAV-2026-Leistungsdiagramm zu gelosten Instanzen und Laufzeit"></div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">CAV 2026 · Distinguished Paper Award</p>
      <h3>Liveness Proofs for Hardware Model Checking</h3>
      <p class="featured-publication-authors">Nils Froleyks, Emily Yu, Bart Bogaerts, Armin Biere und Keijo Heljanko</p>
      <p>Skalierbare Liveness-Beweise.</p>
      <div class="featured-publication-links"><a href="{{ '/assets/pdf/LivenessCertificationCAV26.pdf' | relative_url }}">PDF</a></div>
    </div>
  </article>
  <article class="featured-publication">
    <div class="featured-publication-formula" aria-label="Signal-First-Order-Logic-Formel zur beschrankten Stabilisierung">
      <span class="featured-formula-name">Bounded stabilization</span>
      <span class="featured-formula-detail">\(\displaystyle \varphi \equiv \uparrow b[t] \rightarrow \exists r \in \mathbb{R}.\ \exists c \in [0,10].\)</span>
      <span class="featured-formula-detail">\(\displaystyle \forall d \in [0,8].\ |f(t+c+d)-r| \leq 0.5\)</span>
    </div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">FM 2026</p>
      <h3>Quantitative Monitoring of Signal First-Order Logic</h3>
      <p class="featured-publication-authors">Marek Chalupa, Thomas A. Henzinger, N. Ege Sarac und Emily Yu</p>
      <p>Die erste quantitative Semantik und eine Online-Monitoring-Methode fur ausdrucksstarke Signal First-Order Logic.</p>
      <div class="featured-publication-links"><a href="https://arxiv.org/pdf/2603.00728">PDF</a><a href="https://doi.org/10.1007/978-3-032-26220-2_11">DOI</a></div>
    </div>
  </article>
  <article class="featured-publication">
    <div class="featured-publication-figure"><img src="{{ '/assets/img/featured-aaai25-plot.webp' | relative_url }}" alt="AAAI-2025-Diagramme geschatzter Zertifikatswerte fur Drohnen- und Schiffssteuerungen"></div>
    <div class="featured-publication-body">
      <p class="featured-publication-meta">AAAI 2025 · Ausgewahlt fur einen Vortrag</p>
      <h3>Neural Control and Certificate Repair via Runtime Monitoring</h3>
      <p class="featured-publication-authors">Emily Yu, Dorde Zikelic und Thomas A. Henzinger</p>
      <p>Laufzeitfeedback erkennt unsicheres Verhalten und hilft dabei, neuronale Steuerungen und ihre Sicherheitszertifikate bei unbekannter Systemdynamik zu reparieren.</p>
      <div class="featured-publication-links"><a href="https://arxiv.org/pdf/2412.12996">PDF</a><a href="https://doi.org/10.1609/aaai.v39i25.34840">DOI</a></div>
    </div>
  </article>
</div>

<p class="featured-publications-more"><a href="{{ '/publications/' | relative_url }}">Alle Publikationen <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></p>
