/* Original questions grounded in the supplied 20-page guide; not an official exam key. */
window.studyGuideSets = [
  {
    "unit": 1,
    "chapter": 1,
    "title": "Foundations & design goals",
    "pages": "2–3",
    "questions": [
      {
        "id": "sg1-01",
        "number": 1,
        "question": "A network is redesigned so users complete requests more quickly. Which technical goal is most directly demonstrated?",
        "options": [
          "Performance",
          "Availability",
          "Physical topology",
          "Affordability",
          "Authentication"
        ],
        "answer": 0,
        "explanation": "Performance concerns response time and useful throughput. A faster response alone does not establish failure tolerance.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-02",
        "number": 2,
        "question": "Which change most directly supports availability after a link failure?",
        "options": [
          "A higher advertised speed on the only link",
          "A working backup path with failover",
          "More layers in the protocol stack",
          "A new naming convention",
          "Longer application messages"
        ],
        "answer": 1,
        "explanation": "Availability requires the service to remain operational; a usable backup path addresses failure.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-03",
        "number": 3,
        "question": "A department can add users without unacceptable deterioration in service. This is evidence of…",
        "options": [
          "Encapsulation",
          "Simplex communication",
          "Scalability",
          "MAC filtering",
          "Modulation"
        ],
        "answer": 2,
        "explanation": "Scalability is the ability to accommodate growth while maintaining acceptable service.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-04",
        "number": 4,
        "question": "In the guide’s structured-design model, which layer connects printers and workstations into a LAN?",
        "options": [
          "Transport",
          "Presentation",
          "Network",
          "Core",
          "Access"
        ],
        "answer": 4,
        "explanation": "The access layer connects endpoints, mainly through switches and possibly APs.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-05",
        "number": 5,
        "question": "Four departmental LANs occupy one building. Which structured-design role interconnects those LANs?",
        "options": [
          "Distribution",
          "Transport",
          "Application",
          "Campus core required solely by the number of departments",
          "Physical"
        ],
        "answer": 0,
        "explanation": "Distribution interconnects LANs within a building. Several departments alone do not require the campus core.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-06",
        "number": 6,
        "question": "The course’s campus core primarily interconnects…",
        "options": [
          "Individual bits inside a cable",
          "Only printers within one room",
          "Processes by port number",
          "User-interface components",
          "Building backbones across adjacent buildings"
        ],
        "answer": 4,
        "explanation": "The core connects building backbones in the campus-style model used by the lecture.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-07",
        "number": 7,
        "question": "What is the direct organizational benefit of structured network design?",
        "options": [
          "Automatic zero downtime",
          "Identical link speeds everywhere",
          "A modular hierarchy that simplifies design and management",
          "Guaranteed unlimited user capacity",
          "Elimination of all protocol overhead"
        ],
        "answer": 2,
        "explanation": "A clear hierarchy aids design, maintenance and expansion. Technical improvements still require specific mechanisms.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-08",
        "number": 8,
        "question": "A company gives invited suppliers controlled access to internal information. This is an example of…",
        "options": [
          "An extranet",
          "A collision domain by definition",
          "An intranet restricted entirely to insiders",
          "A transport segment",
          "A physical backbone cable"
        ],
        "answer": 0,
        "explanation": "An extranet extends controlled access to selected outsiders; an intranet serves authorized insiders.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-09",
        "number": 9,
        "question": "Which network scope normally spans large distances and often uses carrier or leased circuits?",
        "options": [
          "A presentation interface",
          "WAN",
          "A computer’s internal bus",
          "A single access LAN",
          "A transport-layer port"
        ],
        "answer": 1,
        "explanation": "The guide associates WANs with broad geographic scope and carrier circuits.",
        "page": 2,
        "source": "Midterm Study Guide · p. 2"
      },
      {
        "id": "sg1-10",
        "number": 10,
        "question": "HTTP, SMTP and DNS are recognized at which Internet-model layer?",
        "options": [
          "Network",
          "Transport",
          "Data link",
          "Application",
          "Physical"
        ],
        "answer": 3,
        "explanation": "These are services used by applications, rather than link signaling or IP routing.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-11",
        "number": 11,
        "question": "Which pairing is correct?",
        "options": [
          "Network — Ethernet FCS only",
          "Application — cable connectors",
          "Data link — TCP connection setup",
          "Transport — TCP segments and application port numbers",
          "Physical — DNS names"
        ],
        "answer": 3,
        "explanation": "Transport provides end-to-end process communication; TCP segments and ports belong there.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-12",
        "number": 12,
        "question": "Which layer uses IP addresses to support routing?",
        "options": [
          "Presentation",
          "Physical",
          "Data link",
          "Network",
          "Application"
        ],
        "answer": 3,
        "explanation": "IP provides logical addressing and routing at the network layer.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-13",
        "number": 13,
        "question": "Ethernet framing, local delivery and MAC addresses belong primarily to…",
        "options": [
          "Physical signaling only",
          "Data link",
          "Application",
          "Session",
          "Transport"
        ],
        "answer": 1,
        "explanation": "Data link organizes local delivery into frames and uses MAC addressing.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-14",
        "number": 14,
        "question": "A specification describes electrical signals and connectors. Which layer does it primarily concern?",
        "options": [
          "Presentation",
          "Application",
          "Physical",
          "Network",
          "Transport"
        ],
        "answer": 2,
        "explanation": "The physical layer represents and transmits bits through a medium.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-15",
        "number": 15,
        "question": "Communication between adjacent protocol layers inside one computer is called…",
        "options": [
          "Dynamic routing",
          "Full-duplex signaling",
          "Horizontal peer communication",
          "Vertical communication",
          "Multipoint access"
        ],
        "answer": 3,
        "explanation": "Vertical communication links adjacent layers in a system; horizontal communication describes corresponding peer layers.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-16",
        "number": 16,
        "question": "The logical relationship between corresponding layers on separate systems is…",
        "options": [
          "Client-side storage",
          "Horizontal communication",
          "A campus distribution layer",
          "Vertical communication",
          "Attenuation"
        ],
        "answer": 1,
        "explanation": "Horizontal relationships connect peer protocol layers conceptually across systems.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-17",
        "number": 17,
        "question": "What happens during encapsulation as application data moves down the stack?",
        "options": [
          "The payload must become smaller at every layer",
          "All overhead disappears",
          "Every layer removes all lower-layer information",
          "IP becomes a physical connector",
          "Layers add their relevant control information"
        ],
        "answer": 4,
        "explanation": "Encapsulation adds layer-specific control information; receiving layers interpret and remove it on the way up.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-18",
        "number": 18,
        "question": "Which statement about protocol layering is supported by the guide?",
        "options": [
          "It removes the need for protocols",
          "It always makes communication faster",
          "It aids modular replacement but adds overhead and processing",
          "It guarantees that large packets have no headers",
          "It prevents incompatible interfaces"
        ],
        "answer": 2,
        "explanation": "Layering supports modularity when interfaces remain compatible, at the cost of control bytes and processing.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-19",
        "number": 19,
        "question": "Why is the word “datagram” insufficient by itself to identify a layer?",
        "options": [
          "It is another name for a connector",
          "It always means a TCP segment",
          "It refers only to a physical signal",
          "It identifies only the access design layer",
          "It can refer to UDP at transport or IP at network"
        ],
        "answer": 4,
        "explanation": "Identify the named protocol before assigning a layer to a datagram.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      },
      {
        "id": "sg1-20",
        "number": 20,
        "question": "In the simplified forwarding model, which layers does a router process to forward user traffic?",
        "options": [
          "Physical, data link and network",
          "All end-to-end application functions for every packet",
          "Only the physical layer",
          "Only application and presentation",
          "Only transport and application"
        ],
        "answer": 0,
        "explanation": "Router forwarding uses the lower three layers. Routers can separately run their own management applications.",
        "page": 3,
        "source": "Midterm Study Guide · p. 3"
      }
    ]
  },
  {
    "unit": 2,
    "chapter": 2,
    "title": "Application architectures",
    "pages": "4–5",
    "questions": [
      {
        "id": "sg2-01",
        "number": 1,
        "question": "Which activity most clearly represents transaction processing in the guide?",
        "options": [
          "Recording a customer’s order and updating inventory",
          "Measuring wireless signal strength",
          "Displaying a live video conversation",
          "Repeating electrical signals",
          "Streaming an online radio station"
        ],
        "answer": 0,
        "explanation": "A TPS processes business events and updates records; the lecture separates it from media-delivery applications.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-02",
        "number": 2,
        "question": "Which function forms or performs queries to obtain a required subset of stored data?",
        "options": [
          "Presentation logic",
          "Physical signaling",
          "Data access logic",
          "Collision detection",
          "Channel assignment"
        ],
        "answer": 2,
        "explanation": "Data access logic handles queries. Data storage and application business rules are distinct functions.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-03",
        "number": 3,
        "question": "Validating business rules for an order is primarily…",
        "options": [
          "Data storage alone",
          "Application logic",
          "Circuit sharing",
          "MAC forwarding",
          "Presentation logic"
        ],
        "answer": 1,
        "explanation": "Application logic performs the business work of the application.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-04",
        "number": 4,
        "question": "Which TPS function handles the user interface?",
        "options": [
          "Services logic",
          "Routing logic",
          "Data access logic",
          "Collision avoidance",
          "Presentation logic"
        ],
        "answer": 4,
        "explanation": "Presentation logic controls the interface through which users interact.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-05",
        "number": 5,
        "question": "An application automatically invokes another application’s capabilities. Which function describes this?",
        "options": [
          "Host addressing",
          "Services logic",
          "Presentation logic",
          "Coaxial shielding",
          "Storage capacity"
        ],
        "answer": 1,
        "explanation": "Services logic supports automated application-to-application access.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-06",
        "number": 6,
        "question": "Which allocation matches the guide’s host-based architecture?",
        "options": [
          "Only the client performs services logic",
          "The server stores data while clients perform every query",
          "A router replaces application processing",
          "The host performs all five application functions",
          "Each peer always stores all shared files"
        ],
        "answer": 3,
        "explanation": "Host-based processing concentrates the functions at the host, with terminals exchanging interaction messages.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-07",
        "number": 7,
        "question": "Which is a concern with host-based processing identified in the guide?",
        "options": [
          "It eliminates central dependence",
          "It cannot process transactions at all",
          "Central processing can become a bottleneck and upgrades can be costly",
          "Every user requires a separate database server",
          "It always uses wireless links"
        ],
        "answer": 2,
        "explanation": "Concentrated processing can constrain capacity; large incremental upgrades can be expensive.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-08",
        "number": 8,
        "question": "In the lecture’s client-based model, what remains on the server?",
        "options": [
          "Data storage",
          "All application logic and services",
          "All presentation logic",
          "Only the graphical interface",
          "All querying and business rules"
        ],
        "answer": 0,
        "explanation": "The server stores data, while clients perform access, application and presentation work in this model.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-09",
        "number": 9,
        "question": "Why can client-based database applications create excessive circuit traffic?",
        "options": [
          "Every query is implemented in a switch",
          "Clients never need stored data",
          "Presentation logic must be on the server",
          "Data crosses the network so clients can perform queries",
          "The server always sends only a filtered result"
        ],
        "answer": 3,
        "explanation": "Client-side data access requires moving data to the client rather than filtering it at the server.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-10",
        "number": 10,
        "question": "Which change can reduce unnecessary data movement compared with client-based querying?",
        "options": [
          "Remove the server’s filtering function",
          "Require all clients to download the full database",
          "Move all query processing to every desktop",
          "Perform data access at the server and return needed results",
          "Replace all database queries with broadcast frames"
        ],
        "answer": 3,
        "explanation": "Server-side queries can select the required subset before sending it across the network.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-11",
        "number": 11,
        "question": "In the guide’s client-server model, application logic…",
        "options": [
          "Must always run only on a printer",
          "Must always be absent",
          "Must always run in an Ethernet hub",
          "May run at the client, server or be split",
          "Is identical to data storage"
        ],
        "answer": 3,
        "explanation": "Client-server permits different placements of application logic while presentation remains with the client.",
        "page": 4,
        "source": "Midterm Study Guide · p. 4"
      },
      {
        "id": "sg2-12",
        "number": 12,
        "question": "Which three-tier allocation is correct?",
        "options": [
          "Switch: business logic; AP: queries; client: routing",
          "Client: all storage; database server: only display",
          "Client: presentation; application server: business/services logic; database server: storage/access",
          "Client: no interface; database server: all presentation",
          "All three tiers must perform identical functions"
        ],
        "answer": 2,
        "explanation": "The three-tier model separates presentation, application/services work, and database storage/access.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-13",
        "number": 13,
        "question": "What is a reasonable trade-off of adding functional tiers?",
        "options": [
          "No component needs maintenance",
          "All network traffic disappears",
          "Load can be distributed, but communication and complexity increase",
          "The database can no longer store information",
          "Availability is automatically perfect"
        ],
        "answer": 2,
        "explanation": "More tiers can support growth and work distribution while adding coordination and communications costs.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-14",
        "number": 14,
        "question": "A thin client is best described as a client with…",
        "options": [
          "Little or no local application logic",
          "A physically narrow case",
          "A mandatory wireless interface",
          "All database storage and queries locally",
          "No presentation function under any circumstances"
        ],
        "answer": 0,
        "explanation": "Thin/thick describes where application work runs, rather than physical device size.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-15",
        "number": 15,
        "question": "Which statement is most consistent with a thick client?",
        "options": [
          "It cannot run personal computing applications",
          "Most or all application logic runs locally",
          "Only the database server presents the interface",
          "Its Ethernet cable must be thicker",
          "All work must run on a remote host"
        ],
        "answer": 1,
        "explanation": "Thick clients perform much of the application work locally.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-16",
        "number": 16,
        "question": "What role does middleware serve in the guide?",
        "options": [
          "Assigning Ethernet collision domains",
          "Converting light to radio without interfaces",
          "Increasing cable length without equipment",
          "Replacing every database",
          "Translating between software systems and managing messages"
        ],
        "answer": 4,
        "explanation": "Middleware mediates communication between applications and can hide some system changes.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-17",
        "number": 17,
        "question": "A provider supplies a complete application and its supporting platform. Which cloud model is this?",
        "options": [
          "IaaS",
          "SaaS",
          "Physical-layer multiplexing",
          "PaaS",
          "Client-based file storage by definition"
        ],
        "answer": 1,
        "explanation": "SaaS supplies the application as a service, together with supporting hardware/software.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-18",
        "number": 18,
        "question": "A customer develops its own application using provider-supplied tools, OS/DBMS and hardware. This is…",
        "options": [
          "PaaS",
          "IaaS hardware only",
          "Host-based terminals by definition",
          "SaaS",
          "CSMA/CD"
        ],
        "answer": 0,
        "explanation": "PaaS supplies the development platform while the customer retains application development and ownership.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-19",
        "number": 19,
        "question": "Which responsibility remains with the customer in the guide’s IaaS model?",
        "options": [
          "Maintaining only a finished application’s user settings",
          "Manufacturing all provider hardware",
          "Eliminating the operating system entirely",
          "Replacing all cloud networking personally",
          "Application and other software responsibilities"
        ],
        "answer": 4,
        "explanation": "IaaS supplies infrastructure; the customer retains software responsibilities in the lecture model.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      },
      {
        "id": "sg2-20",
        "number": 20,
        "question": "Which architecture recommendation is most defensible?",
        "options": [
          "Select the cloud label without discussing responsibilities",
          "Assume client-server guarantees unlimited capacity",
          "Declare that more tiers eliminate all failures",
          "Treat the two-tier under-50-users rule as an absolute law",
          "Explain work placement, capacity mechanisms and actual failure arrangements"
        ],
        "answer": 4,
        "explanation": "The guide treats user thresholds as rules of thumb and requires a mechanism for each claimed technical benefit.",
        "page": 5,
        "source": "Midterm Study Guide · p. 5"
      }
    ]
  },
  {
    "unit": 3,
    "chapter": 3,
    "title": "Physical layer & media",
    "pages": "6–7",
    "questions": [
      {
        "id": "sg3-01",
        "number": 1,
        "question": "A link carries information in one direction only. Its data flow is…",
        "options": [
          "Simplex",
          "Half-duplex",
          "Full-duplex",
          "Multipoint by definition",
          "Parallel by definition"
        ],
        "answer": 0,
        "explanation": "Simplex describes one-way data flow, independently of sharing or serial/parallel transmission.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-02",
        "number": 2,
        "question": "Two radios can both send, but must take turns. Which direction model applies?",
        "options": [
          "Point-to-point by definition",
          "Simplex",
          "Full-duplex",
          "Serial only",
          "Half-duplex"
        ],
        "answer": 4,
        "explanation": "Half-duplex permits both directions but not simultaneously.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-03",
        "number": 3,
        "question": "A dedicated switched Ethernet link supports simultaneous sending and receiving. This is…",
        "options": [
          "Half-duplex",
          "Multipoint only",
          "Analog modulation only",
          "Simplex",
          "Full-duplex"
        ],
        "answer": 4,
        "explanation": "Full-duplex permits simultaneous two-way communication.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-04",
        "number": 4,
        "question": "A dedicated logical link joins exactly two endpoints. This is…",
        "options": [
          "A WAN by definition",
          "Point-to-point",
          "Parallel by definition",
          "Multipoint",
          "Simplex by definition"
        ],
        "answer": 1,
        "explanation": "Point-to-point describes the participants sharing the logical connection, not its direction.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-05",
        "number": 5,
        "question": "Several devices share one AP radio medium. Which circuit-sharing description fits?",
        "options": [
          "Point-to-point exclusively",
          "Parallel cabling",
          "Multipoint",
          "A dedicated full-duplex link per client",
          "Simplex exclusively"
        ],
        "answer": 2,
        "explanation": "Multiple devices share the radio medium and need access coordination.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-06",
        "number": 6,
        "question": "What primarily reduces interference in unshielded twisted-pair cable?",
        "options": [
          "Twisting the insulated conductor pairs",
          "A coaxial central shield",
          "An optical core",
          "Removing all insulation",
          "Making every conductor a separate broadcast channel"
        ],
        "answer": 0,
        "explanation": "Twisting helps reduce interference; STP additionally includes shielding.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-07",
        "number": 7,
        "question": "Compared with UTP, STP adds…",
        "options": [
          "Shielding",
          "A light source instead of copper",
          "A guaranteed unlimited reach",
          "A built-in router",
          "Only two conductors in every Ethernet cable"
        ],
        "answer": 0,
        "explanation": "Shielded twisted pair adds shielding to the twisted copper-pair structure.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-08",
        "number": 8,
        "question": "Which construction describes coaxial cable?",
        "options": [
          "Eight uninsulated parallel conductors",
          "A wireless channel with no cable",
          "A central conductor surrounded by shielding",
          "Four optical cores twisted without shielding",
          "Only a glass core and radio antenna"
        ],
        "answer": 2,
        "explanation": "The surrounding shield helps reduce interference in coaxial cable.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-09",
        "number": 9,
        "question": "A conventional four-pair Ethernet cable contains how many individual conductors?",
        "options": [
          "6",
          "16",
          "4",
          "8",
          "2"
        ],
        "answer": 3,
        "explanation": "Four pairs contain two conductors each: 4 × 2 = 8.",
        "page": 6,
        "source": "Midterm Study Guide · p. 6"
      },
      {
        "id": "sg3-10",
        "number": 10,
        "question": "Which medium is generally appropriate for an inexpensive fixed desktop run of 60 m?",
        "options": [
          "Coax because twisting cannot reduce interference",
          "Compatible twisted-pair Ethernet cabling",
          "Single-mode fiber as the only possible choice",
          "An unsupported 300 m copper channel",
          "A line-of-sight microwave installation as the default"
        ],
        "answer": 1,
        "explanation": "The guide recommends twisted pair for short access runs within supported channel distances, typically 100 m.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-11",
        "number": 11,
        "question": "A long route passes strong electrical interference. Which medium most directly addresses both constraints?",
        "options": [
          "A passive patch cord used as a repeater",
          "Ordinary UTP regardless of distance",
          "Any cable labeled fast, regardless of compatibility",
          "Coax without checking its supported reach",
          "Fiber with suitable optical interfaces and reach"
        ],
        "answer": 4,
        "explanation": "Fiber resists electromagnetic interference and can support long spans with suitable optics.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-12",
        "number": 12,
        "question": "Why might a WLAN overlay suit staff who move throughout a building?",
        "options": [
          "It guarantees dedicated full-duplex airtime per user",
          "It supports mobility while still requiring capacity and security planning",
          "It makes wired backhaul irrelevant",
          "It eliminates the need for a site survey",
          "It removes all interference concerns"
        ],
        "answer": 1,
        "explanation": "Mobility is a benefit; shared airtime, interference, security and backhaul remain design concerns.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-13",
        "number": 13,
        "question": "Which condition is especially relevant to planning a microwave path?",
        "options": [
          "Line of sight and possible obstruction/weather effects",
          "The number of copper pairs in an RJ45 cable",
          "A requirement for zero antennas",
          "The IPv4 class alone",
          "Whether a TCP port is public"
        ],
        "answer": 0,
        "explanation": "Microwave planning must consider antennas, obstructions, weather and path geometry.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-14",
        "number": 14,
        "question": "How should the guide’s approximate fiber-distance comparisons be used?",
        "options": [
          "As evidence that fiber never needs compatible connectors",
          "As universal distances for every fiber product",
          "As proof all fiber types support identical spans",
          "As course comparisons, with actual reach checked against the optics and standard",
          "As a guarantee that any optic reaches 100 km"
        ],
        "answer": 3,
        "explanation": "Reach depends on fiber type, standard and transceivers; the course figures are not universal product ratings.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-15",
        "number": 15,
        "question": "Which ordering matches the course’s approximate fiber-reach comparison from shorter to longer?",
        "options": [
          "Single-mode, graded-index multimode, multimode",
          "Coax, radio, twisted pair",
          "Graded-index multimode, single-mode, multimode",
          "All fiber types always have identical reach",
          "Multimode, graded-index multimode, single-mode"
        ],
        "answer": 4,
        "explanation": "The guide lists roughly 500 m, 1 km and 100 km or more respectively, subject to equipment-specific limits.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-16",
        "number": 16,
        "question": "Digital computer data must traverse an analog circuit. What conversion equipment does the guide identify?",
        "options": [
          "DNS servers only",
          "Modems at the ends",
          "Passive patch panels only",
          "Ethernet hubs as universal analog converters",
          "Codecs used only to digitize voice"
        ],
        "answer": 1,
        "explanation": "A modem modulates digital data for analog transmission and recovers it at the other end.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-17",
        "number": 17,
        "question": "Analog voice must be carried over a digital network. Which component performs the relevant conversion?",
        "options": [
          "A coaxial shield",
          "A DHCP lease",
          "A codec",
          "An ARP cache",
          "A routing metric"
        ],
        "answer": 2,
        "explanation": "A codec digitizes voice and converts received digital voice back for listening.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-18",
        "number": 18,
        "question": "Which statement describes serial transmission?",
        "options": [
          "Multiple parallel channels must each carry a bit at once",
          "Every device must share one AP",
          "Only one direction is ever possible",
          "Bits are sent sequentially on a serial channel",
          "Both directions must operate simultaneously"
        ],
        "answer": 3,
        "explanation": "Serial/parallel concerns how bits travel across channels, separately from direction or sharing.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-19",
        "number": 19,
        "question": "What distinguishes parallel transmission from simplex/duplex terminology?",
        "options": [
          "Simplex/duplex specifies the number of conductors",
          "The terms always mean the same thing",
          "Parallel concerns multiple channels together; simplex/duplex concerns direction",
          "Parallel means two-way simultaneous communication only",
          "Parallel means every link is a WAN"
        ],
        "answer": 2,
        "explanation": "Keep bit-channel arrangement separate from direction and circuit sharing.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      },
      {
        "id": "sg3-20",
        "number": 20,
        "question": "A fast NIC is connected using incompatible media and interfaces. What follows?",
        "options": [
          "The cable length no longer matters",
          "It automatically negotiates any medium into fiber",
          "The IP address resolves the physical incompatibility",
          "Its advertised speed alone cannot make the link compatible",
          "A cloud service removes the interface requirement"
        ],
        "answer": 3,
        "explanation": "Check media, interfaces, connectors, rate and reach together before recommending equipment.",
        "page": 7,
        "source": "Midterm Study Guide · p. 7"
      }
    ]
  },
  {
    "unit": 4,
    "chapter": 4,
    "title": "Data link & efficiency",
    "pages": "8–9",
    "questions": [
      {
        "id": "sg4-01",
        "number": 1,
        "question": "Which access approach generally has less coordination overhead when a shared medium is lightly loaded?",
        "options": [
          "DNS resolution",
          "Static routing",
          "Contention",
          "Mandatory central polling in every case",
          "Data storage"
        ],
        "answer": 2,
        "explanation": "Contention avoids central permission overhead at light load, although collisions and retries can grow with load.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-02",
        "number": 2,
        "question": "Why can controlled access be attractive under heavy shared-medium load?",
        "options": [
          "It repairs every damaged bit",
          "It converts every frame into a TCP connection",
          "Coordinated turns can reduce the cost of contention",
          "It removes all control overhead",
          "It eliminates the need for a medium"
        ],
        "answer": 2,
        "explanation": "Controlled access adds coordination overhead but can reduce costly contention at high traffic levels.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-03",
        "number": 3,
        "question": "What does Carrier Sense mean in CSMA/CD?",
        "options": [
          "Listen to the medium before transmitting",
          "Repair errors after receiving",
          "Wait for a DNS reply",
          "Encrypt every frame",
          "Assign an IP address"
        ],
        "answer": 0,
        "explanation": "Carrier sensing checks whether the shared medium is busy before transmission.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-04",
        "number": 4,
        "question": "What is the purpose of CD in CSMA/CD?",
        "options": [
          "Choose a faster link rate automatically",
          "Detect collisions while transmitting and stop/retry",
          "Assign the direction of a half-duplex cable",
          "Prevent collisions solely by encrypting",
          "Correct all damaged characters"
        ],
        "answer": 1,
        "explanation": "Collision detection identifies a collision during transmission, followed by stopping and a later retry.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-05",
        "number": 5,
        "question": "After detecting a collision on a shared Ethernet medium, stations should…",
        "options": [
          "Treat the corrupted bits as corrected",
          "Replace their IP addresses immediately",
          "Stop and retry after a waiting interval",
          "Disable all protocol headers",
          "Continue sending the same collided frame indefinitely"
        ],
        "answer": 2,
        "explanation": "Waiting before retrying helps avoid repeated simultaneous retransmission.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-06",
        "number": 6,
        "question": "Which connection does not require shared-medium collision arbitration on that link?",
        "options": [
          "A shared half-duplex hub segment",
          "A multipoint shared bus",
          "A common radio channel used by multiple clients",
          "A hub collision domain",
          "A dedicated full-duplex switched link"
        ],
        "answer": 4,
        "explanation": "Dedicated full-duplex links do not have the shared half-duplex collision behavior described for hubs.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-07",
        "number": 7,
        "question": "In the guide, error control includes…",
        "options": [
          "Presentation and storage only",
          "Address allocation only",
          "Encryption only",
          "Detection only",
          "Prevention, detection and correction"
        ],
        "answer": 4,
        "explanation": "Error detection is one component of the broader error-control process.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-08",
        "number": 8,
        "question": "Which response most directly helps prevent physical transmission errors?",
        "options": [
          "Treating CRC as encryption",
          "Changing DNS names",
          "Removing the FCS",
          "Suitable shielding, cable placement and sound connections",
          "Increasing business transactions"
        ],
        "answer": 3,
        "explanation": "The guide lists physical precautions that address sources such as noise and crosstalk.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-09",
        "number": 9,
        "question": "CRC-32 primarily provides…",
        "options": [
          "IP address leasing",
          "Error detection",
          "Application authentication",
          "Automatic reconstruction of damaged payload bits",
          "Guaranteed ordered delivery"
        ],
        "answer": 1,
        "explanation": "CRC checks for corruption; it does not repair the damaged payload.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-10",
        "number": 10,
        "question": "An Ethernet receiver detects a bad frame. Which sequence matches the guide?",
        "options": [
          "CRC repairs it and UDP guarantees delivery",
          "Every IP address must be reassigned",
          "The receiver accepts it because FCS is only a label",
          "Ethernet discards it; TCP may recover missing data by retransmission",
          "Ethernet converts it into a DNS query"
        ],
        "answer": 3,
        "explanation": "Link-layer detection/discard and reliable transport recovery are distinct jobs. UDP itself offers no recovery guarantee.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-11",
        "number": 11,
        "question": "A frame passes its CRC check. What is the strongest justified conclusion?",
        "options": [
          "The application has processed the payload",
          "The frame must contain no overhead",
          "Every mathematically possible error has been ruled out",
          "No corruption was detected by that check",
          "The sender’s identity is authenticated"
        ],
        "answer": 3,
        "explanation": "A passing CRC does not make undetected errors impossible or provide authentication.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-12",
        "number": 12,
        "question": "Relative to application payload, Ethernet MAC addresses and FCS are…",
        "options": [
          "Overhead",
          "The complete TCP application",
          "Always useful user bytes",
          "Physical conductors",
          "Host bits in a subnet"
        ],
        "answer": 0,
        "explanation": "Link addressing and control fields consume transmitted bytes beyond useful application data.",
        "page": 8,
        "source": "Midterm Study Guide · p. 8"
      },
      {
        "id": "sg4-13",
        "number": 13,
        "question": "A message contains 240 useful bytes and 60 overhead bytes. What is its efficiency?",
        "options": [
          "75%",
          "80%",
          "400%",
          "25%",
          "60%"
        ],
        "answer": 1,
        "explanation": "Efficiency = 240 / (240 + 60) × 100 = 80%. Divide by the total transmission.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-14",
        "number": 14,
        "question": "A transmission has 200 user bytes, 20 TCP bytes, 20 IP bytes and 10 link-overhead bytes. What total is the denominator?",
        "options": [
          "150 bytes",
          "200 bytes",
          "50 bytes",
          "250 bytes",
          "220 bytes"
        ],
        "answer": 3,
        "explanation": "Add all stated overhead once: 200 + 20 + 20 + 10 = 250 bytes.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-15",
        "number": 15,
        "question": "Identical messages are sent twice as often. What happens to their useful-data efficiency percentage?",
        "options": [
          "Overhead bytes per second stay fixed",
          "It stays the same, while total bytes per second double",
          "It falls to zero",
          "It doubles",
          "It halves in every case"
        ],
        "answer": 1,
        "explanation": "Both useful bytes and overhead per second scale equally, leaving the ratio unchanged.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-16",
        "number": 16,
        "question": "Payload decreases from 240 to 40 bytes while overhead remains 60 bytes. What is the new efficiency?",
        "options": [
          "150%",
          "60%",
          "80%",
          "66.67%",
          "40%"
        ],
        "answer": 4,
        "explanation": "The new ratio is 40 / (40 + 60) = 40%; fixed overhead consumes a larger share.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-17",
        "number": 17,
        "question": "Two 200-byte updates are batched with one 100-byte overhead cost. What is efficiency?",
        "options": [
          "80%",
          "100%",
          "66.67%",
          "25%",
          "50%"
        ],
        "answer": 0,
        "explanation": "There are 400 useful bytes in 500 total bytes, giving 80%. Assume one stated overhead cost for the batch.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-18",
        "number": 18,
        "question": "What is a possible disadvantage of waiting to batch updates?",
        "options": [
          "Mandatory conversion to simplex",
          "Automatic loss of all payload",
          "Higher waiting delay before transmission",
          "Guaranteed lower efficiency",
          "Elimination of every frame-size limit"
        ],
        "answer": 2,
        "explanation": "Batching can reduce overhead share but add waiting time; efficiency and latency are different measures.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-19",
        "number": 19,
        "question": "A question already states “300 user-data bytes.” How should stated headers be handled?",
        "options": [
          "Add them to form the denominator without subtracting them from the 300",
          "Divide header bytes by 300 as the useful fraction",
          "Replace the stated sizes with a memorized Ethernet value",
          "Subtract them from the 300 before calculating useful data",
          "Ignore every header in all calculations"
        ],
        "answer": 0,
        "explanation": "User data is already the payload. Include the explicitly stated overhead in the total, once.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      },
      {
        "id": "sg4-20",
        "number": 20,
        "question": "Which claim about higher useful-data efficiency is justified?",
        "options": [
          "It guarantees the same latency for all message sizes",
          "It overrides every frame-size standard",
          "It proves zero processing delay",
          "It always means a higher nominal link rate",
          "It does not by itself guarantee the lowest application response time"
        ],
        "answer": 4,
        "explanation": "Efficiency, nominal bit rate and response time are related but distinct. Larger efficient frames can still add delay.",
        "page": 9,
        "source": "Midterm Study Guide · p. 9"
      }
    ]
  },
  {
    "unit": 5,
    "chapter": 5,
    "title": "Network & transport",
    "pages": "10–13",
    "questions": [
      {
        "id": "sg5-01",
        "number": 1,
        "question": "Which transport protocol supplies connection setup, ordered delivery and retransmission mechanisms?",
        "options": [
          "UDP",
          "TCP",
          "ARP",
          "DHCP",
          "IP alone"
        ],
        "answer": 1,
        "explanation": "TCP provides these transport mechanisms; UDP itself does not provide ordering or retransmission guarantees.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-02",
        "number": 2,
        "question": "Which statement about standard transport headers matches the guide’s clarification?",
        "options": [
          "Neither contains port numbers",
          "Both are always 20 bytes",
          "UDP is 8 bytes; TCP starts at 20 bytes and can grow with options",
          "UDP is always 4 bytes; TCP is always 24",
          "TCP is always smaller than UDP"
        ],
        "answer": 2,
        "explanation": "The guide clarifies slide shorthand: standard UDP uses 8 bytes, and TCP has a minimum 20-byte header.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-03",
        "number": 3,
        "question": "Source and destination transport port numbers primarily identify…",
        "options": [
          "Building distribution layers",
          "Endpoint applications or processes",
          "MAC address vendors",
          "Physical switch sockets",
          "The fiber grade"
        ],
        "answer": 1,
        "explanation": "Transport ports are logical process identifiers, not hardware sockets.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-04",
        "number": 4,
        "question": "Which service resolves a readable hostname to an IP address?",
        "options": [
          "ARP",
          "DNS",
          "DHCP",
          "CRC",
          "NAT only"
        ],
        "answer": 1,
        "explanation": "DNS performs name-to-IP resolution. ARP resolves a local next-hop MAC address.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-05",
        "number": 5,
        "question": "A new workstation automatically receives a leased IP configuration. Which service supplies it?",
        "options": [
          "DHCP",
          "DNS",
          "CSMA/CD",
          "Store-and-forward switching",
          "CRC"
        ],
        "answer": 0,
        "explanation": "DHCP supplies leased configuration; this is independent of dynamic routing.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-06",
        "number": 6,
        "question": "A host sends to a remote subnet. Which MAC address should it normally resolve for the first local frame?",
        "options": [
          "The remote host’s MAC across the Internet",
          "Every router’s MAC simultaneously",
          "The DNS server’s MAC regardless of route",
          "Its own application port number",
          "Its local gateway’s MAC address"
        ],
        "answer": 4,
        "explanation": "ARP resolves the local IPv4 next hop, which is the gateway for a remote destination.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-07",
        "number": 7,
        "question": "Which address-length combination is correct?",
        "options": [
          "IPv4 128; IPv6 48; MAC 32",
          "IPv4 48; IPv6 32; MAC 128",
          "IPv4 32 bits; IPv6 128 bits; typical Ethernet MAC 48 bits",
          "IPv4 16; IPv6 64; MAC 8",
          "All three use 32 bits"
        ],
        "answer": 2,
        "explanation": "Keep logical IP address sizes distinct from the usual Ethernet MAC address size.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-08",
        "number": 8,
        "question": "Which statement correctly separates address scope from assignment method?",
        "options": [
          "DHCP changes an address into a routing protocol",
          "All private addresses must be static",
          "All public addresses must be dynamic",
          "A static address must be globally public",
          "A private IP address can be assigned statically or dynamically"
        ],
        "answer": 4,
        "explanation": "Public/private concerns scope; static/dynamic concerns how the address is assigned.",
        "page": 10,
        "source": "Midterm Study Guide · p. 10"
      },
      {
        "id": "sg5-09",
        "number": 9,
        "question": "A Class C /24 block is subnetted using /27. How many bits are borrowed?",
        "options": [
          "8",
          "27",
          "5",
          "3",
          "2"
        ],
        "answer": 3,
        "explanation": "Borrowed bits = new prefix − original prefix = 27 − 24 = 3.",
        "page": 11,
        "source": "Midterm Study Guide · p. 11"
      },
      {
        "id": "sg5-10",
        "number": 10,
        "question": "For a conventional /27 IPv4 subnet, how many usable host addresses are available?",
        "options": [
          "32",
          "8",
          "27",
          "31",
          "30"
        ],
        "answer": 4,
        "explanation": "Five host bits remain: 2^5 − 2 = 30, excluding network and broadcast addresses.",
        "page": 11,
        "source": "Midterm Study Guide · p. 11"
      },
      {
        "id": "sg5-11",
        "number": 11,
        "question": "A Class B /16 block is divided into /26 subnets. How many subnets result under the guide’s convention?",
        "options": [
          "256",
          "64",
          "62",
          "1,024",
          "1,022"
        ],
        "answer": 3,
        "explanation": "Ten bits are borrowed, giving 2^10 = 1,024 subnets. Do not subtract two from the subnet count.",
        "page": 12,
        "source": "Midterm Study Guide · p. 12"
      },
      {
        "id": "sg5-12",
        "number": 12,
        "question": "Which dotted-decimal mask represents /19?",
        "options": [
          "255.255.224.0",
          "255.224.255.0",
          "0.0.0.255",
          "255.255.255.19",
          "255.255.32.0"
        ],
        "answer": 0,
        "explanation": "Nineteen contiguous leading ones use two full octets and three leading ones (224) in the third octet.",
        "page": 11,
        "source": "Midterm Study Guide · p. 11"
      },
      {
        "id": "sg5-13",
        "number": 13,
        "question": "Why is 255.255.32.0 invalid as a conventional subnet mask?",
        "options": [
          "Every Class B mask must end in 255",
          "32 is too large for an octet",
          "Its binary ones are not contiguous from the left",
          "It has no host bits at all",
          "It contains too many octets"
        ],
        "answer": 2,
        "explanation": "The third octet 32 is 00100000, placing a one after zeros. Conventional masks require leading ones followed by zeros.",
        "page": 11,
        "source": "Midterm Study Guide · p. 11"
      },
      {
        "id": "sg5-14",
        "number": 14,
        "question": "A Class B block needs at least 90 equal-size subnets while maximizing hosts per subnet. Which plan meets this?",
        "options": [
          "Borrow 8 bits: /24, 128 subnets, 254 hosts",
          "Borrow 9 bits: /23, 512 subnets, 510 hosts",
          "Borrow 6 bits: /22, 64 subnets, 1,022 hosts",
          "Borrow 7 bits: /23, 128 subnets, 510 usable hosts each",
          "Borrow 7 bits: /25, 128 subnets, 126 hosts"
        ],
        "answer": 3,
        "explanation": "2^6 is too small; 2^7 = 128. /16 + 7 = /23 leaves 9 host bits, so 510 usable hosts.",
        "page": 12,
        "source": "Midterm Study Guide · p. 12"
      },
      {
        "id": "sg5-15",
        "number": 15,
        "question": "A Class C /24 block needs at least 45 usable hosts per subnet and the maximum number of equal-size subnets. Choose the result.",
        "options": [
          "/27: 8 subnets with 30 hosts each",
          "/28: 16 subnets with 14 hosts each",
          "/26: 2 subnets with 64 hosts each",
          "/25: 4 subnets with 126 hosts each",
          "/26: 4 subnets with 62 usable hosts each"
        ],
        "answer": 4,
        "explanation": "Six host bits are necessary because 2^5 − 2 is only 30. /26 leaves two borrowed bits: four subnets, 62 hosts each.",
        "page": 12,
        "source": "Midterm Study Guide · p. 12"
      },
      {
        "id": "sg5-16",
        "number": 16,
        "question": "Why do a Class B block and Class C block yield different numbers of /29 subnets?",
        "options": [
          "A /29 has no network address",
          "A /29 has different host bits depending on its class",
          "Their original prefixes differ, so different numbers of bits are borrowed",
          "Class C cannot use /29",
          "Class B /29 subnets always have 30 usable hosts"
        ],
        "answer": 2,
        "explanation": "Both /29 subnets have three host bits and six usable hosts. Borrowing from /16 versus /24 yields different subnet counts.",
        "page": 12,
        "source": "Midterm Study Guide · p. 12"
      },
      {
        "id": "sg5-17",
        "number": 17,
        "question": "A Class A network uses 255.255.255.240. How many usable hosts fit in each conventional subnet?",
        "options": [
          "14",
          "16",
          "240",
          "4,094",
          "24"
        ],
        "answer": 0,
        "explanation": "The mask is /28, leaving four host bits: 2^4 − 2 = 14. The final prefix controls host count.",
        "page": 12,
        "source": "Midterm Study Guide · p. 12"
      },
      {
        "id": "sg5-18",
        "number": 18,
        "question": "For a packet going to a remote host, which combination normally describes the sender’s first frame?",
        "options": [
          "IP destination: local gateway; frame destination: remote host",
          "IP destination: remote host; frame destination: local gateway",
          "Both destinations must be the DNS server",
          "IP destination: broadcast; frame destination: application port",
          "Both destinations must be the sender"
        ],
        "answer": 1,
        "explanation": "The packet retains the remote IP destination while the local frame carries it to the next-hop gateway.",
        "page": 13,
        "source": "Midterm Study Guide · p. 13"
      },
      {
        "id": "sg5-19",
        "number": 19,
        "question": "Which statement correctly contrasts static and dynamic routing?",
        "options": [
          "All dynamic protocols use only hop count",
          "Dynamic routes always choose the physically shortest cable",
          "Static means DHCP; dynamic means a public address",
          "Static routes are configured; dynamic protocols exchange information to update routes",
          "Static routes learn every change through route exchanges"
        ],
        "answer": 3,
        "explanation": "Route maintenance and routing metrics are separate issues. RIP uses hop count in the guide; OSPF uses cost.",
        "page": 13,
        "source": "Midterm Study Guide · p. 13"
      },
      {
        "id": "sg5-20",
        "number": 20,
        "question": "An internal host uses 172.20.4.8 to access the Internet through a boundary translator. Which description fits?",
        "options": [
          "The address is private; NAT performs boundary translation",
          "DNS performs private-to-public packet translation",
          "ARP leases the address and translates it globally",
          "All 172.x.x.x addresses are in the private range",
          "The address is public because it begins with 172"
        ],
        "answer": 0,
        "explanation": "172.20 falls inside 172.16–172.31. NAT is distinct from DNS, ARP and DHCP.",
        "page": 13,
        "source": "Midterm Study Guide · p. 13"
      }
    ]
  },
  {
    "unit": 6,
    "chapter": 7,
    "title": "Wired & wireless LANs",
    "pages": "14–18",
    "questions": [
      {
        "id": "sg6-01",
        "number": 1,
        "question": "Which comparison of a hub and switch matches the guide’s simplified model?",
        "options": [
          "A hub maintains a destination MAC forwarding table",
          "Both may be physical stars; a hub shares/repeats while a switch separates links",
          "Both always have dedicated full-duplex shared buses",
          "A switch cannot use a physical star",
          "A hub routes by IP while a switch only amplifies light"
        ],
        "answer": 1,
        "explanation": "Physical layout and logical operation differ: hubs repeat on a shared bus; switches forward using destination information.",
        "page": 14,
        "source": "Midterm Study Guide · p. 14"
      },
      {
        "id": "sg6-02",
        "number": 2,
        "question": "For a learned unicast destination, a Layer 2 switch primarily chooses the output using…",
        "options": [
          "The source user’s password",
          "The cable’s color",
          "The TCP application port alone",
          "Destination MAC information in its forwarding table",
          "The DNS hostname in every frame"
        ],
        "answer": 3,
        "explanation": "The simplified switching rule uses destination MAC information. Broadcast and unknown traffic are exceptions to single-port forwarding.",
        "page": 14,
        "source": "Midterm Study Guide · p. 14"
      },
      {
        "id": "sg6-03",
        "number": 3,
        "question": "Which switching mode receives and checks the complete frame before forwarding?",
        "options": [
          "Cut-through",
          "Store-and-forward",
          "CSMA/CA",
          "Simplex",
          "Fragment-free after 64 bytes"
        ],
        "answer": 1,
        "explanation": "Store-and-forward can reject a bad frame before forwarding, at the cost of full-frame receive/check delay.",
        "page": 14,
        "source": "Midterm Study Guide · p. 14"
      },
      {
        "id": "sg6-04",
        "number": 4,
        "question": "Which statement about cut-through and fragment-free switching is correct?",
        "options": [
          "Cut-through means full-duplex and nothing else",
          "Fragment-free waits only for a DNS reply",
          "Fragment-free repairs every corrupted frame",
          "Cut-through starts after destination information; fragment-free waits for the first 64 bytes",
          "Both always perform a complete FCS check first"
        ],
        "answer": 3,
        "explanation": "Neither early-forwarding mode should be mistaken for complete-frame FCS validation.",
        "page": 14,
        "source": "Midterm Study Guide · p. 14"
      },
      {
        "id": "sg6-05",
        "number": 5,
        "question": "What does 1000BASE-T identify?",
        "options": [
          "1,000 MB/s guaranteed application throughput",
          "The 802.11ac radio family",
          "A 1,000 m guaranteed copper channel",
          "1 Gb/s nominal baseband Ethernet over twisted pair",
          "100 Mb/s over single-mode fiber"
        ],
        "answer": 3,
        "explanation": "1000BASE-T denotes gigabit twisted-pair Ethernet; nominal bit rate is not guaranteed useful throughput.",
        "page": 15,
        "source": "Midterm Study Guide · p. 15"
      },
      {
        "id": "sg6-06",
        "number": 6,
        "question": "Before overhead, a nominal 1,000 Mb/s corresponds to how many MB/s using decimal units?",
        "options": [
          "12.5 MB/s",
          "125 MB/s",
          "100 MB/s",
          "8,000 MB/s",
          "1,000 MB/s"
        ],
        "answer": 1,
        "explanation": "Divide bits by eight to obtain bytes: 1,000 / 8 = 125. Protocol overhead lowers useful throughput.",
        "page": 15,
        "source": "Midterm Study Guide · p. 15"
      },
      {
        "id": "sg6-07",
        "number": 7,
        "question": "Six 1 Gb/s access clients send through one 1 Gb/s uplink. Which conclusion is valid?",
        "options": [
          "The uplink automatically becomes 6 Gb/s",
          "Faster client ports eliminate the uplink bottleneck",
          "Their concurrent traffic shares the uplink’s capacity",
          "The application is guaranteed 1 Gb/s per client",
          "Each receives an independent 1 Gb/s path through it"
        ],
        "answer": 2,
        "explanation": "Individual access rates do not multiply the capacity of a shared uplink.",
        "page": 15,
        "source": "Midterm Study Guide · p. 15"
      },
      {
        "id": "sg6-08",
        "number": 8,
        "question": "Server CPU is quiet but the shared uplink is saturated. Which intervention directly addresses the measured bottleneck?",
        "options": [
          "Increase the speed label of unused client ports",
          "Replace the server CPU as the only response",
          "Increase compatible uplink capacity or reduce peak traffic on it",
          "Change every MAC address",
          "Add unrelated application tiers without measurement"
        ],
        "answer": 2,
        "explanation": "Match the intervention to the observed constraint rather than upgrading an unrelated resource.",
        "page": 15,
        "source": "Midterm Study Guide · p. 15"
      },
      {
        "id": "sg6-09",
        "number": 9,
        "question": "Which standard-family distinction is correct?",
        "options": [
          "802.3 means DNS only",
          "802.11 is WLAN; 802.3 is Ethernet",
          "802.3 requires radio transmission",
          "802.11 and 802.3 are identical standards",
          "802.11 denotes the IPv6 address length"
        ],
        "answer": 1,
        "explanation": "WLAN can integrate with Ethernet but uses a different standard family.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-10",
        "number": 10,
        "question": "How does an AP radio differ from a dedicated full-duplex switched client link?",
        "options": [
          "Its associated wireless devices share airtime",
          "It creates a separate full-duplex radio channel for every client automatically",
          "It needs no wired backhaul under any design",
          "It eliminates all contention through association alone",
          "It replaces transport protocols with MAC addresses"
        ],
        "answer": 0,
        "explanation": "An AP bridges wireless access into the LAN, but radio airtime remains shared.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-11",
        "number": 11,
        "question": "Which description best fits CSMA/CA in the guide?",
        "options": [
          "Correction of damaged bits by CRC",
          "Guaranteed elimination of every collision",
          "Collision detection only after a wired hub repeats data",
          "TCP connection setup at the AP",
          "Carrier sensing and collision-avoidance procedures including random backoff"
        ],
        "answer": 4,
        "explanation": "Collision avoidance coordinates access but cannot guarantee zero collisions.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-12",
        "number": 12,
        "question": "An ordinary acknowledged Wi-Fi unicast frame receives no ACK. What may happen?",
        "options": [
          "All IP addresses are immediately renewed",
          "Every broadcast must follow the same ACK rule",
          "The sender retries according to the link procedure",
          "UDP is automatically converted into TCP",
          "The frame is proven to be encrypted"
        ],
        "answer": 2,
        "explanation": "Missing ACKs can trigger link retries for acknowledged unicast; do not generalize the same rule to all broadcasts.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-13",
        "number": 13,
        "question": "Two clients each reach an AP but cannot adequately sense one another. This is…",
        "options": [
          "A DHCP lease conflict by definition",
          "Proof that no collision can occur",
          "A dedicated full-duplex connection",
          "A hidden-node situation",
          "A physical fiber break"
        ],
        "answer": 3,
        "explanation": "Hidden nodes can transmit without sensing each other; RTS/CTS can help coordinate access.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-14",
        "number": 14,
        "question": "Which DCF/PCF statement follows the guide’s technical clarification?",
        "options": [
          "DCF can use RTS/CTS; PCF is AP-controlled polling",
          "DCF requires no contention procedures",
          "Both terms mean Ethernet cut-through switching",
          "RTS/CTS exists only in PCF",
          "PCF is the name of TCP retransmission"
        ],
        "answer": 0,
        "explanation": "The guide clarifies the slide grouping: RTS/CTS is not exclusive to PCF.",
        "page": 16,
        "source": "Midterm Study Guide · p. 16"
      },
      {
        "id": "sg6-15",
        "number": 15,
        "question": "An AP must serve 2.4 GHz 802.11n and 5 GHz 802.11ac users simultaneously. Which capability is appropriate?",
        "options": [
          "Any single-band radio because bands are interchangeable",
          "A 2.4 GHz-only radio",
          "Only a faster wired NIC at one client",
          "A 5 GHz-only radio",
          "Concurrent dual-band radios supporting those modes"
        ],
        "answer": 4,
        "explanation": "Concurrent operation on the relevant bands is required; a single-band radio does not supply both simultaneously.",
        "page": 17,
        "source": "Midterm Study Guide · p. 17"
      },
      {
        "id": "sg6-16",
        "number": 16,
        "question": "Why might another nearby AP on the same channel fail to add independent capacity?",
        "options": [
          "More APs eliminate interference by definition",
          "It always doubles the backhaul speed",
          "It can continue sharing/competing for the same airtime",
          "Channel choice never affects concurrency",
          "Same-channel APs always create isolated full-duplex links"
        ],
        "answer": 2,
        "explanation": "Plan channels and interference as well as AP count. Suitable non-overlapping channels can support more concurrency.",
        "page": 17,
        "source": "Midterm Study Guide · p. 17"
      },
      {
        "id": "sg6-17",
        "number": 17,
        "question": "Which pairing correctly distinguishes wireless security controls?",
        "options": [
          "Authentication checks identity/access; encryption protects transmitted data",
          "Encryption assigns DHCP leases; authentication adds bandwidth",
          "WEP is the strongest option in the guide",
          "MAC filtering prevents address spoofing absolutely",
          "Authentication and encryption are identical functions"
        ],
        "answer": 0,
        "explanation": "Identity/access control and confidentiality are distinct. MAC filtering can be bypassed through spoofing; WEP is weak.",
        "page": 17,
        "source": "Midterm Study Guide · p. 17"
      },
      {
        "id": "sg6-18",
        "number": 18,
        "question": "Which set of checks belongs in a WLAN site survey?",
        "options": [
          "Coverage, user capacity, interference, channels, placement, backhaul and power",
          "Only the AP’s case color and brand",
          "Coverage alone, because signal bars prove capacity",
          "Only the number of DHCP leases",
          "Only the server’s application port numbers"
        ],
        "answer": 0,
        "explanation": "Coverage alone does not demonstrate capacity. The guide includes channel planning, user demand, backhaul, PoE and management needs.",
        "page": 17,
        "source": "Midterm Study Guide · p. 17"
      },
      {
        "id": "sg6-19",
        "number": 19,
        "question": "Which action reduces peak circuit demand rather than adding circuit supply?",
        "options": [
          "Install a higher-capacity compatible link",
          "Increase the access circuit’s nominal rate",
          "Add more switching capacity for the same traffic",
          "Upgrade the uplink’s supported capacity",
          "Schedule large backups outside busy hours"
        ],
        "answer": 4,
        "explanation": "Moving backups off-hours reduces competing peak traffic. Upgrading capacity instead adds supply.",
        "page": 18,
        "source": "Midterm Study Guide · p. 18"
      },
      {
        "id": "sg6-20",
        "number": 20,
        "question": "Server CPU remains around 85% during slow periods. What is the guide’s recommended interpretation?",
        "options": [
          "Replace the CPU immediately in every case",
          "Conclude availability is perfect",
          "Ignore it because only link speed can limit service",
          "Assume the wireless channel is proven to be the only limit",
          "Investigate it as a warning alongside workload and other measurements"
        ],
        "answer": 4,
        "explanation": "High utilization is a diagnostic signal, not automatic proof of which hardware must be replaced. Match the change to the bottleneck.",
        "page": 18,
        "source": "Midterm Study Guide · p. 18"
      }
    ]
  }
];
