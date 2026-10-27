# Study Lab — Networking Midterm update

**New tab: Networking Midterm.** Includes exactly **34 original MCQs and 3 short answers**, with 1–2 sentence model answers. This category covers networking and is separate from the existing ITEC 3505 project-management banks.

## Upload this version

Extract the ZIP and upload **all its contents into the existing GitHub Pages folder containing `index.html`**, replacing matching files. Do not upload the ZIP itself or add an extra enclosing folder. Open your existing site and choose **Networking Midterm**. On a narrow screen, scroll the navigation sideways.

You can also open `networking.html` directly on your computer. No build, account, installation, or server is required. Browser-local saving may be restricted for local files.

## Networking practice

- 12 subnetting MCQs, 12 TCP/UDP/transport MCQs, 6 intranet/extranet/access MCQs, and 4 networking-foundation MCQs, mixed into a fixed 34-question order.
- 3 short answers: TCP versus UDP, the transport layer, and extranets. Aim for 1–2 sentences each.
- One question at a time, question navigation, saved responses, submission, automatic MCQ score out of 34, topic results, and explanations.
- Short answers are **not automatically graded**. Compare your response with the model and self-assess two key points per question. The optional score out of 6 is a practice convention, not an instructor rubric.
- Quick review includes the difference between borrowed bits, number of subnets, and usable-host counts.
- `networking-printable.html` provides the questions and answer key; its print buttons can save a PDF with or without answers.
- Retrying replaces only the current networking attempt and uses the same questions. Progress for the two PM sets remains independent.

This is untimed practice. The screenshot supplies topic guidance, not a confirmed exam outline. The question mix and difficulty are practice choices. All questions are original teaching examples; references link to RFCs, Cisco, NIST, and Cloudflare. The Cisco extranet case is historical and used only to illustrate the concept. The networking questions are not attributed to Schwalbe.

Files added: `networking.html`, `networking.css`, `networking.js`, `networking-data.js`, and `networking-printable.html`. Existing `app.js`, `index.html`, and `set2.html` add the category link and refreshed asset versions. The original question-bank files and printable PM exams are preserved.

Networking responses stay in this browser under a separate storage key. There is no backend or answer upload. If storage is unavailable, the interface displays a warning and works for the current page session.

## Verification of this update

Programmatic checks cover exact question counts, valid choices, scores, short-answer self-assessment, saved responses, safe display of typed text, reset isolation, subnet calculations, relative links, and ZIP integrity. The existing PM bank tests are also run. Live browser layout could not be verified under the current preview restrictions.

---

The prior PM-specific documentation follows; its exam-format notes apply only to those PM banks.

# ITEC 3505 Study Lab — two separate midterm practice sets

This update adds **Practice Set 2**: 100 additional original questions covering Chapters 1–6 of Schwalbe’s *Information Technology Project Management*, ninth edition.

**Practice Set 1 remains unchanged.** The website now contains 200 midterm questions across two separate sets, plus the existing 105 final-exam questions for Chapters 7–13.

## Upload this update to your existing GitHub website

1. Extract the ZIP on your computer.
2. Upload **all extracted files into the same repository folder that currently contains your website’s `index.html`**. Replace files with the same names and add the new files. Do not upload just the ZIP or place the files inside an extra nested folder.
3. Save/commit the upload and let your existing GitHub Pages deployment finish.
4. Open your website and select **Practice Set 2** in its navigation. On a narrow screen, the navigation scrolls horizontally.

The package includes the complete website. No installation or build command is needed. It has not been uploaded or published to GitHub for you.

For local use, open `index.html` for Set 1 or `set2.html` for Set 2. JavaScript is required for interactive practice. The printable pages can be read without it.

## What is included

- `index.html`: original Study Lab / Practice Set 1 entry page.
- `set2.html`: new Practice Set 2 entry page and separate navigation tab.
- `data.js`: unchanged original 100 midterm and 105 final questions, plus chapter notes.
- `set2-data.js`: 100 new questions, explained answers, and printed textbook page references.
- `app.js` and `styles.css`: shared application and appearance.
- `printable.html`: original Set 1 questions and answers.
- `set2-printable.html`: separate printable Set 2 questions, followed by its explained answer key. Its Print / save as PDF button uses your browser’s print dialog.
- `STUDY_GUIDE.md`: review guidance, formulas, and ninth-edition notes.
- `.nojekyll` and `.gitignore`: static-site support files.

All links and assets are relative so repository subpaths work. No backend, external fonts, analytics, accounts, or API keys are required. Textbook and professor PDFs are not redistributed.

## Using Set 2

Choose the **Practice Set 2** tab, then use Practice, Flashcards, Mock exam, Chapter notes, or Progress for that set. It includes chapter/type filters, retry-missed and unattempted filters, immediate explained feedback in practice, a timed mock, flags, question navigation, and chapter results.

The mixed mock contains all 100 Set 2 questions in randomized order, with shuffled MCQ options. It defaults to 90 minutes; 80- and 120-minute practice settings are available. MCQ-only practice uses the set’s 72 MCQs. Repeated attempts reuse this bank, not newly generated questions.

## Separate progress; existing work preserved

Set 1 retains its original question IDs and browser-storage key. The new Set 2 has its own question IDs and separate storage. Studying or resetting one set does not erase the other set’s answers, flashcards, or exam history.

Progress persists only in the same browser and origin. Keep the existing website address to retain your old progress. Moving to a different host, clearing browser data, or using private browsing can affect persistence. Browser storage may be restricted for local files.

Each set can preserve its own active mock. Its deadline continues to elapse when you switch pages; an expired saved attempt is submitted when that set is opened again. You can review submitted attempts and retry missed questions within the appropriate set.

## Question coverage and sources

Each midterm set has 72 MCQ and 28 true/false questions:

| Chapter | MCQ | True/false | Total |
| --- | ---: | ---: | ---: |
| 1 | 12 | 4 | 16 |
| 2 | 12 | 4 | 16 |
| 3 | 12 | 6 | 18 |
| 4 | 12 | 6 | 18 |
| 5 | 12 | 4 | 16 |
| 6 | 12 | 4 | 16 |
| **Total per set** | **72** | **28** | **100** |

Set 2 includes new scenarios and distinctions involving success measures, investment categories, leadership, culture, governance, process mapping, both JWD cases, benefits/assumptions, financial comparisons, requirements techniques, WBS interpretation, dependency types, leads/lags, backward passes, float, compression, and PERT. It reuses core textbook concepts for reinforcement, but no question stem or ID is copied from Set 1.

Primary source: your supplied Schwalbe ninth-edition textbook, Chapters 1–6. Every new answer has an explanation and specific **printed textbook page references**; add 25 for the corresponding page in your supplied PDF viewer. Fictional scenarios and calculations are original teaching examples; named JWD and ResNet cases refer to the textbook. Your professor’s sample PDF informed the concise scenario/definition style.

You confirmed a 100-question MCQ/true-false midterm. The 72/28 mix and chapter distribution here are practice choices; the instructor’s exact split and weights are unknown. These are original study questions, not actual exam questions or guaranteed predictions. The existing final-exam bank was preserved, not reverified in this update.

## Validation

Both banks passed programmatic checks for counts, unique IDs, valid answers, chapter filters, scoring, shuffled option mappings, resume/flags, timeout, history, retry-missed, flashcards, reset isolation, and storage fallback. Set 1’s question data was compared with the previous ZIP and preserved. New financial/network calculations were independently checked, and relative file links and ZIP integrity were verified.

Live browser preview was unavailable under this environment’s restrictions, so real-browser visual layout was not verified in this update.
