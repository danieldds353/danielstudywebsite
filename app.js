const chapters = [
  { id: 1, week: "Lecture 1 · Ch. 1", title: "Foundations, Structured Design & Technical Goals", short: "Network foundations", color: "#51d7ff" },
  { id: 2, week: "Lecture 2 · Ch. 2", title: "Application Layer & Architectures", short: "Application layer", color: "#9b8cff" },
  { id: 3, week: "Lecture 3 · Ch. 3–4", title: "Physical & Data Link Layers", short: "Physical + data link", color: "#ffcb67" },
  { id: 4, week: "Lecture 4 · Ch. 5", title: "Network, Transport & Subnetting", short: "Network + transport", color: "#56dda0" },
  { id: 5, week: "Lecture 5 · Ch. 7", title: "Wired & Wireless LANs", short: "Wired + wireless LANs", color: "#ff6680" }
];

const sampleQuestions = [
  {
    id: 4, chapter: 1,
    question: "Which of the following is true regarding multi-layer model of communication?",
    options: ["Having multiple layers makes the communication faster", "The efficiency is higher when the packet sizes are larger", "Additional layers make protocol design more challenging", "Each layered model comes with its own set of protocols that normally does not change", "IP is the most common transport layer protocol"],
    answer: 1,
    explanation: "For fixed overhead, larger payloads increase useful-data efficiency. Lecture 1 slide 36 explains layering overhead and Lecture 3 slide 33 gives the efficiency formula. The previous site's key D was unsupported: layering does not require an unchanging protocol suite."
  },
  {
    id: 6, chapter: 1,
    question: "Which of the following statements about WANs is true?",
    options: ["They are used to connect more distant computers within a large building", "They are typically located within a large building", "WANs refer only to wired networks", "Their maximum span is about 100 kilometers", "They usually rely on leased circuits"],
    answer: 4,
    explanation: "WANs cover large geographic areas and commonly use carrier-provided or leased circuits. They are not restricted to one building, one medium, or a 100 km span."
  },
  {
    id: 7, chapter: 1,
    question: "An extranet is...",
    options: ["A network that is open to users outside the organization that maintains it", "A network that supports higher data transfer speed", "A network that contains features not required now, but possibly useful in the future", "A file-sharing application-layer protocol", "None of the above"],
    answer: 0,
    explanation: "An extranet extends controlled access to authorized people outside the organization, such as suppliers, customers, or partners."
  },
  {
    id: 10, chapter: 1,
    question: "Communication protocols...",
    options: ["Must be implemented in a device driver", "Must specify the speed at which communication happens", "Can be implemented in hardware", "Always involve communication between two devices", "None of the above"],
    answer: 2,
    explanation: "Protocols may be implemented in hardware, software, or a combination. They are not required to live in a device driver or to govern only two-device exchanges."
  },
  {
    id: 14, chapter: 2,
    question: "Which of the following is NOT a transaction-processing system (TPS)?",
    options: ["Ticket-purchasing system", "University enrolment system", "Order processing system", "Online radio system", "Inventory system"],
    answer: 3,
    explanation: "An online radio system primarily streams content; it does not record and process routine business transactions like purchases, enrolments, orders, or inventory changes."
  },
  {
    id: 15, chapter: 2,
    question: "Which of the functions is NOT a part of the TPS?",
    options: ["Data access logic", "Application logic", "RTS/CTS scheduling", "Data storage", "Presentation logic"],
    answer: 2,
    explanation: "RTS/CTS is a wireless media-access mechanism. Presentation, application, data-access, and data-storage functions are components used to describe transaction-processing applications."
  },
  {
    id: 17, chapter: 2,
    question: "Which layer of the Internet Model does RTP belong to?",
    options: ["Presentation", "Application", "Data Link", "MAC", "Physical"],
    answer: 1,
    explanation: "RTP provides real-time media delivery services to applications and is treated as an application-layer protocol in the Internet model."
  },
  {
    id: 18, chapter: 2,
    question: "What is the main limitation of Client-based architecture?",
    options: ["It is generally very slow or results in excessive network load", "It cannot support many users", "It does not have good mechanisms to ensure high availability", "All of the above", "None of the above"],
    answer: 0,
    explanation: "In client-based architecture, large amounts of data can move from the server to the client for processing, creating heavy network traffic and slow response times."
  },
  {
    id: 19, chapter: 2,
    question: "Which of the following is a common disadvantage of having a host-based architecture?",
    options: ["Only one CPU (or a couple) are responsible for all the processing", "The applications are more difficult to develop", "It is more expensive to upgrade the equipment when only small changes are needed", "The slowest device is going to affect the whole system", "The architecture is not very reliable"],
    answer: 2,
    explanation: "Lecture 2 slide 8 specifically emphasizes costly upgrades in large increments (C), and also mentions a central bottleneck (A). Both are defensible disadvantages, so this original sample is ambiguous. Treat C as the slide-emphasized study answer, not a confirmed official key."
  },
  {
    id: 20, chapter: 2,
    question: "In Software as a Service, which parts are NOT outsourced (i.e., internal)?",
    options: ["Application Logic and Services Logic", "Application Logic and Data Access Logic", "Application Logic, Data Access Logic, OS", "All of the above are outsourced", "None of the above are outsourced"],
    answer: 3,
    explanation: "With SaaS, the provider operates the application and its supporting platform. The listed application, service, data-access, and operating-system components are outsourced."
  },
  {
    id: 21, chapter: 2,
    question: "Client-based architecture...",
    options: ["Is an architecture where a server is only responsible for data storage", "Is an architecture where each computer typically has features of both a client and a server", "Is a type of client-server architecture", "Is a type of peer-to-peer architecture", "None of the above"],
    answer: 0,
    explanation: "In client-based architecture, the client handles presentation, application, and data-access logic while the server primarily provides data storage."
  },
  {
    id: 28, chapter: 2,
    question: "Which of the following applies to thin clients?",
    options: ["Presentation logic is handled by a dedicated server", "Workload is split over two application servers running in parallel", "Data access logic is decoupled from data storage", "A backup server is needed if thin clients are used", "Only presentation logic may be handled on the client side"],
    answer: 4,
    explanation: "A thin client performs little local processing. It may handle only the presentation interface while application and data work remain on the server."
  },
  {
    id: 16, chapter: 3,
    question: "What approaches are employed to reduce interference in coaxial cables?",
    options: ["Bundling the wires together only", "Shielding the wires only", "Twisting the wires only", "Shielding and twisting the wires", "All of the above"],
    answer: 1,
    explanation: "Coaxial cable uses a conductive outer shield around its central conductor to reduce electromagnetic interference. Twisting is the technique associated with twisted-pair cable."
  },
  {
    id: 23, chapter: 3,
    question: "What is the typical maximum distance typically supported by a single-mode fiber Ethernet cable?",
    options: ["80+ km", "40 km", "10 km", "500 m", "100 m"],
    answer: 0,
    explanation: "Lecture 3 slides 12–13 describe single-mode fiber reaching 100 km or more, which best matches A (80+ km). Actual Ethernet reach depends on the optical standard and transceivers; a particular optic's 40 km rating is not a universal maximum. The sample gives no optic, so its intended official answer cannot be confirmed."
  },
  {
    id: 24, chapter: 3,
    question: "Simplex data flow means...",
    options: ["Communication can happen in one direction only", "Communication can take place only at about 50% of the nominal speed", "Communication can take place in both directions, but not at the same time", "The speed in one direction is not the same as the speed in the other direction", "None of the above"],
    answer: 0,
    explanation: "Simplex is strictly one-way communication. Half-duplex supports both directions, but only one direction at a time."
  },
  {
    id: 25, chapter: 3,
    question: "How many individual conductors does a typical twisted-pair Ethernet cable have?",
    options: ["2", "4", "6", "8", "None of the above"],
    answer: 3,
    explanation: "A standard Ethernet twisted-pair cable contains four pairs, for a total of eight individual conductors."
  },
  {
    id: 26, chapter: 3,
    question: "CRC-32 code is an example of...",
    options: ["Error-correction code", "Error-detection code", "Error-correction and error-detection code", "MAC code", "Line code"],
    answer: 1,
    explanation: "CRC-32 computes a checksum that detects transmission errors. It identifies corruption but does not itself correct the damaged data."
  },
  {
    id: 1, chapter: 4,
    question: "Your organization has been assigned a class C network IP address. You are asked to propose a subnetting plan that allows for 5 subnets. What is the maximum number of hosts on each subnet?",
    options: ["192", "51", "32", "30", "More information is needed before one can answer this question"],
    answer: 3,
    explanation: "Five subnets require borrowing 3 bits because 2³ = 8. A class C address then has 5 host bits, giving 2⁵ − 2 = 30 usable hosts per subnet."
  },
  {
    id: 2, chapter: 4,
    question: "Consider a class A address with a subnet mask of 255.255.255.240. What is the maximum number of hosts on each subnet?",
    options: ["2,097,152", "240", "238", "14", "None of the above"],
    answer: 3,
    explanation: "255.255.255.240 is /28, leaving 4 host bits. That produces 2⁴ − 2 = 14 usable host addresses per subnet."
  },
  {
    id: 3, chapter: 4,
    question: "Consider a class B address with a subnet mask of 255.255.255.224. What is the maximum number of subnets?",
    options: ["2048", "224", "222", "30", "None of the above"],
    answer: 0,
    explanation: "A class B network starts at /16. The /27 mask borrows 11 bits for subnetting, so it provides 2¹¹ = 2,048 subnets."
  },
  {
    id: 5, chapter: 4,
    question: "Your organization has been assigned a class A network IP address. You are asked to propose a subnetting plan that allows for 3 subnets. How many bits must be borrowed from the host ID portion?",
    options: ["22", "21", "3", "2", "More information is needed before one can answer this question"],
    answer: 3,
    explanation: "Borrow the smallest number of bits that can represent at least 3 subnets. Two bits produce 2² = 4 subnets."
  },
  {
    id: 11, chapter: 4,
    question: "Datagram is a name of a PDU at which Internet Model layer?",
    options: ["Application", "Presentation", "Session", "Network", "Transport"],
    answer: 3,
    explanation: "Network is the likely intended answer for an IP datagram. However, Lecture 4 slide 8 also calls UDP transport PDUs datagrams. The protocol is unspecified, making Network and Transport defensible. New practice questions specify IP or UDP to avoid this ambiguity."
  },
  {
    id: 12, chapter: 4,
    question: "For a given subnetting plan using IPv4, which of the following statements about the subnet mask is (are) true?",
    options: ["A subnet mask of 11011000 11011000 00000000 00000000 means that all computers with these two leftmost bytes are on the same subnet", "A subnet mask of 255.255.192.0 means that all computers with the same 18 leftmost bits are on the same subnet", "A subnet mask of 0.0.0.255 means that all computers with the same rightmost byte are on the same subnet", "A subnet mask of 0.0.0.255 means that all computers with the same three leftmost bytes are on the same subnet", "A subnet mask of 255.255.32.0 means that the subnetting plan is applied to a class B network IP address and that it allows for 32 subnets"],
    answer: 1,
    explanation: "255.255.192.0 is /18, so the leftmost 18 bits identify the subnet. Valid masks use contiguous 1-bits followed by 0-bits."
  },
  {
    id: 13, chapter: 4,
    question: "Your organization has been assigned a class B network IP address. You are asked to propose a subnetting plan that allows for 7 subnets. What is the resulting subnet mask?",
    options: ["255.255.224.0", "255.255.255.7", "255.255.7.0", "255.255.0.0", "More information is needed before one can answer this question"],
    answer: 0,
    explanation: "Seven subnets require 3 borrowed bits because 2³ = 8. Adding 3 bits to the class B /16 default creates /19, or 255.255.224.0."
  },
  {
    id: 30, chapter: 4,
    question: "Which layers of the internet protocol stack are typically not present in routers and only run on end systems?",
    options: ["Physical and data link", "Transport and data link", "Application and Transport", "A and B", "B and C"],
    answer: 2,
    explanation: "Routers operate mainly at the physical, data-link, and network layers. Application and transport protocols normally run only on end systems."
  },
  {
    id: 8, chapter: 5,
    question: "Which elements are the main components of the Structured Design?",
    options: ["Core, Application, Transport", "Distribution, Access, Core", "Access, Client, Server", "Router, Switch, Hub", "Backbone, WLAN, Core"],
    answer: 1,
    explanation: "The hierarchical structured network design model consists of access, distribution, and core layers."
  },
  {
    id: 9, chapter: 5,
    question: "Access layer typically contains...",
    options: ["Switches or routers", "Routers and firewalls", "Workstations, routers, cables", "Switches and access points", "All of the above"],
    answer: 3,
    explanation: "The access layer is where end devices connect, typically through edge switches and wireless access points."
  },
  {
    id: 22, chapter: 5,
    question: "Which circuits are the most common example of multipoint circuits?",
    options: ["Local Ethernet networks", "Backbone networks", "Most WANs", "Any IPv6 network", "Local wireless networks"],
    answer: 4,
    explanation: "A local wireless network uses a shared radio medium, making it a common multipoint circuit in which many devices access the same channel."
  },
  {
    id: 27, chapter: 5,
    question: "Which of the following is the most likely place to utilize TP cables?",
    options: ["Access layer circuits", "Server room", "Underwater cables", "Exterior cables to connect two buildings", "Distribution layer circuits"],
    answer: 0,
    explanation: "Twisted-pair copper is most common in the access layer for short runs from switches to workstations and other end devices."
  },
  {
    id: 29, chapter: 5,
    question: "The purpose of “CD” in CSMA/CD is...",
    options: ["To prevent interference with other devices by delaying the start of one’s transmission", "To correct and detect missing characters in the transmitted data", "To change the data rate according to current channel conditions", "Change the direction of a half-duplex link", "None of the above"],
    answer: 4,
    explanation: "CD stands for Collision Detection. Since none of choices A–D describes detecting a collision during Ethernet transmission, “None of the above” is correct."
  }
];

