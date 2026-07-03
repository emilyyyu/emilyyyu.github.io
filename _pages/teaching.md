---
layout: page
permalink: /teaching/
title: teaching
nav: true
nav_order: 6
_styles: >
  .teaching-list h2 {
    width: 100%;
    padding: 0.65rem 0.85rem;
    margin: 1.7rem 0 1rem;
    background: #eeeeee;
    color: var(--global-text-color);
    font-size: 1.25rem;
    font-weight: 600;
  }

  html[data-theme="dark"] .teaching-list h2 {
    background: #3a3a3d;
  }

  .teaching-list h3 {
    margin-top: 1.5rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid var(--global-divider-color);
    font-size: 1.1rem;
    font-weight: 600;
  }

  .teaching-list p {
    margin-bottom: 0.85rem;
  }

  .teaching-client-note {
    padding: 0.75rem 0.9rem;
    margin: 0.8rem 0 1rem;
    border-left: 4px solid var(--global-theme-color);
    background: rgba(232, 90, 155, 0.12);
    color: var(--global-text-color);
    font-weight: 500;
  }

  .teaching-course-accent {
    color: var(--global-theme-color);
    font-weight: 600;
  }
---

<div class="teaching-list" markdown="1">

## Courses

Here I list the courses associated with my teaching at Leiden University.

### Spring 2027

<span class="teaching-course-accent">Software Engineering</span> · 6 ECTS  
As part of the course, students carry out real-world software projects in collaboration with [LUdev](https://ludev.nl/).

I am currently designing lecture materials that cover modern software development and examine how AI automation is reshaping every stage of the traditional software development lifecycle. One of the questions of the course is: how can the next generation of software engineers leverage these advances to dramatically improve their productivity and prepare for their careers?

<p class="teaching-client-note">If you have a commercial or academic software project that could benefit from a student team, and you would be interested in acting as a client for the course, please drop me an email.</p>

### Winter 2026

<span class="teaching-course-accent">Formal Methods for AI</span> · 6 ECTS  
This is a course that I will design by myself, covering key topics of safe AI and automated reasoning. If you are designing and/or teach a similar course and are interested in course design, feel free to reach out to me. I am always happy to discuss it.

---

## Bachelor and Master Projects

I am always excited to work with motivated students. Below are a few directions and example topics, but I’m equally happy to hear your ideas. Feel free to also browse my publications for inspiration.

Most projects involve implementing new or improved algorithms and therefore benefit from programming experience, ideally in C++ or Python. For many topics, curiosity and a willingness to learn during the project are more important than prior expertise.

<span style="text-decoration: underline;">Direction: Certified Neural Control</span>

Deep learning is increasingly used in robotics and control, yet ensuring safety and stability remains challenging. We build tools that make learned controllers safer and produce data-driven proofs (certificates) of their correctness. We are also interested in formally verifying the correctness of these controllers.

If this fits you:

- You enjoy implementing algorithms and are curious about machine learning, C++ or Python preferred.

- We have projects regarding case studies, building and evaluating tools, and theoretical advances.

<span style="text-decoration: underline;">Direction: Symbolic Verification & Automated Reasoning</span>

Formal methods are widely used to guarantee the correctness of safety-critical systems. The underlying solvers are complex; we design certificates (independently checkable evidence) that validate solver results and increase trust.

If this fits you:

- You enjoy implementing algorithms (C++ preferred) and are interested in formal methods such as SAT/SMT and model checking.

- We have projects regarding case studies, building and evaluating tools, and theoretical advances.

</div>
