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

## Forschung

Meine Forschung entwickelt formale Methoden und automatisierte Schlussfolgerungsverfahren für den Bau vertrauenswürdiger Systeme, mit Schwerpunkt auf sicherheitskritischer Hardware und lernbasierten autonomen Systemen. Aktuelle Themen sind:

<div class="research-topic-grid">
  <details class="research-topic-card">
    <summary>
      <span>Neuronale Regelung für sichere Autonomie</span>
      <i class="fa-solid fa-chevron-down"></i>
    </summary>
    <div class="research-topic-body">
      <p>
        Ich arbeite an Methoden, die lernbasierte Regelungssysteme sicherer und vertrauenswürdiger machen, insbesondere
        durch neuronale Zertifikate, Laufzeitüberwachung und formale Garantien für autonome Systeme.
      </p>
      <p class="research-topic-label">Forschungsthemen:</p>
      <ul>
        <li>Wie können wir neuronale Zertifikate synthetisieren, die formale Spezifikationen für gelernte Controller beweisen?</li>
        <li>Wie können Laufzeitmonitore formale Sicherheitsgarantien für lernbasierte autonome Systeme durchsetzen?</li>
        <li>Wie lassen sich formale Logik, Regelungstechnik und maschinelles Lernen zu praktischen Verifikationswerkzeugen verbinden?</li>
      </ul>
    </div>
  </details>

  <details class="research-topic-card">
    <summary>
      <span>Automatisiertes Schließen und Hardware Model Checking</span>
      <i class="fa-solid fa-chevron-down"></i>
    </summary>
    <div class="research-topic-body">
      <p>
        Ich entwickle Zertifizierungs- und Verifikationstechniken für Hardware und solverbasierte Schlussfolgerung,
        darunter SAT-basiertes Model Checking, unabhängig prüfbare Zertifikate und vertrauenswürdige automatisierte Reasoning-Pipelines.
      </p>
      <p class="research-topic-label">Forschungsthemen:</p>
      <ul>
        <li>Wie können Ergebnisse des Model Checkings für Hardware-Designs durch unabhängig prüfbare Zertifikate begleitet werden?</li>
        <li>Wie können wir Zertifikate nutzen, um LLMs auf Performanz und Effizienz zu optimieren, ohne Korrektheit und Sicherheit zu opfern?</li>
        <li>Wie kann automatisiertes Schließen auf komplexe sicherheitskritische Systeme skalieren, ohne Korrektheitsgarantien aufzugeben?</li>
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

Sie finden meine [Publikationen](/publications/) online oder erreichen mich per E-Mail.