// Keep original stems while marking inferred/ambiguous study keys explicitly.
const sampleReferences = {4:'Lecture 1 slide 36; Lecture 3 slide 33',6:'Lecture 1 slide 26',7:'Lecture 1 slide 27',8:'Lecture 1 slide 28',9:'Lecture 1 slide 33',10:'Lecture 1 slide 34',14:'Lecture 2 slides 5–6',15:'Lecture 2 slide 7',17:'Textbook Ch. 2 (supplement; not developed in uploaded application slides)',18:'Lecture 2 slide 9',19:'Lecture 2 slide 8',20:'Lecture 2 slide 20',21:'Lecture 2 slide 9',28:'Lecture 2 slide 14',16:'Lecture 3 slide 11',22:'Lecture 3 slides 6–7',23:'Lecture 3 slides 12–13',24:'Lecture 3 slide 6',25:'Original sample; standard four-pair Ethernet cabling',26:'Lecture 3 slide 32',27:'Lecture 3 slides 10,17',29:'Lecture 3 slide 28'};
sampleQuestions.forEach(q => {
  if(q.chapter === 5) q.chapter = [8,9].includes(q.id) ? 1 : 3;
  q.source = `Original photo Q${q.id} · ${sampleReferences[q.id] || 'Lecture 4 slides 8–19'} · study key inferred`;
  if([11,19,23].includes(q.id)) q.warning = 'Original wording is ambiguous; see explanation.';
  if(q.id === 7) q.warning = 'The photo crops the question stem; this stem was reconstructed in the earlier site.';
});
sampleQuestions.sort((a,b)=>a.chapter-b.chapter || a.id-b.id);

