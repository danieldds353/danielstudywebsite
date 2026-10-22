/* Original practice questions grounded primarily in the uploaded lecture slides. */
window.practiceSets = {
  "setA": [
    {
      "id": "Av2-1",
      "number": 1,
      "chapter": 1,
      "question": "Which of the following contains the three key technical goals emphasized in this course?",
      "options": [
        "Availability, standards, cost",
        "Access, distribution, core",
        "Security, manageability, affordability",
        "Scalability, availability, performance",
        "Performance, usability, encryption"
      ],
      "answer": 3,
      "explanation": "The lecture identifies scalability, availability and performance as the three key goals. Security and cost matter, but they are additional criteria rather than replacements for these three.",
      "source": "Lecture 1 · slides 23,43"
    },
    {
      "id": "Av2-2",
      "number": 2,
      "chapter": 1,
      "question": "A company has several departmental LANs in one building. Which structured-design layer interconnects these LANs?",
      "options": [
        "Distribution",
        "Application",
        "Access",
        "Core",
        "Transport"
      ],
      "answer": 0,
      "explanation": "Access forms the departmental LANs. Distribution interconnects them within the building. In this course's model, core is used to connect building backbones across adjacent buildings.",
      "source": "Lecture 1 · slides 28,33"
    },
    {
      "id": "Av2-3",
      "number": 3,
      "chapter": 1,
      "question": "An extranet is a network that...",
      "options": [
        "Gives invited external users access to selected organizational information",
        "Uses additional host bits to increase transmission speed",
        "Connects only employees inside the organization",
        "Allows every Internet user to access all internal records",
        "Replaces application protocols with hardware circuits"
      ],
      "answer": 0,
      "explanation": "The distinction is controlled access for invited outsiders such as customers or suppliers. An intranet is intended for internal organizational users.",
      "source": "Lecture 1 · slides 27"
    },
    {
      "id": "Av2-4",
      "number": 4,
      "chapter": 1,
      "question": "Which statement is true regarding a multi-layer model of communication?",
      "options": [
        "Adding layers removes the need for protocol headers",
        "Every layer must use the same addressing method",
        "Encapsulation adds overhead even though modularity simplifies development",
        "Changes to one layer always require rewriting every application",
        "Layering guarantees lower response time for every application"
      ],
      "answer": 2,
      "explanation": "Layering separates responsibilities and helps development and troubleshooting. Its cost includes added headers and processing for encapsulation and de-encapsulation.",
      "source": "Lecture 1 · slides 36"
    },
    {
      "id": "Av2-5",
      "number": 5,
      "chapter": 1,
      "question": "Which Internet Model layer handles frame formatting and MAC addressing?",
      "options": [
        "Physical",
        "Application",
        "Transport",
        "Data link",
        "Network"
      ],
      "answer": 3,
      "explanation": "Data link handles device-to-device frame delivery, MAC addressing and error checking. IP addressing and routing belong to the network layer.",
      "source": "Lecture 1 · slides 40,41"
    },
    {
      "id": "Av2-6",
      "number": 6,
      "chapter": 1,
      "question": "Why are network standards important when purchasing equipment from different vendors?",
      "options": [
        "They guarantee availability without redundant equipment",
        "They guarantee that every device has the same capacity",
        "They require one vendor for the entire network",
        "They help compatible hardware and software communicate using agreed rules",
        "They eliminate all configuration work"
      ],
      "answer": 3,
      "explanation": "Standards support interoperability. They do not guarantee identical capacity, automatic configuration or resilience to device failure.",
      "source": "Lecture 1 · slides 45"
    },
    {
      "id": "Av2-7",
      "number": 7,
      "chapter": 2,
      "question": "Which of the following is NOT a transaction-processing system in the lecture's classification?",
      "options": [
        "An order-management system",
        "An airline booking system",
        "A live videoconferencing application",
        "A payment-processing system",
        "A university enrolment system"
      ],
      "answer": 2,
      "explanation": "TPS capture and process business transactions and update records. Videoconferencing is classified as a non-TPS application in these slides.",
      "source": "Lecture 2 · slides 5,6"
    },
    {
      "id": "Av2-8",
      "number": 8,
      "chapter": 2,
      "question": "Which application function handles automated access to another application?",
      "options": [
        "Data storage",
        "Services logic",
        "Physical signaling",
        "Presentation logic",
        "Media access control"
      ],
      "answer": 1,
      "explanation": "Services logic handles an application's automated access to other applications. Presentation logic concerns the user interface, and media access is a different network-layer responsibility.",
      "source": "Lecture 2 · slides 7"
    },
    {
      "id": "Av2-9",
      "number": 9,
      "chapter": 2,
      "question": "What causes excessive circuit traffic in client-based architecture?",
      "options": [
        "The architecture removes the data-storage function",
        "The client contains only presentation logic",
        "Data access logic runs on the client, so data must travel to the client for queries",
        "All application processing is divided among dedicated application servers",
        "The server filters every query and sends only the required records"
      ],
      "answer": 2,
      "explanation": "The lecture's client-based model stores data on the server but performs queries at the client. Moving the data for processing creates unnecessary network load.",
      "source": "Lecture 2 · slides 9"
    },
    {
      "id": "Av2-10",
      "number": 10,
      "chapter": 2,
      "question": "In client-server architecture, application logic...",
      "options": [
        "Is replaced by services logic",
        "Must always run entirely on the client",
        "Must always run entirely on the database server",
        "Is unrelated to the architecture",
        "May run on the client, on the server, or be split between them"
      ],
      "answer": 4,
      "explanation": "Client-server assigns presentation to the client and data storage/access to the server. Application logic can be partitioned differently in different versions.",
      "source": "Lecture 2 · slides 10"
    },
    {
      "id": "Av2-11",
      "number": 11,
      "chapter": 2,
      "question": "Which allocation correctly describes a three-tier TPS architecture?",
      "options": [
        "Client: all functions; application server: routing; database server: forwarding",
        "Every computer performs every function independently",
        "Client: presentation; application server: application/services; database server: storage/access",
        "Client: storage; application server: presentation; database server: services only",
        "Client: services only; application server: storage; database server: presentation"
      ],
      "answer": 2,
      "explanation": "The three tiers separate the user interface, application processing and database work. A tier is a functional role, not simply an arbitrary extra device.",
      "source": "Lecture 2 · slides 12"
    },
    {
      "id": "Av2-12",
      "number": 12,
      "chapter": 2,
      "question": "Which statement applies to thin clients?",
      "options": [
        "Little or no application logic resides on the client",
        "A thin client must also act as a peer-to-peer server",
        "Thin clients eliminate the need to update server software",
        "All application logic and data storage must reside on the client",
        "Presentation logic is prohibited on the client"
      ],
      "answer": 0,
      "explanation": "Thin clients perform limited local application processing and may handle mainly presentation. Centralizing application updates simplifies management but does not eliminate updates.",
      "source": "Lecture 2 · slides 14"
    },
    {
      "id": "Av2-13",
      "number": 13,
      "chapter": 2,
      "question": "In Platform as a Service, which responsibility remains with the customer in the lecture's model?",
      "options": [
        "Supplying every operating system and DBMS",
        "Developing and owning the customer's application",
        "Replacing the platform's programming tools",
        "Maintaining all provider network hardware",
        "Supplying the provider's physical servers"
      ],
      "answer": 1,
      "explanation": "PaaS supplies the platform and programming tools. The customer develops its application. SaaS supplies the application as well; IaaS leaves more software responsibility with the customer.",
      "source": "Lecture 2 · slides 20"
    },
    {
      "id": "Av2-14",
      "number": 14,
      "chapter": 2,
      "question": "Which statement about n-tier architecture is true?",
      "options": [
        "It removes the need for database access logic",
        "It requires all application logic to stay on the client",
        "It guarantees availability without backup components",
        "It can improve scalability while adding complexity and inter-tier network traffic",
        "Each additional tier eliminates all network traffic"
      ],
      "answer": 3,
      "explanation": "More tiers can distribute work and support scaling. Additional communication and software complexity are trade-offs, and redundancy is still needed for failure tolerance.",
      "source": "Lecture 2 · slides 18,23"
    },
    {
      "id": "Av2-15",
      "number": 15,
      "chapter": 3,
      "question": "Which circuits are the clearest example of multipoint circuits in the lecture?",
      "options": [
        "A dedicated link between two switches",
        "Wireless devices sharing an access point's radio medium",
        "A separate cable for each workstation",
        "A dedicated full-duplex cable from a PC to a switch",
        "A direct fiber circuit between two routers"
      ],
      "answer": 1,
      "explanation": "Multipoint circuits share a medium. Dedicated switched links are point-to-point; devices on separate links can communicate simultaneously.",
      "source": "Lecture 3 · slides 6,7"
    },
    {
      "id": "Av2-16",
      "number": 16,
      "chapter": 3,
      "question": "Full-duplex data flow means...",
      "options": [
        "The circuit operates at half its nominal data rate",
        "Data can travel in one direction only",
        "Two separate applications must alternate their messages",
        "Data can travel in both directions at the same time",
        "Data can travel in either direction, but only one at a time"
      ],
      "answer": 3,
      "explanation": "Full-duplex permits simultaneous transmission in both directions. Half-duplex alternates directions; simplex is one-way.",
      "source": "Lecture 3 · slides 6,8"
    },
    {
      "id": "Av2-17",
      "number": 17,
      "chapter": 3,
      "question": "What approaches reduce interference in shielded twisted-pair cable?",
      "options": [
        "Shielding only, without twisted pairs",
        "Increasing the number of IP addresses",
        "Removing insulation from the conductors",
        "Twisting conductor pairs and adding shielding",
        "Changing the subnet mask"
      ],
      "answer": 3,
      "explanation": "Twisted pairs reduce interference, and STP adds shielding. Coaxial cable instead uses a shield around its central conductor and is not a twisted-pair cable.",
      "source": "Lecture 3 · slides 10,11"
    },
    {
      "id": "Av2-18",
      "number": 18,
      "chapter": 3,
      "question": "A circuit must cross a high-interference area and exceed 100 m without a copper repeater. Which medium is best supported by the lecture?",
      "options": [
        "Unshielded copper because it is immune to interference",
        "An ordinary twisted-pair run of unlimited length",
        "Fiber optics with a grade appropriate to the distance",
        "Coaxial cable because it is always used in organizational LANs",
        "Radio because it has the lowest error rate"
      ],
      "answer": 2,
      "explanation": "Fiber offers longer spans and immunity to electromagnetic interference. Select compatible fiber and optics for the required distance; twisted-pair Ethernet normally has a 100 m channel limit.",
      "source": "Lecture 3 · slides 17,18"
    },
    {
      "id": "Av2-19",
      "number": 19,
      "chapter": 3,
      "question": "CRC-32 is an example of...",
      "options": [
        "An error-detection mechanism",
        "A data-encryption mechanism",
        "A collision-avoidance handshake",
        "An IP-address assignment mechanism",
        "A mechanism that repairs every corrupted frame"
      ],
      "answer": 0,
      "explanation": "Ethernet uses CRC-32 to detect corruption. A bad frame is discarded; the CRC value does not reconstruct the damaged data.",
      "source": "Lecture 3 · slides 28,32"
    },
    {
      "id": "Av2-20",
      "number": 20,
      "chapter": 3,
      "question": "What does collision detection do in CSMA/CD?",
      "options": [
        "Repairs damaged bits inside the frame",
        "Prevents every collision by reserving the radio channel",
        "Selects a routing protocol",
        "Changes the subnet mask during transmission",
        "Detects a collision during transmission so a station can stop and retry later"
      ],
      "answer": 4,
      "explanation": "The sender listens while transmitting on a shared Ethernet medium. On detecting a collision it stops and retries after waiting. This is different from merely checking whether the medium is busy before starting.",
      "source": "Lecture 3 · slides 28"
    },
    {
      "id": "Av2-21",
      "number": 21,
      "chapter": 3,
      "question": "A transmission carries 120 bytes of user data and 40 bytes of total overhead. What is its efficiency?",
      "options": [
        "66.67%",
        "80%",
        "25%",
        "33.33%",
        "75%"
      ],
      "answer": 4,
      "explanation": "Efficiency = useful data / (useful data + overhead) = 120 / 160 = 75%. The denominator must include the overhead.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Av2-22",
      "number": 22,
      "chapter": 3,
      "question": "Identical messages are sent twice as often, with the same payload and overhead per message. What happens to percentage efficiency?",
      "options": [
        "It halves because overhead is transmitted twice",
        "It becomes 100% because the circuit is busier",
        "It remains unchanged, although total bytes per second increase",
        "It doubles because twice as many messages arrive",
        "It cannot be determined without the subnet mask"
      ],
      "answer": 2,
      "explanation": "Doubling message frequency doubles both useful data and overhead per second. Their ratio remains the same under the stated model.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Av2-23",
      "number": 23,
      "chapter": 4,
      "question": "A Class C network needs at least 6 equal-size subnets. What is the maximum usable host count per subnet when the minimum bits are borrowed?",
      "options": [
        "62",
        "254",
        "6",
        "30",
        "32"
      ],
      "answer": 3,
      "explanation": "Class C starts with 8 host bits. Borrow 3 because 2^2 = 4 is insufficient and 2^3 = 8 is sufficient. Five host bits remain: 2^5 - 2 = 30.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Av2-24",
      "number": 24,
      "chapter": 4,
      "question": "Consider a Class B network with mask 255.255.255.248. How many host bits were borrowed?",
      "options": [
        "5",
        "29",
        "16",
        "13",
        "3"
      ],
      "answer": 3,
      "explanation": "The mask is /29. Class B starts at /16, so 29 - 16 = 13 bits are borrowed. Three bits remain for hosts.",
      "source": "Lecture 4 · slides 19,21"
    },
    {
      "id": "Av2-25",
      "number": 25,
      "chapter": 4,
      "question": "A Class A address has mask 255.255.255.224. What is the maximum usable host count on a subnet?",
      "options": [
        "224",
        "222",
        "2,097,150",
        "30",
        "32"
      ],
      "answer": 3,
      "explanation": "The supplied mask is /27, leaving 32 - 27 = 5 host bits. Usable hosts = 2^5 - 2 = 30. The original class does not override the supplied mask.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Av2-26",
      "number": 26,
      "chapter": 4,
      "question": "A Class B network needs at least 40 equal-size subnets. What mask results from borrowing the minimum number of bits?",
      "options": [
        "255.255.252.0",
        "255.255.255.40",
        "255.255.240.0",
        "255.255.248.0",
        "255.255.224.0"
      ],
      "answer": 0,
      "explanation": "2^5 = 32 is insufficient; 2^6 = 64 is sufficient. Add 6 to the Class B /16 prefix to obtain /22, or 255.255.252.0.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Av2-27",
      "number": 27,
      "chapter": 4,
      "question": "Which statement about mask 255.255.240.0 is true?",
      "options": [
        "It creates 240 subnets regardless of the original class",
        "It is invalid because 240 is not 255",
        "It requires identical rightmost address bytes",
        "It identifies a 24-bit host portion",
        "Devices in the same subnet share the same 20 leftmost address bits"
      ],
      "answer": 4,
      "explanation": "255.255.240.0 contains 8 + 8 + 4 = 20 consecutive 1-bits. The network prefix is /20; remaining bits identify hosts.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Av2-28",
      "number": 28,
      "chapter": 4,
      "question": "Which protocol identifies the local MAC address needed to deliver an IPv4 frame to the next hop?",
      "options": [
        "OSPF",
        "DNS",
        "DHCP",
        "TCP",
        "ARP"
      ],
      "answer": 4,
      "explanation": "ARP resolves a local next-hop IPv4 address to a MAC address. DNS resolves names to IP addresses; DHCP supplies configuration; TCP handles transport delivery.",
      "source": "Lecture 4 · slides 8,12"
    },
    {
      "id": "Av2-29",
      "number": 29,
      "chapter": 4,
      "question": "Which statement correctly compares TCP and UDP?",
      "options": [
        "UDP establishes a TCP-style handshake before every message",
        "TCP supplies reliable-delivery mechanisms; UDP itself does not guarantee delivery",
        "IP is the connection-oriented transport protocol",
        "UDP always provides retransmission and flow control",
        "TCP and UDP both use MAC addresses to identify applications"
      ],
      "answer": 1,
      "explanation": "TCP provides connection setup and reliability mechanisms. UDP is connectionless and has lower overhead but no transport-level delivery guarantee of its own.",
      "source": "Lecture 4 · slides 8,9"
    },
    {
      "id": "Av2-30",
      "number": 30,
      "chapter": 4,
      "question": "Dynamic routing differs from static routing because...",
      "options": [
        "It translates every hostname into a MAC address",
        "It removes the need for routing tables",
        "It automatically leases IP addresses to end devices",
        "Routers exchange information and update routes automatically",
        "It always uses the physically shortest cable"
      ],
      "answer": 3,
      "explanation": "Dynamic routing learns and updates routes through routing protocols. Static routes are configured manually. Dynamic addressing through DHCP is a different function.",
      "source": "Lecture 4 · slides 22,23"
    }
  ],
  "setB": [
    {
      "id": "Bv2-1",
      "number": 1,
      "chapter": 1,
      "question": "Which of the following statements about WANs is true?",
      "options": [
        "They consist only of wireless circuits",
        "They are limited to the access layer of one building",
        "Their maximum geographic span is 100 km",
        "They are another name for thin-client systems",
        "They often use leased circuits and may span very large geographic areas"
      ],
      "answer": 4,
      "explanation": "WANs have the largest geographic scope in this classification and commonly use leased circuits. A network within a floor or building is usually a LAN.",
      "source": "Lecture 1 · slides 26"
    },
    {
      "id": "Bv2-2",
      "number": 2,
      "chapter": 1,
      "question": "In the course's structured-design model, a core layer is used when...",
      "options": [
        "A client uses a browser instead of a desktop application",
        "A single workstation needs an Ethernet connection",
        "One LAN contains more than one application",
        "One departmental printer requires a port",
        "Building backbones must be interconnected across two or more adjacent buildings"
      ],
      "answer": 4,
      "explanation": "Access connects endpoints; distribution connects LANs within a building; core connects building backbones across adjacent buildings. The lecture's core condition concerns network scope.",
      "source": "Lecture 1 · slides 28"
    },
    {
      "id": "Bv2-3",
      "number": 3,
      "chapter": 1,
      "question": "Communication between adjacent layers on the same system is called...",
      "options": [
        "Dynamic routing",
        "Full-duplex signaling",
        "Multipoint transmission",
        "Horizontal communication",
        "Vertical communication"
      ],
      "answer": 4,
      "explanation": "Vertical communication is between adjacent layers inside a system. Horizontal communication describes the logical relationship between corresponding layers on different systems.",
      "source": "Lecture 1 · slides 35"
    },
    {
      "id": "Bv2-4",
      "number": 4,
      "chapter": 1,
      "question": "Which is a benefit of layered communication models?",
      "options": [
        "All troubleshooting must start with the application source code",
        "All layer headers disappear after standardization",
        "Packet transmission becomes instantaneous",
        "Each layer must use identical hardware",
        "A component at one layer can be changed more easily while preserving interfaces"
      ],
      "answer": 4,
      "explanation": "Modularity isolates responsibilities, making substitutions and troubleshooting easier. Encapsulation still imposes overhead and processing costs.",
      "source": "Lecture 1 · slides 36"
    },
    {
      "id": "Bv2-5",
      "number": 5,
      "chapter": 1,
      "question": "A link's throughput increases, but the network still has one switch with no backup. Which conclusion is justified?",
      "options": [
        "Availability doubles whenever link speed doubles",
        "Security is now guaranteed",
        "Scalability becomes unlimited",
        "All three technical goals are automatically satisfied",
        "Performance capacity can improve, but switch-failure availability is not solved"
      ],
      "answer": 4,
      "explanation": "More link capacity can help performance when the link is a bottleneck. It does not remove a single point of failure or make capacity unlimited.",
      "source": "Lecture 1 · slides 23,43; Goal application"
    },
    {
      "id": "Bv2-6",
      "number": 6,
      "chapter": 1,
      "question": "An access switch forwards ordinary Ethernet frames using...",
      "options": [
        "The number of borrowed subnet bits alone",
        "MAC addresses",
        "Application usernames alone",
        "DNS hostnames alone",
        "TCP port numbers alone"
      ],
      "answer": 1,
      "explanation": "An ordinary Layer 2 switch forwards using MAC information. Network-layer routing uses IP addresses and network prefixes.",
      "source": "Lecture 1 · slides 33,40"
    },
    {
      "id": "Bv2-7",
      "number": 7,
      "chapter": 2,
      "question": "Application architecture describes...",
      "options": [
        "Only the physical placement of Ethernet cables",
        "The decimal representation of a subnet mask",
        "The circuit's voltage levels",
        "How application functions are distributed among computers",
        "Only the access, distribution and core layers"
      ],
      "answer": 3,
      "explanation": "Application architecture allocates presentation, application, data access, storage and services functions. Network architecture concerns network components and their arrangement.",
      "source": "Lecture 2 · slides 7"
    },
    {
      "id": "Bv2-8",
      "number": 8,
      "chapter": 2,
      "question": "Which of the following is NOT one of the five TPS application functions?",
      "options": [
        "Data storage",
        "Application logic",
        "RTS/CTS media access",
        "Data access logic",
        "Presentation logic"
      ],
      "answer": 2,
      "explanation": "The fifth application function is services logic. RTS/CTS concerns access to a shared wireless medium rather than TPS application processing.",
      "source": "Lecture 2 · slides 7"
    },
    {
      "id": "Bv2-9",
      "number": 9,
      "chapter": 2,
      "question": "Which is a limitation of host-based architecture emphasized by the slides?",
      "options": [
        "It requires each user to configure a routing table",
        "It cannot process large volumes of business transactions",
        "Every terminal must store the complete database",
        "Upgrades may be costly and difficult to make in small increments",
        "It is necessarily a peer-to-peer system"
      ],
      "answer": 3,
      "explanation": "The slides emphasize large upgrade increments and a central bottleneck. They still recommend host-based designs for some high-volume main-line TPS applications.",
      "source": "Lecture 2 · slides 8"
    },
    {
      "id": "Bv2-10",
      "number": 10,
      "chapter": 2,
      "question": "Why does server-side data access logic help client-server performance?",
      "options": [
        "It replaces data storage with presentation logic",
        "It removes all application processing from the server",
        "It sends every database record for every query",
        "It prevents every server overload",
        "The server can perform queries and return the needed subset of data"
      ],
      "answer": 4,
      "explanation": "Filtering data at the server avoids unnecessary circuit traffic compared with moving all data to a client for local queries. Server capacity still matters.",
      "source": "Lecture 2 · slides 10,11"
    },
    {
      "id": "Bv2-11",
      "number": 11,
      "chapter": 2,
      "question": "In a three-tier TPS architecture, the database server normally handles...",
      "options": [
        "Only presentation logic",
        "Data storage and data access logic",
        "Only middleware translation",
        "Only services logic",
        "All physical signaling"
      ],
      "answer": 1,
      "explanation": "The application server handles application/services logic, while the client handles presentation. The database tier stores data and performs data access.",
      "source": "Lecture 2 · slides 12"
    },
    {
      "id": "Bv2-12",
      "number": 12,
      "chapter": 2,
      "question": "Middleware is software that...",
      "options": [
        "Converts all fiber links into radio links",
        "Detects collisions in twisted-pair cable",
        "Eliminates the need for application servers",
        "Translates and manages communication between client and server applications",
        "Assigns the first octet of every MAC address"
      ],
      "answer": 3,
      "explanation": "Middleware sits between applications, supports translation across software systems and manages message transfers. The slides associate it with services logic.",
      "source": "Lecture 2 · slides 16"
    },
    {
      "id": "Bv2-13",
      "number": 13,
      "chapter": 2,
      "question": "Which cloud model leaves the customer responsible for the application, OS and other software in the lecture's simplified model?",
      "options": [
        "Host-based architecture",
        "Peer-to-peer architecture",
        "Software as a Service",
        "Infrastructure as a Service",
        "Platform as a Service"
      ],
      "answer": 3,
      "explanation": "IaaS supplies hardware infrastructure while the customer supplies software in the lecture model. PaaS also supplies the platform; SaaS supplies the application.",
      "source": "Lecture 2 · slides 20"
    },
    {
      "id": "Bv2-14",
      "number": 14,
      "chapter": 2,
      "question": "The peer-to-peer example in the lecture includes computers that...",
      "options": [
        "Act as both clients and servers, with a central service helping locate shared files",
        "Never send data to any other peer",
        "Require a dedicated database server for every file request",
        "Act only as terminals with no local processing",
        "Are the recommended architecture for every organizational TPS"
      ],
      "answer": 0,
      "explanation": "The lecture describes a file-sharing P2P arrangement in which peers have both roles and a central server assists file location. This describes that example rather than every possible P2P design.",
      "source": "Lecture 2 · slides 22"
    },
    {
      "id": "Bv2-15",
      "number": 15,
      "chapter": 3,
      "question": "Half-duplex data flow means...",
      "options": [
        "The data rate must be half the advertised value",
        "Communication is possible in one direction only",
        "Communication is possible in both directions, but not simultaneously",
        "Both ends always transmit simultaneously",
        "Only half the host addresses are usable"
      ],
      "answer": 2,
      "explanation": "Half-duplex alternates transmission direction. It does not mean halving the nominal speed or reducing address capacity.",
      "source": "Lecture 3 · slides 6,8"
    },
    {
      "id": "Bv2-16",
      "number": 16,
      "chapter": 3,
      "question": "What is the main interference-reduction feature of coaxial cable?",
      "options": [
        "A second database server",
        "Shielding around the central conductor",
        "A larger subnet ID",
        "A TCP handshake in the connector",
        "Four twisted conductor pairs"
      ],
      "answer": 1,
      "explanation": "Coaxial cable has a central conductor and surrounding shield. Twisting pairs is characteristic of twisted-pair cable.",
      "source": "Lecture 3 · slides 11"
    },
    {
      "id": "Bv2-17",
      "number": 17,
      "chapter": 3,
      "question": "A standard twisted-pair Ethernet channel without a repeater is typically limited to...",
      "options": [
        "40 km",
        "100 m",
        "2 km",
        "500 m",
        "100 km"
      ],
      "answer": 1,
      "explanation": "The slides give 100 m as the typical twisted-pair limit. Longer distances call for another appropriate medium or a suitable repeater arrangement.",
      "source": "Lecture 3 · slides 10,17"
    },
    {
      "id": "Bv2-18",
      "number": 18,
      "chapter": 3,
      "question": "Which statement correctly distinguishes a modem from a codec in the lecture examples?",
      "options": [
        "A codec is used only to shield copper conductors",
        "A modem requires no conversion at the receiving end",
        "A codec is a routing table and a modem is an Ethernet frame",
        "A modem carries digital data over an analog circuit; a codec digitizes analog voice for a digital circuit",
        "Both devices assign IP addresses using DHCP"
      ],
      "answer": 3,
      "explanation": "The modem example modulates computer data for analog transmission. The codec example converts voice between analog and digital representations, as in VoIP.",
      "source": "Lecture 3 · slides 21,23"
    },
    {
      "id": "Bv2-19",
      "number": 19,
      "chapter": 3,
      "question": "On a dedicated full-duplex switched Ethernet link, CSMA/CD is...",
      "options": [
        "Used to correct CRC errors directly",
        "Enabled because every switch port shares one collision medium",
        "Unnecessary for collision arbitration on that link",
        "The protocol that assigns a private IP address",
        "Required to reserve every transmission with RTS/CTS"
      ],
      "answer": 2,
      "explanation": "The full-duplex point-to-point link permits both ends to transmit simultaneously. Shared half-duplex Ethernet is the setting for CSMA/CD collision arbitration.",
      "source": "Lecture 3 · slides 26,28"
    },
    {
      "id": "Bv2-20",
      "number": 20,
      "chapter": 3,
      "question": "An Ethernet receiver detects corruption using the FCS. What happens to the bad frame in the lecture's model?",
      "options": [
        "It is discarded; reliable transport can recover by retransmission",
        "CRC-32 directly reconstructs all damaged bits",
        "The frame becomes a DHCP request",
        "The network mask is automatically enlarged",
        "The receiver forwards it unchanged to every port"
      ],
      "answer": 0,
      "explanation": "Ethernet error detection does not itself repair the frame. Higher-layer recovery depends on the transport/application; UDP itself does not guarantee retransmission.",
      "source": "Lecture 3 · slides 32"
    },
    {
      "id": "Bv2-21",
      "number": 21,
      "chapter": 3,
      "question": "Each message has 240 bytes of user data, a 20-byte TCP header, a 20-byte IP header and 40 bytes of other overhead. What is overall efficiency?",
      "options": [
        "25%",
        "75%",
        "80%",
        "92.31%",
        "85.71%"
      ],
      "answer": 1,
      "explanation": "Total overhead = 20 + 20 + 40 = 80 bytes. Total transmitted = 240 + 80 = 320 bytes. Efficiency = 240 / 320 = 75%. Use the overhead explicitly stated in the question.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Bv2-22",
      "number": 22,
      "chapter": 3,
      "question": "Payload falls from 240 bytes to 24 bytes while overhead stays at 80 bytes. What happens to efficiency?",
      "options": [
        "It falls to exactly 10%",
        "It becomes 100%",
        "It rises to about 92.31%",
        "It remains 75%",
        "It falls to about 23.08%"
      ],
      "answer": 4,
      "explanation": "The new ratio is 24 / (24 + 80) = 24 / 104 = 23.08%. Smaller payloads devote a larger share of transmitted bytes to fixed overhead.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Bv2-23",
      "number": 23,
      "chapter": 4,
      "question": "A Class C network requires at least 12 equal-size subnets. What is the maximum usable host count after borrowing the minimum bits?",
      "options": [
        "14",
        "30",
        "16",
        "62",
        "12"
      ],
      "answer": 0,
      "explanation": "Borrow 4 bits because 2^3 = 8 is insufficient and 2^4 = 16 is sufficient. Four host bits remain, giving 2^4 - 2 = 14 usable hosts.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Bv2-24",
      "number": 24,
      "chapter": 4,
      "question": "Consider a Class B network using mask 255.255.255.192. What is the maximum subnet count?",
      "options": [
        "512",
        "256",
        "64",
        "1,024",
        "62"
      ],
      "answer": 3,
      "explanation": "The /26 mask borrows 26 - 16 = 10 bits from the original Class B host portion. Subnets = 2^10 = 1,024. The host count would instead be 62.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Bv2-25",
      "number": 25,
      "chapter": 4,
      "question": "A Class A network needs at least 17 equal-size subnets. How many bits must be borrowed?",
      "options": [
        "5",
        "4",
        "24",
        "17",
        "8"
      ],
      "answer": 0,
      "explanation": "2^4 = 16 is insufficient; 2^5 = 32 is sufficient. Choose the smallest borrowed-bit count meeting the requirement.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Bv2-26",
      "number": 26,
      "chapter": 4,
      "question": "Which of the following is a valid conventional IPv4 subnet mask?",
      "options": [
        "255.224.255.0",
        "255.255.255.7",
        "0.0.0.255",
        "255.255.224.0",
        "255.255.32.0"
      ],
      "answer": 3,
      "explanation": "A conventional mask has contiguous 1-bits followed by 0-bits. 224 is 11100000, so 255.255.224.0 is /19. Each other choice introduces 1-bits after a 0.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Bv2-27",
      "number": 27,
      "chapter": 4,
      "question": "TCP source and destination port numbers identify...",
      "options": [
        "The Ethernet frame's collision counter",
        "The original Class A network ID",
        "The optical fiber's core diameter",
        "The physical RJ45 sockets on the distribution switch",
        "The applications or processes communicating at the endpoints"
      ],
      "answer": 4,
      "explanation": "Transport port numbers distinguish endpoint applications/processes. They are logical numbers, not physical cable sockets.",
      "source": "Lecture 4 · slides 8"
    },
    {
      "id": "Bv2-28",
      "number": 28,
      "chapter": 4,
      "question": "Which pairing is correct?",
      "options": [
        "DHCP: routing cost; DNS: host-bit borrowing",
        "DHCP: TCP segmentation; DNS: cable shielding",
        "DHCP: leased IP settings; DNS: hostname-to-IP resolution",
        "DHCP: hostname-to-MAC resolution; DNS: collision detection",
        "DHCP: Ethernet FCS; DNS: application logic distribution"
      ],
      "answer": 2,
      "explanation": "DHCP supplies IP configuration through leases. DNS resolves hostnames to IP addresses. ARP resolves a local next-hop IPv4 address to a MAC address.",
      "source": "Lecture 4 · slides 11,12"
    },
    {
      "id": "Bv2-29",
      "number": 29,
      "chapter": 4,
      "question": "Which statement about protocol layers is correct?",
      "options": [
        "Ethernet frames are application-layer PDUs",
        "UDP itself guarantees ordered, reliable delivery",
        "UDP datagrams are transport PDUs; IP packets are network PDUs",
        "TCP segments belong to the physical layer",
        "IP is the most common transport protocol"
      ],
      "answer": 2,
      "explanation": "Specify the protocol when using the word datagram: UDP is transport, whereas IP packets may also be called IP datagrams. TCP segments are transport units.",
      "source": "Lecture 4 · slides 8,10"
    },
    {
      "id": "Bv2-30",
      "number": 30,
      "chapter": 4,
      "question": "Which routing decision matches the lecture's RIP and OSPF examples?",
      "options": [
        "OSPF always chooses the fewest routers regardless of cost",
        "RIP is a frame error-correction code",
        "RIP leases host addresses; OSPF resolves names",
        "RIP compares hop counts; OSPF compares route costs",
        "Both protocols only count physical cable metres"
      ],
      "answer": 3,
      "explanation": "The distance-vector example RIP uses hop count. The link-state example OSPF uses cost. A best route depends on the protocol metric, not simply geographic distance.",
      "source": "Lecture 4 · slides 22,23"
    }
  ],
  "drills": [
    {
      "id": "Dv2-1",
      "number": 1,
      "chapter": 1,
      "question": "A network can accommodate more users without unacceptable deterioration. Which goal does this illustrate most directly?",
      "options": [
        "Presentation logic",
        "Collision detection",
        "Name resolution",
        "Scalability",
        "Serial transmission"
      ],
      "answer": 3,
      "explanation": "Scalability concerns accommodating growth. Performance concerns service quality such as response time/throughput; availability concerns whether service is operational.",
      "source": "Lecture 1 · slides 23; Goal application"
    },
    {
      "id": "Dv2-2",
      "number": 2,
      "chapter": 1,
      "question": "A second independent path keeps a service reachable after one link fails. Which goal is addressed most directly?",
      "options": [
        "Host-bit allocation",
        "Media conversion",
        "Character encoding",
        "Application formatting",
        "Availability"
      ],
      "answer": 4,
      "explanation": "Availability concerns keeping services operational. Redundancy can support it, although failover must actually be configured and work.",
      "source": "Lecture 1 · slides 23; Goal application"
    },
    {
      "id": "Dv2-3",
      "number": 3,
      "chapter": 1,
      "question": "A bottleneck is removed and response time improves. Which goal is addressed most directly?",
      "options": [
        "Performance",
        "Database ownership",
        "Address classification",
        "Extranet membership",
        "Core-layer scope"
      ],
      "answer": 0,
      "explanation": "Performance includes response time and throughput. Better response does not by itself demonstrate redundancy or accommodation of unlimited growth.",
      "source": "Lecture 1 · slides 23; Goal application"
    },
    {
      "id": "Dv2-4",
      "number": 4,
      "chapter": 1,
      "question": "Which structured-design layer directly forms a LAN by connecting computers and printers?",
      "options": [
        "Distribution",
        "Core",
        "Session",
        "Access",
        "Presentation"
      ],
      "answer": 3,
      "explanation": "The access layer connects endpoints. Distribution interconnects the resulting LANs, and core interconnects building backbones in the lecture's multi-building model.",
      "source": "Lecture 1 · slides 28"
    },
    {
      "id": "Dv2-5",
      "number": 5,
      "chapter": 1,
      "question": "An intranet normally makes organizational information available to...",
      "options": [
        "Only invited suppliers outside the organization",
        "Only devices with public static IP addresses",
        "Only routers operated by an ISP",
        "Every anonymous Internet user",
        "Authorized users inside the organization"
      ],
      "answer": 4,
      "explanation": "The access distinction is internal authorized users. An extranet extends selected access to invited external users.",
      "source": "Lecture 1 · slides 27"
    },
    {
      "id": "Dv2-6",
      "number": 6,
      "chapter": 1,
      "question": "Which network type is described as a high-speed network connecting other networks?",
      "options": [
        "Backbone network",
        "Thin client",
        "Modem",
        "Transaction-processing system",
        "Transport port"
      ],
      "answer": 0,
      "explanation": "A backbone interconnects networks. Its function differs from that of a client application or an individual device's access connection.",
      "source": "Lecture 1 · slides 26"
    },
    {
      "id": "Dv2-7",
      "number": 7,
      "chapter": 1,
      "question": "In the component view, a circuit is...",
      "options": [
        "A source transport port",
        "An application architecture",
        "A communication pathway between network components",
        "A subnet's broadcast address",
        "A database query"
      ],
      "answer": 2,
      "explanation": "Circuits may use copper, fiber or wireless media. They are communication pathways, not application functions or IP address categories.",
      "source": "Lecture 1 · slides 32"
    },
    {
      "id": "Dv2-8",
      "number": 8,
      "chapter": 1,
      "question": "Communication protocols can be implemented...",
      "options": [
        "Only in a two-device network",
        "Only at the transport layer",
        "Only as a browser application",
        "In hardware, software, or a combination",
        "Only inside a device driver"
      ],
      "answer": 3,
      "explanation": "Protocols are agreed communication rules. The slides explicitly note hardware implementation of some physical-layer rules.",
      "source": "Lecture 1 · slides 34"
    },
    {
      "id": "Dv2-9",
      "number": 9,
      "chapter": 1,
      "question": "Logical communication between corresponding layers on different systems is...",
      "options": [
        "Horizontal communication",
        "Intermodulation noise",
        "Half-duplex polling",
        "Vertical communication",
        "Static addressing"
      ],
      "answer": 0,
      "explanation": "Horizontal describes peer layers across systems. Vertical describes adjacent layers within one system.",
      "source": "Lecture 1 · slides 35"
    },
    {
      "id": "Dv2-10",
      "number": 10,
      "chapter": 1,
      "question": "In the OSI model, data-format translation, compression and encryption are associated with which layer?",
      "options": [
        "Network",
        "Transport",
        "Physical",
        "Presentation",
        "Data link"
      ],
      "answer": 3,
      "explanation": "The OSI presentation layer covers data representation. The five-layer Internet Model groups these upper-layer functions differently, so identify which model the question uses.",
      "source": "Lecture 1 · slides 38"
    },
    {
      "id": "Dv2-11",
      "number": 11,
      "chapter": 1,
      "question": "Which OSI layer initiates, maintains and terminates sessions in the lecture's layer summary?",
      "options": [
        "Network",
        "Presentation",
        "Data link",
        "Physical",
        "Session"
      ],
      "answer": 4,
      "explanation": "Session is an OSI upper layer. Lecture 4 also discusses session management as a transport function in its TCP/IP context.",
      "source": "Lecture 1 · slides 38"
    },
    {
      "id": "Dv2-12",
      "number": 12,
      "chapter": 1,
      "question": "Defining how individual bits are represented and which connectors are used belongs primarily to...",
      "options": [
        "The network layer",
        "The DNS service",
        "The application tier",
        "The physical layer",
        "Services logic"
      ],
      "answer": 3,
      "explanation": "Physical-layer specifications cover signals, bit representation and connectors. Data link uses frames and MAC addresses.",
      "source": "Lecture 1 · slides 40"
    },
    {
      "id": "Dv2-13",
      "number": 13,
      "chapter": 1,
      "question": "A de jure standard is...",
      "options": [
        "A privately assigned IP address",
        "Formalized by an industry or government standards body",
        "A software license paid annually",
        "Accepted only because one office uses it",
        "A circuit without a connector"
      ],
      "answer": 1,
      "explanation": "De jure means formally standardized. De facto means widely adopted without that formal standardization status in the lecture's comparison.",
      "source": "Lecture 1 · slides 45"
    },
    {
      "id": "Dv2-14",
      "number": 14,
      "chapter": 1,
      "question": "Daily equipment management and troubleshooting are primarily duties of a...",
      "options": [
        "DHCP lease",
        "Presentation-layer codec",
        "TPS customer",
        "Network administrator",
        "Cable's optical core"
      ],
      "answer": 3,
      "explanation": "The designer plans architecture for a new or expanded network; the administrator manages daily operations and troubleshooting.",
      "source": "Lecture 1 · slides 48"
    },
    {
      "id": "Dv2-15",
      "number": 15,
      "chapter": 1,
      "question": "A small business has three LANs on one floor. Which design fits the lecture's structured model?",
      "options": [
        "A WAN for each workstation-to-switch link",
        "A separate campus core for every printer",
        "Access layers for the LANs and a distribution layer connecting them",
        "A core layer only, with no endpoint connections",
        "Only application servers, with no access devices"
      ],
      "answer": 2,
      "explanation": "The topology needs endpoint access and inter-LAN distribution. The stated single-building scope does not call for the course's campus core layer.",
      "source": "Lecture 1 · slides 28; Scenario practice"
    },
    {
      "id": "Dv2-16",
      "number": 16,
      "chapter": 2,
      "question": "A TPS transaction normally causes...",
      "options": [
        "The circuit to switch automatically to fiber",
        "Every frame to be sent to all switch ports",
        "The physical layer to stop using signals",
        "All network addresses to become public",
        "Business data to be captured, processed and reflected in database updates"
      ],
      "answer": 4,
      "explanation": "TPS process business events such as orders and payments. The cycle includes entry, processing, database updates and output.",
      "source": "Lecture 2 · slides 5"
    },
    {
      "id": "Dv2-17",
      "number": 17,
      "chapter": 2,
      "question": "Which TPS function handles the user interface?",
      "options": [
        "Services logic",
        "Data access logic",
        "Network routing",
        "Presentation logic",
        "Data storage"
      ],
      "answer": 3,
      "explanation": "Presentation logic concerns user interaction. Application logic performs business work; data access handles queries.",
      "source": "Lecture 2 · slides 7"
    },
    {
      "id": "Dv2-18",
      "number": 18,
      "chapter": 2,
      "question": "Which function handles a query for a subset of stored data?",
      "options": [
        "Media access control",
        "Presentation logic",
        "Physical signaling",
        "Subnet routing",
        "Data access logic"
      ],
      "answer": 4,
      "explanation": "Data access logic determines the query needed to access the requested subset. It is not the same as storing the data.",
      "source": "Lecture 2 · slides 7"
    },
    {
      "id": "Dv2-19",
      "number": 19,
      "chapter": 2,
      "question": "In the lecture's host-based architecture, the host handles...",
      "options": [
        "Only the user interface",
        "All five application functions",
        "Only IP address assignment",
        "Only data storage",
        "Only wireless media access"
      ],
      "answer": 1,
      "explanation": "Host-based centralizes the application functions on the host. Terminals send and receive interaction messages rather than performing the distributed application work.",
      "source": "Lecture 2 · slides 8"
    },
    {
      "id": "Dv2-20",
      "number": 20,
      "chapter": 2,
      "question": "In client-based architecture, the server primarily handles...",
      "options": [
        "Presentation and all application logic",
        "All query logic and services logic",
        "Data storage",
        "Collision detection for all clients",
        "Every client's user interface"
      ],
      "answer": 2,
      "explanation": "The lecture places storage at the server and data access, application and presentation logic at the client. Services logic is absent in that simplified model.",
      "source": "Lecture 2 · slides 9"
    },
    {
      "id": "Dv2-21",
      "number": 21,
      "chapter": 2,
      "question": "Which scalability limitation is identified for client-based architecture?",
      "options": [
        "Automatic load balancing among unlimited servers",
        "An infinite number of supported users",
        "All clients sharing no resources at all",
        "No data transferred over network circuits",
        "Limited server-side processing and storage capacity"
      ],
      "answer": 4,
      "explanation": "A microcomputer acting as the storage server has limited capacity. Unnecessary data transfer also contributes to poor performance.",
      "source": "Lecture 2 · slides 9"
    },
    {
      "id": "Dv2-22",
      "number": 22,
      "chapter": 2,
      "question": "Which function is normally assigned to the client in client-server architecture?",
      "options": [
        "Presentation logic",
        "All database storage",
        "All services logic",
        "Every other client's application logic",
        "All database access logic"
      ],
      "answer": 0,
      "explanation": "The client handles presentation. Server-side functions include data access, storage and services; application logic may be split.",
      "source": "Lecture 2 · slides 10"
    },
    {
      "id": "Dv2-23",
      "number": 23,
      "chapter": 2,
      "question": "The lecture's rule of thumb associates fewer than 50 users with...",
      "options": [
        "A two-tier client-server architecture",
        "A Class A address with no subnetting",
        "A required seven-tier architecture",
        "A mandatory multi-building core",
        "A peer-to-peer replacement for every TPS"
      ],
      "answer": 0,
      "explanation": "This is a lecture rule of thumb rather than a universal technical limit. Two-tier uses client and server roles with application logic allocated between them.",
      "source": "Lecture 2 · slides 12"
    },
    {
      "id": "Dv2-24",
      "number": 24,
      "chapter": 2,
      "question": "A thick client normally has...",
      "options": [
        "Only Ethernet error-detection code",
        "All or most application logic on the client",
        "No application logic on the client",
        "No presentation logic",
        "A mandatory copy of every other client's routing table"
      ],
      "answer": 1,
      "explanation": "Thin/thick refers to how much application logic resides locally. It does not describe the physical size of the computer or its cable.",
      "source": "Lecture 2 · slides 14"
    },
    {
      "id": "Dv2-25",
      "number": 25,
      "chapter": 2,
      "question": "Why can thin clients simplify application maintenance?",
      "options": [
        "Application updates can be concentrated on servers",
        "They require the entire database on each desktop",
        "They guarantee all servers will never fail",
        "They remove every operating system",
        "They convert all applications into peer-to-peer services"
      ],
      "answer": 0,
      "explanation": "Centralized application logic reduces the number of installations that need updating. Availability remains a separate concern.",
      "source": "Lecture 2 · slides 14"
    },
    {
      "id": "Dv2-26",
      "number": 26,
      "chapter": 2,
      "question": "Which is a disadvantage of adding tiers?",
      "options": [
        "Elimination of all load balancing",
        "Guaranteed loss of all scalability",
        "Greater software complexity and additional communication between tiers",
        "Mandatory removal of the database",
        "Prohibition of browser access"
      ],
      "answer": 2,
      "explanation": "Tiered designs can support load balancing and scaling, but each tier adds coordination and communication costs.",
      "source": "Lecture 2 · slides 18"
    },
    {
      "id": "Dv2-27",
      "number": 27,
      "chapter": 2,
      "question": "Software as a Service supplies...",
      "options": [
        "Only client-side data access logic",
        "Only cables, with all software supplied by the customer",
        "Only a company's private subnet mask",
        "The application and supporting provider infrastructure",
        "Only programming tools, with no application supplied"
      ],
      "answer": 3,
      "explanation": "In the lecture's SaaS model, the third party supplies hardware and software, including the application. The customer consumes the service.",
      "source": "Lecture 2 · slides 20"
    },
    {
      "id": "Dv2-28",
      "number": 28,
      "chapter": 2,
      "question": "Cloud computing is described in the lecture as a variation of...",
      "options": [
        "Coaxial cable shielding",
        "An IPv4 subnet mask",
        "Client-server architecture",
        "Simplex data flow",
        "The physical signaling model"
      ],
      "answer": 2,
      "explanation": "Cloud services outsource all or part of infrastructure while clients access services over a network. This does not define a new physical-layer circuit type.",
      "source": "Lecture 2 · slides 19"
    },
    {
      "id": "Dv2-29",
      "number": 29,
      "chapter": 2,
      "question": "Which architecture is recommended for some large-volume main-line TPS applications?",
      "options": [
        "Only a wireless multipoint circuit",
        "Host-based architecture",
        "Client-based architecture for every TPS",
        "Only a DNS server",
        "Only unmanaged peer-to-peer file sharing"
      ],
      "answer": 1,
      "explanation": "The slides allow host-based systems for the main business of large organizations processing large volumes of data. Client-server is recommended more generally; choice should be justified against goals.",
      "source": "Lecture 2 · slides 23"
    },
    {
      "id": "Dv2-30",
      "number": 30,
      "chapter": 2,
      "question": "Choosing client-server architecture alone guarantees which of the following?",
      "options": [
        "Unlimited simultaneous users",
        "No hardware/software compatibility work",
        "None of the listed guarantees",
        "No possible server overload",
        "Zero downtime without redundancy"
      ],
      "answer": 2,
      "explanation": "An architecture enables design choices but does not guarantee capacity or failure tolerance. The slides note compatibility challenges, and redundancy/capacity must be implemented separately.",
      "source": "Lecture 2 · slides 23; Goal application"
    },
    {
      "id": "Dv2-31",
      "number": 31,
      "chapter": 3,
      "question": "Guided media carry transmissions...",
      "options": [
        "Only through DNS names",
        "Along a physical cable medium",
        "Only through open air",
        "Only through satellites",
        "Without any signals"
      ],
      "answer": 1,
      "explanation": "Twisted-pair, coax and fiber are guided media. Radio is wireless/radiated media.",
      "source": "Lecture 3 · slides 9"
    },
    {
      "id": "Dv2-32",
      "number": 32,
      "chapter": 3,
      "question": "Why are conductors twisted into pairs?",
      "options": [
        "To perform TCP reassembly",
        "To assign IP addresses",
        "To generate DNS names",
        "To reduce electromagnetic interference",
        "To make every cable full-duplex automatically"
      ],
      "answer": 3,
      "explanation": "Twisting helps reduce interference. It does not define application protocols, addresses or the circuit's logical configuration.",
      "source": "Lecture 3 · slides 10"
    },
    {
      "id": "Dv2-33",
      "number": 33,
      "chapter": 3,
      "question": "Which statement about single-mode fiber matches Lecture 3?",
      "options": [
        "It requires a modem on an analog telephone circuit",
        "It must use eight copper conductors",
        "Suitable fiber systems can support about 100 km or more",
        "It has a universal 40 km maximum for all systems",
        "It is always limited to 100 m"
      ],
      "answer": 2,
      "explanation": "The lecture describes single-mode fiber spans of 100 km or more. Actual reach depends on optics and the system; avoid treating one Ethernet optic's rating as a universal fiber limit.",
      "source": "Lecture 3 · slides 12,13"
    },
    {
      "id": "Dv2-34",
      "number": 34,
      "chapter": 3,
      "question": "Fiber-optic data transmission uses...",
      "options": [
        "Only broadcast radio channels",
        "Light through an optical core",
        "Only collision-detection pulses",
        "Only analog telephone carrier tones",
        "Only voltage changes in eight copper wires"
      ],
      "answer": 1,
      "explanation": "Fiber's core carries optical signals from lasers or LEDs. Its immunity to electromagnetic interference is a major benefit.",
      "source": "Lecture 3 · slides 12"
    },
    {
      "id": "Dv2-35",
      "number": 35,
      "chapter": 3,
      "question": "Terrestrial microwave communication generally requires...",
      "options": [
        "No allowance for weather effects",
        "A twisted pair for each radio wave",
        "Line of sight between antennas",
        "A private /24 subnet on every tower",
        "A server-side SQL query"
      ],
      "answer": 2,
      "explanation": "The slides emphasize line of sight, antenna/tower placement and weather effects. Range is affected by geography and Earth's curvature.",
      "source": "Lecture 3 · slides 15"
    },
    {
      "id": "Dv2-36",
      "number": 36,
      "chapter": 3,
      "question": "Serial transmission sends...",
      "options": [
        "One whole byte at a time over parallel channels",
        "One bit at a time over a serial channel",
        "Only Ethernet FCS fields",
        "Only analog voice with no conversion",
        "All subnets simultaneously"
      ],
      "answer": 1,
      "explanation": "Serial versus parallel describes how bits are transmitted, not whether communication is simplex, half-duplex or full-duplex.",
      "source": "Lecture 3 · slides 19"
    },
    {
      "id": "Dv2-37",
      "number": 37,
      "chapter": 3,
      "question": "A VoIP codec is used to...",
      "options": [
        "Forward Ethernet frames by MAC address",
        "Shield an underwater copper cable",
        "Create Class B subnet masks",
        "Convert analog voice into digital form and back",
        "Lease public IPv4 addresses"
      ],
      "answer": 3,
      "explanation": "The codec example digitizes voice for a digital circuit and converts it back at the destination. This differs from modem modulation of digital data over analog circuits.",
      "source": "Lecture 3 · slides 23"
    },
    {
      "id": "Dv2-38",
      "number": 38,
      "chapter": 3,
      "question": "Contention access means...",
      "options": [
        "Stations attempt transmission when the shared circuit is available without central permission",
        "Every host receives a permanent public IP",
        "A controller always assigns a turn before every transmission",
        "Every collision is corrected by CRC",
        "Two application tiers become one"
      ],
      "answer": 0,
      "explanation": "Contention uses decentralized attempts to access an available shared medium. Controlled access coordinates permission or turns.",
      "source": "Lecture 3 · slides 27,28"
    },
    {
      "id": "Dv2-39",
      "number": 39,
      "chapter": 3,
      "question": "Roll-call polling involves...",
      "options": [
        "DNS translating a hostname",
        "Every client transmitting at once without control",
        "A controller checking devices periodically to see if they need to transmit",
        "A receiver repairing damaged frames",
        "A router changing cable insulation"
      ],
      "answer": 2,
      "explanation": "Roll-call polling is a controlled-access approach. The central controller determines opportunities to transmit.",
      "source": "Lecture 3 · slides 29"
    },
    {
      "id": "Dv2-40",
      "number": 40,
      "chapter": 3,
      "question": "Why can controlled access be preferable under heavy shared-medium traffic?",
      "options": [
        "It makes every circuit physically full-duplex",
        "It guarantees infinite bandwidth",
        "It removes the need for data-link protocols",
        "It eliminates all control overhead",
        "Coordination can reduce the collision cost of contention"
      ],
      "answer": 4,
      "explanation": "Contention has less coordination overhead at low load, but collision cost can rise under heavy load. Controlled access has its own overhead and does not create unlimited capacity.",
      "source": "Lecture 3 · slides 30"
    },
    {
      "id": "Dv2-41",
      "number": 41,
      "chapter": 3,
      "question": "Attenuation is...",
      "options": [
        "An increase in usable subnet addresses",
        "A gradual reduction in signal strength over distance",
        "A method of encrypting Ethernet headers",
        "A collision between database transactions",
        "A duplicate hostname in DNS"
      ],
      "answer": 1,
      "explanation": "The lecture links attenuation to distance limits and the use of repeaters. It differs from interference or damaged application data entry.",
      "source": "Lecture 3 · slides 31"
    },
    {
      "id": "Dv2-42",
      "number": 42,
      "chapter": 3,
      "question": "The Ethernet FCS field contains...",
      "options": [
        "The client's presentation logic",
        "The entire routing table",
        "The subnet mask of every connected device",
        "The DHCP lease duration",
        "An error-checking CRC value"
      ],
      "answer": 4,
      "explanation": "The receiver checks the FCS/CRC to detect corruption. FCS is overhead rather than application payload.",
      "source": "Lecture 3 · slides 32,33"
    },
    {
      "id": "Dv2-43",
      "number": 43,
      "chapter": 3,
      "question": "With fixed overhead, increasing the payload per transmission normally...",
      "options": [
        "Guarantees lower delay for every user",
        "Changes the original network class",
        "Eliminates all protocol standards",
        "Increases the useful-data percentage",
        "Decreases useful-data percentage in every case"
      ],
      "answer": 3,
      "explanation": "Efficiency = payload / (payload + overhead). More payload spreads fixed overhead over more useful data, but larger messages may have delay and standards trade-offs.",
      "source": "Lecture 3 · slides 33"
    },
    {
      "id": "Dv2-44",
      "number": 44,
      "chapter": 3,
      "question": "A transmission contains 90 useful bytes and 30 overhead bytes. What is efficiency?",
      "options": [
        "66.67%",
        "30%",
        "75%",
        "90%",
        "25%"
      ],
      "answer": 2,
      "explanation": "90 / (90 + 30) = 90 / 120 = 75%. Use transmitted total as the denominator, not useful bytes alone.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Dv2-45",
      "number": 45,
      "chapter": 3,
      "question": "An application batches two 90-byte updates into one transmission with 30 bytes of overhead. What is efficiency?",
      "options": [
        "75%",
        "100%",
        "About 85.71%",
        "About 66.67%",
        "50%"
      ],
      "answer": 2,
      "explanation": "Useful data = 180 bytes; total = 180 + 30 = 210. Efficiency = 180 / 210 = 85.71%. Batching can improve efficiency but may add waiting time.",
      "source": "Lecture 3 · slides 33; Efficiency practice"
    },
    {
      "id": "Dv2-46",
      "number": 46,
      "chapter": 4,
      "question": "Segmentation and reassembly are primarily functions of the...",
      "options": [
        "Data-link layer",
        "Transport layer",
        "Physical layer",
        "Network layer alone",
        "Core design layer"
      ],
      "answer": 1,
      "explanation": "Transport divides messages into appropriate units and reassembles received data. Network handles IP addressing and routing.",
      "source": "Lecture 4 · slides 4,8"
    },
    {
      "id": "Dv2-47",
      "number": 47,
      "chapter": 4,
      "question": "A TCP transport-layer PDU is called a...",
      "options": [
        "Routing table",
        "Frame",
        "Segment",
        "MAC address",
        "Subnet mask"
      ],
      "answer": 2,
      "explanation": "TCP uses segments. UDP uses datagrams; data link uses frames. A PDU name must be interpreted in its protocol context.",
      "source": "Lecture 4 · slides 8"
    },
    {
      "id": "Dv2-48",
      "number": 48,
      "chapter": 4,
      "question": "Which transport protocol uses connection-oriented delivery mechanisms in the lecture?",
      "options": [
        "UDP",
        "IP",
        "ARP",
        "TCP",
        "Ethernet"
      ],
      "answer": 3,
      "explanation": "TCP establishes a connection and supplies reliable-delivery mechanisms. UDP is connectionless; IP is network layer.",
      "source": "Lecture 4 · slides 9"
    },
    {
      "id": "Dv2-49",
      "number": 49,
      "chapter": 4,
      "question": "Who normally configures network QoS policies?",
      "options": [
        "Every CRC remainder",
        "The copper conductor",
        "The IPv4 address class",
        "The network administrator",
        "The DNS hostname itself"
      ],
      "answer": 3,
      "explanation": "Applications determine their protocol behavior; administrators configure QoS treatment using compatible devices and software.",
      "source": "Lecture 4 · slides 9"
    },
    {
      "id": "Dv2-50",
      "number": 50,
      "chapter": 4,
      "question": "Why does DHCP lease addresses rather than requiring permanent manual assignment for every client?",
      "options": [
        "It repairs every corrupted frame",
        "It automates configuration and allows address reuse as clients come and go",
        "It chooses the best route through all ISPs",
        "It adds eight host bits to every Class C address",
        "It converts private addresses into MAC addresses"
      ],
      "answer": 1,
      "explanation": "Dynamic addressing reduces manual work and inefficient permanent allocation. DHCP leases are not routing updates or error correction.",
      "source": "Lecture 4 · slides 11"
    },
    {
      "id": "Dv2-51",
      "number": 51,
      "chapter": 4,
      "question": "DNS primarily translates...",
      "options": [
        "A subnet mask into a cable grade",
        "A MAC address into a CRC",
        "A hostname into an IP address",
        "A collision into a routing metric",
        "An analog voice waveform into bits"
      ],
      "answer": 2,
      "explanation": "Name resolution allows readable hostnames to be used for IP destinations. ARP handles local MAC resolution.",
      "source": "Lecture 4 · slides 12"
    },
    {
      "id": "Dv2-52",
      "number": 52,
      "chapter": 4,
      "question": "Which address-size pairing is correct?",
      "options": [
        "IPv4: 16 bits; IPv6: 64 bits; Ethernet MAC: 8 bits",
        "IPv4: 48 bits; IPv6: 32 bits; Ethernet MAC: 128 bits",
        "All three use 32 bits",
        "IPv4: 32 bits; IPv6: 128 bits; Ethernet MAC: 48 bits",
        "IPv4: 128 bits; IPv6: 48 bits; Ethernet MAC: 32 bits"
      ],
      "answer": 3,
      "explanation": "These addresses belong to different roles and formats. An IPv4 address has four 8-bit octets; an Ethernet MAC is normally shown in hexadecimal.",
      "source": "Lecture 4 · slides 13"
    },
    {
      "id": "Dv2-53",
      "number": 53,
      "chapter": 4,
      "question": "Which statement about public/private and static/dynamic addressing is true?",
      "options": [
        "Every public address must be static",
        "Static addresses cannot be used on servers",
        "Every private address must be dynamic",
        "Dynamic addresses cannot be public",
        "They describe separate properties of an address assignment"
      ],
      "answer": 4,
      "explanation": "Public/private concerns routing scope; static/dynamic concerns assignment. A public client address can be dynamically assigned.",
      "source": "Lecture 4 · slides 13"
    },
    {
      "id": "Dv2-54",
      "number": 54,
      "chapter": 4,
      "question": "Under the lecture's IPv4 Internet-access model, private internal addresses require...",
      "options": [
        "A modem on every switch port",
        "CRC correction on every packet",
        "A different MAC-address length",
        "Removal of the transport layer",
        "NAT at the Internet boundary"
      ],
      "answer": 4,
      "explanation": "NAT translates internal private addresses for Internet access. Private addresses are not globally routed directly on the public Internet.",
      "source": "Lecture 4 · slides 13"
    },
    {
      "id": "Dv2-55",
      "number": 55,
      "chapter": 4,
      "question": "A Class B address has which original network prefix?",
      "options": [
        "/8",
        "/24",
        "/27",
        "/32",
        "/16"
      ],
      "answer": 4,
      "explanation": "The classful defaults are A /8, B /16 and C /24. The supplied subnet mask can extend the original prefix.",
      "source": "Lecture 4 · slides 16,19"
    },
    {
      "id": "Dv2-56",
      "number": 56,
      "chapter": 4,
      "question": "A Class C network must support at least 50 usable hosts per subnet. What mask allows the most equal-size subnets?",
      "options": [
        "255.255.255.224",
        "255.255.255.252",
        "255.255.255.248",
        "255.255.255.240",
        "255.255.255.192"
      ],
      "answer": 4,
      "explanation": "Five host bits give 30, insufficient; six give 62, sufficient. /26 leaves six host bits and borrows two from /24, giving four subnets.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Dv2-57",
      "number": 57,
      "chapter": 4,
      "question": "A Class B network uses /23. How many equal-size subnets are available within the original /16 block?",
      "options": [
        "128",
        "254",
        "512",
        "23",
        "126"
      ],
      "answer": 0,
      "explanation": "Borrowed bits = 23 - 16 = 7. Subnets = 2^7 = 128. The course subtracts two from host counts, not subnet counts.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Dv2-58",
      "number": 58,
      "chapter": 4,
      "question": "A conventional /28 subnet supports how many usable host addresses?",
      "options": [
        "240",
        "254",
        "14",
        "16",
        "28"
      ],
      "answer": 2,
      "explanation": "Host bits = 32 - 28 = 4. Usable hosts = 2^4 - 2 = 14, excluding the network and broadcast addresses.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Dv2-59",
      "number": 59,
      "chapter": 4,
      "question": "Which statement correctly explains the subnet/host trade-off?",
      "options": [
        "Usable host counts never change when a mask changes",
        "Borrowing bits increases both without any limit",
        "Borrowing more host bits creates more subnets but fewer hosts per subnet",
        "Subnetting creates extra IPv4 address bits",
        "The subnet count always equals the last mask octet"
      ],
      "answer": 2,
      "explanation": "Within a fixed original address block, subnet bits and remaining host bits share a fixed bit budget. More of one leaves fewer of the other.",
      "source": "Lecture 4 · slides 19"
    },
    {
      "id": "Dv2-60",
      "number": 60,
      "chapter": 4,
      "question": "Static routing uses...",
      "options": [
        "Only DNS answers as forwarding entries",
        "Automatic exchange of all routes with no manual configuration",
        "Routes configured by an administrator",
        "DHCP leases to discover every WAN route",
        "Only Ethernet collision counters"
      ],
      "answer": 2,
      "explanation": "Static routing uses manually configured routes. Dynamic routing protocols exchange information and update learned routes.",
      "source": "Lecture 4 · slides 22"
    }
  ]
};
