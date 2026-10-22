# ITEC 3210 Midterm Lab — Lecture Revision

The original Quizlet-style design, updated for the uploaded slides from Andriy Pavlovych's ITEC 3210 course. Includes 180 multiple-choice questions: the original 30, three 30-question mock sets (A/B/C), and 60 lecture drills. Also includes eight written prompts, a 20-page PDF study guide, 174 textbook review prompts, and 120 original Study Guide Quiz questions.

## Open locally

Extract the ZIP first, then open `index.html`. No installation, account, build or internet connection is required.

## Put it on GitHub

To update your existing site, upload `index.html`, `styles.css`, `practice-data.js`, `practice-c.js`, `textbook-data.js`, `textbook.js`, `study-guide-data.js`, `study-guide-quiz.js`, `app.js`, `QUESTION-SOURCES.md`, `ITEC3210-Midterm-Study-Guide.pdf` and `README.md` to the same folder as the existing `index.html`, replacing matching files. Commit, allow the existing deployment to finish, then refresh. Keep the files together. No existing hosting configuration change is needed.

For a new repository, upload the same files to its root. GitHub Pages uses Settings → Pages → Deploy from a branch → main → / (root).

This revision uses a separate browser-progress key so replaced questions do not inherit old mastery marks. Old-site progress is not deleted.

## Privacy reminder

The course syllabus says course materials may not be publicly posted or distributed without the instructor's permission. Keep the repository private unless the instructor authorizes public sharing. Note that GitHub Pages publishes a site publicly on standard personal accounts.

## Included study tools

- Original 30-question sample retained, with reviewed study keys and ambiguity notes
- Three 30-question mock sets (A/B/C) and 60 focused lecture drills
- Five answer choices and explanations for every question
- Chronological organization by the five uploaded lecture topics
- Flashcards with answer explanations
- Immediate-feedback study tests or feedback-at-end exam practice
- Shuffle, answer review and eight written-answer prompts with reasoning checkpoints
- Retry-missed mode
- Progress saved in the browser
- Keyboard controls and responsive mobile layout

## Content basis

New questions primarily use Lecture 1 (foundations/goals), Lecture 2 (applications), Lecture 3 (physical/data link) and Lecture 4 (network/transport). The new 05 Wired and Wireless LANs.pdf adds Lecture 5, textbook Chapter 7. This replaces the earlier mislabeled duplicate of Lecture 4. The application-layer and Week 3 files repeat Lectures 2 and 3. The supplied sequence is Chapters 1-5 and 7; the LAN title slide states Chapter 6 is covered later.

Fresh numerical scenarios use the subnetting and efficiency methods emphasized by the slides and Assignment 1. The ZIP includes the original study-guide PDF, but not the lecture PDFs, textbook or assignment PDF. Use the overhead stated in each calculation; do not assume one universal Ethernet overhead value. Subnet exercises follow the course's conventional model: 2^s subnets, 2^h - 2 usable hosts, and at least two host bits remaining.

Lecture 4 slide 26's detailed routing table is explicitly excluded from exams and is not used. New questions do not expand the application-layer textbook sections 2.3–2.6 marked as not covered. Original sample-only material is retained for continuity and identified in its references.

No instructor answer key was supplied. Q4 now uses the supported efficiency answer. Q11 (datagram), Q19 (host-based disadvantages) and Q23 (single-mode reach) explain ambiguity rather than claiming an official key. Q7 retains the earlier site's reconstruction of a cropped stem.

These are original practice questions, not predictions or guarantees about the actual exam. The lecture identifies multiple-choice and written-answer components; practise explaining reasoning too. Every new question has a source reference, also listed in `QUESTION-SOURCES.md`.

## Verification

JavaScript syntax, bank integrity and numerical answers were checked. A DOM simulation covering all 180 questions exercised set/chapter changes, flashcards, mastery, answer locking, scoring, end-feedback mode, review, retry-missed, shuffle and reset. Live browser QA also verified Set C, the LAN filter, scoring, slide references and end-feedback exam mode. The 20-page PDF was rendered and visually checked.

## Set C update (October 22, 2026)

Set C has six physical/data-link questions, eight network/transport questions and sixteen wired/wireless LAN questions. It opens by default. Existing sets and their progress keys are retained. A disabled chapter button means that the selected set has no questions in that chapter. Use the guide download on the homepage for six study units in course order, with clear textbook-chapter mapping.

## Textbook Questions tab

Contains all 174 numbered end-of-chapter Questions from the user-supplied 14th-edition textbook: Chapter 1 (24), Chapter 2 (22), Chapter 3 (40), Chapter 4 (29), Chapter 5 (28), and Chapter 7 (31). These are the six chapters in the lecture sequence; textbook Chapter 6 is marked for later in the instructor slides. Exercises, minicases and online test banks are separate and are not included.

Prompts retain the original wording and numbers, with extracted line breaks normalized. Source labels identify chapter, question and PDF page range. These are written-response questions, not publisher-provided multiple-choice items. Revealed checkpoints are authored study guidance, not an official publisher/instructor answer key. Open-ended answers allow multiple defensible approaches; calculation checkpoints state their assumptions. Scope notes identify selected textbook material outside the slides' emphasis.

Textbook answers can be drafted in a textarea and are saved locally in the browser alongside separate self-check marks. No server receives drafts. Chapter selection, shuffle, question navigation and reveal/hide controls are included. Practice progress and textbook progress are independent; the header reset affects practice sets only.

The textbook update introduced `textbook-data.js` and `textbook.js`. Upload all twelve files from the latest ZIP, including the two Study Guide Quiz scripts. Existing A/B/C sets, lecture drills, original sample and the PDF guide remain included. Syntax and functional checks cover both question libraries; browser QA verifies the new tab and draft/reveal/navigation flow.


## Study Guide Quiz tab

120 new original multiple-choice questions: 20 per guide unit, in the same chronological order as the PDF. Units map to textbook Chapters 1, 2, 3, 4, 5 and 7. Each question includes five choices, an explanation, and a direct link to the relevant PDF page. Concept distinctions, application scenarios and worked-method numerical questions reflect the guide rather than adding topics from excluded textbook sections.

Choose immediate feedback or feedback at the end. Answers lock after selection; use the question map to reach unanswered questions, then finish for a score and complete answer review. Retry missed questions, shuffle or restart a unit. Each unit’s current attempt and best full-unit score are saved separately in the browser; retries do not replace full-unit bests. The practice reset does not clear guide sessions or textbook drafts. Local-file browser storage support varies; GitHub Pages provides a consistent site origin.

To update GitHub, extract the ZIP and upload **all twelve files** into the existing site folder, replacing matching files. In particular, include `study-guide-data.js` and `study-guide-quiz.js` alongside the revised HTML, CSS and textbook tab script. Existing question sets and the PDF remain included. No build step is required.

Verification for this addition: checks cover all 120 items, unique options/IDs, 20 per unit, balanced answer positions, chapter mapping, independent arithmetic, three-tab navigation, locked answers, study/exam feedback, completion validation, scoring, retry, shuffle, saved sessions and isolated progress. Existing practice and textbook checks continue to pass.