const questionSets = {
  sample: {
    label: "Original Sample",
    description: "30 photo questions · reviewed study keys",
    badge: "OS",
    color: "#51d7ff",
    questions: sampleQuestions
  },
  setA: {
    label: "Practice Set A",
    description: "30 fresh questions · lecture-focused",
    badge: "A",
    color: "#9b8cff",
    questions: window.practiceSets.setA
  },
  setB: {
    label: "Practice Set B",
    description: "30 fresh questions · calculations & concepts",
    badge: "B",
    color: "#ff6680",
    questions: window.practiceSets.setB
  },
  setC: {label:"Practice Set C",description:"30 new questions · updated slides + LANs",badge:"C",color:"#ffcb67",questions:window.practiceSets.setC},
  drills: { label: "Lecture Drills", description: "60 focused questions · study by concept", badge: "LD", color: "#56dda0", questions: window.practiceSets.drills }
};

let selectedSet = "setC";
let questions = questionSets[selectedSet].questions;

const letters = ["A", "B", "C", "D", "E"];
const storageKey = "itec3210-midterm-progress-slides-v2";
let savedProgress = loadProgress();
let selectedChapter = "all";
let activeQuestions = [...questions];
let cardIndex = 0;
let testQuestions = [...activeQuestions];
let testIndex = 0;
let testScore = 0;
let testAnswers = [];
let testLocked = false;
let examMode = false;

const byId = (id) => document.getElementById(id);

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify(savedProgress)); } catch { /* Study remains usable when storage is unavailable. */ }
  renderMastery();
  renderQuestionMap();
}

function displayNumber(item) {
  return item.number ?? item.id;
}

function getChapter(id) {
  return chapters.find((chapter) => chapter.id === id);
}

function setChapter(chapterId) {
  if(chapterId !== 'all' && !questions.some(q=>q.chapter===Number(chapterId))) return;
  selectedChapter = chapterId;
  activeQuestions = chapterId === "all" ? [...questions] : questions.filter((question) => question.chapter === Number(chapterId));
  cardIndex = 0;
  const chapter = chapterId === "all" ? null : getChapter(Number(chapterId));
  byId("activeChapterLabel").textContent = chapter ? `${chapter.week} · ${chapter.title}` : `${questionSets[selectedSet].label} · All uploaded topics`;
  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.classList.toggle("active", String(button.dataset.chapter) === String(chapterId));
  });
  resetTest(activeQuestions);
  renderFlashcard();
  renderQuestionMap();
}

function setQuestionSet(setId) {
  selectedSet = setId;
  questions = questionSets[setId].questions;
  selectedChapter = "all";
  activeQuestions = [...questions];
  cardIndex = 0;
  document.querySelectorAll("[data-set]").forEach((button) => {
    button.classList.toggle("active", button.dataset.set === setId);
  });
  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.chapter === "all");
  });
  byId("activeChapterLabel").textContent = `${questionSets[setId].label} · All uploaded topics`;
  renderChapters();
  resetTest(activeQuestions);
  renderMastery();
  renderFlashcard();
  renderQuestionMap();
}

function renderSets() {
  byId("setGrid").innerHTML = Object.entries(questionSets).map(([id, set]) => `
    <button class="set-button ${id === selectedSet ? "active" : ""}" style="--set-color:${set.color}" type="button" data-set="${id}">
      <span class="set-badge">${set.badge}</span>
      <span class="set-copy"><strong>${set.label}</strong><span>${set.description}</span></span>
      <span class="set-count">${set.questions.length} Q</span>
    </button>
  `).join("");
  document.querySelectorAll("[data-set]").forEach((button) => {
    button.addEventListener("click", () => setQuestionSet(button.dataset.set));
  });
}

function renderChapters() {
  byId("chapterGrid").innerHTML = chapters.map((chapter) => {
    const count = questions.filter((question) => question.chapter === chapter.id).length;
    return `<button class="chapter-button" style="--chapter-color:${chapter.color}" type="button" data-chapter="${chapter.id}" ${count===0?'disabled aria-disabled="true"':''}>
      <span class="chapter-number">${chapter.week}</span>
      <span class="chapter-title">${chapter.title}</span>
      <span class="chapter-count">${count} questions</span>
    </button>`;
  }).join("");
  byId("allChapterButton").textContent = `Study all ${questions.length}`;

  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.onclick = () => setChapter(button.dataset.chapter);
  });
}

function renderMastery() {
  const known = questions.filter((question) => savedProgress[question.id] === "known").length;
  const percent = Math.round((known / questions.length) * 100);
  byId("masteredCount").textContent = known;
  byId("masteryTotal").textContent = questions.length;
  byId("masteryPercent").textContent = `${percent}%`;
  byId("progressRing").style.setProperty("--progress", percent);
  byId("miniBar").style.width = `${percent}%`;
}

function renderFlashcard() {
  const item = activeQuestions[cardIndex];
  const chapter = getChapter(item.chapter);
  byId("flashcard").classList.remove("flipped");
  byId("flashcard").setAttribute("aria-pressed", "false");
  byId("cardChapter").textContent = `${chapter.week} · ${chapter.short}`;
  byId("cardOriginalNumber").textContent = displayNumber(item);
  byId("cardPosition").textContent = cardIndex + 1;
  byId("cardTotal").textContent = activeQuestions.length;
  byId("flashQuestion").textContent = item.question;
  byId('flashOptions').replaceChildren();
  item.options.forEach((option,index) => {
    const span=document.createElement('span');
    span.textContent=`${letters[index]}. ${option}`;
    byId('flashOptions').appendChild(span);
  });
  byId("flashAnswerLetter").textContent = letters[item.answer];
  byId("flashAnswer").textContent = item.options[item.answer];
  byId("flashExplanation").textContent = item.explanation;
  byId("cardSource").textContent = item.source;
  byId("cardWarning").textContent = item.warning || '';
  byId("cardWarning").classList.toggle('hidden', !item.warning);
  byId("previousCard").disabled = activeQuestions.length < 2;
  byId("nextCard").disabled = activeQuestions.length < 2;
  const state = savedProgress[item.id];
  byId("learningButton").classList.toggle("selected", state === "learning");
  byId("knowButton").classList.toggle("selected", state === "known");
}

function moveCard(direction) {
  cardIndex = (cardIndex + direction + activeQuestions.length) % activeQuestions.length;
  renderFlashcard();
}

function markCard(state) {
  const item = activeQuestions[cardIndex];
  savedProgress[item.id] = state;
  saveProgress();
  renderFlashcard();
  window.setTimeout(() => moveCard(1), 180);
}

function renderQuestionMap() {
  const visible = selectedChapter === "all" ? questions : activeQuestions;
  byId("questionMap").innerHTML = visible.map((item, index) => {
    const state = savedProgress[item.id] || "";
    return `<button type="button" class="map-button ${state}" data-map-index="${index}" aria-label="Go to question ${displayNumber(item)}">${displayNumber(item)}</button>`;
  }).join("");
  document.querySelectorAll("[data-map-index]").forEach((button) => {
    button.addEventListener("click", () => {
      cardIndex = Number(button.dataset.mapIndex);
      setMode("flashcards");
      renderFlashcard();
      byId("studyHeading").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setMode(mode) {
  const isFlashcards = mode === "flashcards";
  byId("flashcardView").classList.toggle("hidden", !isFlashcards);
  byId("testView").classList.toggle("hidden", isFlashcards);
  document.querySelectorAll("[data-mode]").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function resetTest(source = activeQuestions) {
  testQuestions = [...source];
  testIndex = 0;
  testScore = 0;
  testAnswers = [];
  testLocked = false;
  byId("liveScore").textContent = "0";
  byId("resultsScreen").classList.add("hidden");
  byId("testQuestionScreen").classList.remove("hidden");
  renderTestQuestion();
}

function renderTestQuestion() {
  if (!testQuestions.length) return;
  const item = testQuestions[testIndex];
  const chapter = getChapter(item.chapter);
  testLocked = false;
  byId("testChapter").textContent = `${chapter.week} · ${chapter.short}`;
  byId("testPosition").textContent = testIndex + 1;
  byId("testTotal").textContent = testQuestions.length;
  byId("testOriginalNumber").textContent = displayNumber(item);
  byId("testQuestion").textContent = item.question;
  byId("testSource").textContent = item.source;
  byId("testWarning").textContent = item.warning || '';
  byId("testWarning").classList.toggle('hidden', !item.warning);
  byId("testProgressBar").style.width = `${(testIndex / testQuestions.length) * 100}%`;
  byId("testFeedback").classList.add("hidden");
  byId("nextQuestion").classList.add("hidden");
  byId("optionsList").innerHTML = item.options.map((option, index) => `
    <button class="option-button" type="button" data-answer="${index}">
      <span class="option-letter">${letters[index]}</span>
      <span>${option}</span>
    </button>
  `).join("");
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer)));
  });
}

function chooseAnswer(choice) {
  if (testLocked) return;
  testLocked = true;
  const item = testQuestions[testIndex];
  const isCorrect = choice === item.answer;
  if (isCorrect) testScore += 1;
  testAnswers.push({ id: item.id, choice, correct: isCorrect });
  byId("liveScore").textContent = examMode ? '—' : testScore;

  document.querySelectorAll("[data-answer]").forEach((button) => {
    const value = Number(button.dataset.answer);
    button.disabled = true;
    if (!examMode && value === item.answer) button.classList.add("correct");
    if (!examMode && value === choice && !isCorrect) button.classList.add("incorrect");
    if (examMode && value === choice) button.classList.add('chosen');
  });

  byId("feedbackTitle").textContent = isCorrect ? "Correct" : `Not quite — the answer is ${letters[item.answer]}`;
  byId("feedbackTitle").style.color = isCorrect ? "var(--green)" : "var(--red-bright)";
  byId("feedbackExplanation").textContent = item.explanation;
  byId("testFeedback").classList.toggle("hidden", examMode);
  byId("nextQuestion").textContent = testIndex === testQuestions.length - 1 ? "See results →" : "Next question →";
  byId("nextQuestion").classList.remove("hidden");
}

function advanceTest() {
  if (testIndex < testQuestions.length - 1) {
    testIndex += 1;
    renderTestQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const total = testQuestions.length;
  const percent = Math.round((testScore / total) * 100);
  const missed = testAnswers.filter((answer) => !answer.correct).length;
  byId("testQuestionScreen").classList.add("hidden");
  byId("resultsScreen").classList.remove("hidden");
  byId("finalScore").textContent = testScore;
  byId("finalTotal").textContent = total;
  byId("resultHeadline").textContent = percent >= 85 ? "Network locked in." : percent >= 70 ? "Solid connection." : "Time for another pass.";
  byId("resultMessage").textContent = missed === 0 ? "Perfect score. Every question in this session was correct." : `You missed ${missed} ${missed === 1 ? "question" : "questions"}. Review those cards, then run them again.`;
  byId("retryMissed").classList.toggle("hidden", missed === 0);
  const review = byId('answerReview');
  review.replaceChildren();
  testAnswers.forEach(a => {
    const q = testQuestions.find(q=>q.id === a.id);
    const detail = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `${a.correct ? '✓' : '✕'} Q${displayNumber(q)} · ${q.question}`;
    detail.appendChild(summary);
    for (const text of [`Your answer: ${letters[a.choice]}. ${q.options[a.choice]}`, `Study answer: ${letters[q.answer]}. ${q.options[q.answer]}`, q.explanation, q.source]) {
      const p = document.createElement('p'); p.textContent = text; detail.appendChild(p);
    }
    review.appendChild(detail);
  });
}

function retryMissed() {
  const missedIds = testAnswers.filter((answer) => !answer.correct).map((answer) => answer.id);
  resetTest(testQuestions.filter((question) => missedIds.includes(question.id)));
}

function wireEvents() {
  byId('feedbackMode').addEventListener('change', e => { examMode = e.target.value === 'exam'; resetTest(activeQuestions); });
  byId('shuffleTest').addEventListener('click', () => {
    const shuffled = [...activeQuestions];
    for(let i=shuffled.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]]; }
    resetTest(shuffled); setMode('test');
  });
  byId("flashcard").addEventListener("click", () => {
    const flipped = byId("flashcard").classList.toggle("flipped");
    byId("flashcard").setAttribute("aria-pressed", String(flipped));
  });
  byId("previousCard").addEventListener("click", () => moveCard(-1));
  byId("nextCard").addEventListener("click", () => moveCard(1));
  byId("learningButton").addEventListener("click", () => markCard("learning"));
  byId("knowButton").addEventListener("click", () => markCard("known"));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  byId("nextQuestion").addEventListener("click", advanceTest);
  byId("retryMissed").addEventListener("click", retryMissed);
  byId("restartTest").addEventListener("click", () => resetTest(activeQuestions));

  const dialog = byId("resetDialog");
  byId("resetButton").addEventListener("click", () => dialog.showModal());
  byId("cancelReset").addEventListener("click", () => dialog.close());
  byId("confirmReset").addEventListener("click", () => {
    savedProgress = {};
    try { localStorage.removeItem(storageKey); } catch { /* Storage may be disabled. */ }
    resetTest(activeQuestions);
    renderMastery();
    renderQuestionMap();
    renderFlashcard();
    dialog.close();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("keydown", (event) => {
    if (byId('practiceLibrary').classList.contains('hidden') || byId("flashcardView").classList.contains("hidden") || dialog.open || ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (event.code === "Space") {
      event.preventDefault();
      byId("flashcard").click();
    } else if (event.key === "ArrowLeft") {
      moveCard(-1);
    } else if (event.key === "ArrowRight") {
      moveCard(1);
    } else if (event.key === "1") {
      markCard("learning");
    } else if (event.key === "2") {
      markCard("known");
    }
  });
}

renderSets();
renderChapters();
renderMastery();
renderQuestionMap();
renderFlashcard();
resetTest();
wireEvents();
