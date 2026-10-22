/* Set C: new slide-based questions, added October 22, 2026. */
window.practiceSets.setC = [
  {
    "id": "Cv3-1",
    "number": 1,
    "chapter": 3,
    "question": "Which statement correctly distinguishes physical and logical circuits?",
    "options": [
      "Physical circuits describe application logic; logical circuits describe cable colour",
      "Physical circuits are always wireless; logical circuits are always copper",
      "Logical circuits are the same as Internet domain names",
      "A point-to-point circuit must be simplex",
      "Physical circuits describe the medium; logical circuits describe transmission characteristics"
    ],
    "answer": 4,
    "explanation": "The physical circuit is the cable or wireless medium. The logical description includes shared versus point-to-point operation and data-flow direction.",
    "source": "Physical/Data Link lecture slides 6-8"
  },
  {
    "id": "Cv3-2",
    "number": 2,
    "chapter": 3,
    "question": "An organization needs a circuit longer than a typical 100 m desktop run through strong electrical interference. Which choice is best supported by the slides?",
    "options": [
      "Fiber of an appropriate grade with compatible optics",
      "Radio because walls and interference cannot affect it",
      "Coaxial cable because it is always the recommended organizational LAN medium",
      "Twisted pair because its maximum span is independent of attenuation",
      "A longer unshielded twisted-pair run with no other changes"
    ],
    "answer": 0,
    "explanation": "Fiber resists electromagnetic interference and supports longer spans, depending on the selected fiber and optics. Twisted-pair Ethernet channels typically have a 100 m limit.",
    "source": "Physical/Data Link lecture slides 10-18"
  },
  {
    "id": "Cv3-3",
    "number": 3,
    "chapter": 3,
    "question": "A device converts analog voice into digital form before it crosses a digital network. That device is a...",
    "options": [
      "Routing table",
      "Modem for analog telephone data transmission",
      "Patch panel",
      "DHCP server",
      "Codec"
    ],
    "answer": 4,
    "explanation": "A codec digitizes voice and converts received digital voice back to analog. In the lecture's modem example, digital computer data is carried over an analog circuit instead.",
    "source": "Physical/Data Link lecture slides 21-23"
  },
  {
    "id": "Cv3-4",
    "number": 4,
    "chapter": 3,
    "question": "With heavy traffic on a shared circuit, controlled access may outperform contention because...",
    "options": [
      "It reduces the cost of repeated collisions despite its control overhead",
      "It eliminates all protocol overhead",
      "It makes the nominal data rate unlimited",
      "It converts every radio link into full-duplex Ethernet",
      "It adds host bits to the subnet mask"
    ],
    "answer": 0,
    "explanation": "Contention has low coordination overhead at light load. Under heavier load, collisions and retries can make coordinated access more efficient. This is a traffic-dependent trade-off.",
    "source": "Physical/Data Link lecture slides 26-30"
  },
  {
    "id": "Cv3-5",
    "number": 5,
    "chapter": 3,
    "question": "Which statement correctly describes Ethernet error handling?",
    "options": [
      "CRC detects corruption; a bad frame is discarded rather than repaired by CRC",
      "All UDP applications automatically retransmit every discarded frame",
      "CRC reconstructs every corrupted bit at the receiver",
      "Ethernet FCS is used to choose the shortest IP route",
      "A passing CRC proves that no undetected error is possible"
    ],
    "answer": 0,
    "explanation": "CRC is error detection, not error correction. A reliable transport such as TCP can recover through retransmission; UDP itself does not guarantee that recovery.",
    "source": "Physical/Data Link lecture slides 31-32"
  },
  {
    "id": "Cv3-6",
    "number": 6,
    "chapter": 3,
    "question": "A transmission has 400 useful bytes and 100 bytes of total overhead. If payload falls to 100 bytes with the same overhead, how does efficiency change?",
    "options": [
      "From 80% to 50%",
      "It stays at 80%",
      "From 80% to 20%",
      "From 75% to 50%",
      "From 50% to 80%"
    ],
    "answer": 0,
    "explanation": "Original efficiency = 400/(400+100) = 80%. New efficiency = 100/(100+100) = 50%. Fixed overhead occupies a larger share of a smaller transmission.",
    "source": "Physical/Data Link lecture slides 33-34; fresh calculation"
  },
  {
    "id": "Cv3-7",
    "number": 7,
    "chapter": 4,
    "question": "Which statement about transport and network protocols is true?",
    "options": [
      "Every transport protocol guarantees ordered delivery",
      "TCP segments and UDP datagrams are transport units; IP packets are network units",
      "A UDP datagram belongs only to the physical layer",
      "TCP uses a destination MAC address to identify an application",
      "IP is a connection-oriented transport protocol"
    ],
    "answer": 1,
    "explanation": "Name the protocol when identifying a PDU. Datagram can refer to UDP at transport or IP at network. Port numbers identify applications/processes; MAC addresses serve local frame delivery.",
    "source": "Network/Transport lecture slides 8-10"
  },
  {
    "id": "Cv3-8",
    "number": 8,
    "chapter": 4,
    "question": "A host has IP settings but must obtain the MAC address of its local default gateway. Which protocol supplies that mapping for IPv4?",
    "options": [
      "DNS",
      "ARP",
      "OSPF",
      "TCP",
      "DHCP"
    ],
    "answer": 1,
    "explanation": "ARP resolves an IPv4 next hop to a local MAC address. The host uses the gateway's MAC for a remote-subnet destination, rather than resolving the remote host's MAC across the Internet.",
    "source": "Network/Transport lecture slides 11-13"
  },
  {
    "id": "Cv3-9",
    "number": 9,
    "chapter": 4,
    "question": "A Class B network requires at least 90 equal-size subnets. What mask results when the minimum number of bits is borrowed?",
    "options": [
      "255.255.255.0",
      "255.255.240.0",
      "255.255.254.0",
      "255.255.224.0",
      "255.255.252.0"
    ],
    "answer": 2,
    "explanation": "2^6 = 64 is insufficient; 2^7 = 128 is sufficient. Class B starts at /16, so the result is /23, or 255.255.254.0. Nine host bits remain, giving 510 usable hosts per subnet.",
    "source": "Network/Transport lecture slides 16-19; fresh calculation"
  },
  {
    "id": "Cv3-10",
    "number": 10,
    "chapter": 4,
    "question": "A Class C address is subnetted using 255.255.255.240. What are the maximum subnet and usable-host counts?",
    "options": [
      "16 subnets, 16 usable hosts each",
      "4 subnets, 62 usable hosts each",
      "240 subnets, 14 usable hosts each",
      "16 subnets, 14 usable hosts each",
      "14 subnets, 16 usable hosts each"
    ],
    "answer": 3,
    "explanation": "The /28 mask borrows four bits beyond Class C's /24. Subnets = 2^4 = 16; remaining host bits = 4, so usable hosts = 2^4 - 2 = 14.",
    "source": "Network/Transport lecture slides 19-21; fresh calculation"
  },
  {
    "id": "Cv3-11",
    "number": 11,
    "chapter": 4,
    "question": "A Class C network needs at least 45 usable hosts per subnet. Which mask allows the greatest number of equal-size subnets?",
    "options": [
      "255.255.255.240",
      "255.255.255.224",
      "255.255.255.248",
      "255.255.255.0",
      "255.255.255.192"
    ],
    "answer": 4,
    "explanation": "Five host bits give only 30 hosts; six give 62. Keep six host bits, producing /26 = 255.255.255.192. Two borrowed bits yield four subnets. /24 supports enough hosts but produces fewer subnets.",
    "source": "Network/Transport lecture slide 19; fresh calculation"
  },
  {
    "id": "Cv3-12",
    "number": 12,
    "chapter": 4,
    "question": "Which statement about IPv4 addressing is true?",
    "options": [
      "Every Class A address always has 24 usable host bits regardless of its mask",
      "Public addresses must always be assigned statically",
      "The final mask alone identifies the original classful block",
      "A mask of 255.255.32.0 is a valid conventional contiguous mask",
      "The final subnet mask determines host capacity, while the original block determines how many subnets fit"
    ],
    "answer": 4,
    "explanation": "The prefix length gives remaining host bits. Borrowed-bit count also requires the original prefix. Valid conventional masks have consecutive leftmost 1-bits followed by 0-bits.",
    "source": "Network/Transport lecture slides 13,19"
  },
  {
    "id": "Cv3-13",
    "number": 13,
    "chapter": 4,
    "question": "A network administrator manually enters a route that does not update through exchanges with neighbouring routers. This is...",
    "options": [
      "Dynamic addressing",
      "Dynamic link-state routing",
      "Static routing",
      "DNS resolution",
      "DHCP leasing"
    ],
    "answer": 2,
    "explanation": "Static routes are configured manually. Dynamic routing protocols exchange route information. DHCP concerns address configuration, not route discovery between routers.",
    "source": "Network/Transport lecture slides 22-23"
  },
  {
    "id": "Cv3-14",
    "number": 14,
    "chapter": 4,
    "question": "Which statement about QoS is correct?",
    "options": [
      "It requires suitable equipment/software and administrator policies for traffic treatment",
      "It is the same as a subnet mask",
      "It changes every application from UDP to TCP",
      "It eliminates all delay and packet loss",
      "It creates unlimited circuit capacity"
    ],
    "answer": 0,
    "explanation": "QoS can prioritize or allocate resources for traffic such as time-sensitive applications. It does not create bandwidth or universally eliminate delays and losses.",
    "source": "Network/Transport lecture slide 9"
  },
  {
    "id": "Cv3-15",
    "number": 15,
    "chapter": 5,
    "question": "Which statement about a wireless access point is true?",
    "options": [
      "It makes 802.11 frames identical to Ethernet frames",
      "It replaces the need for wireless NICs in clients",
      "It is necessarily a Layer 3 router between IP subnets",
      "It connects wireless clients to a wired network and is distinct from a router",
      "It performs the TPS data-access function"
    ],
    "answer": 3,
    "explanation": "The slides distinguish an AP from a wireless router. An AP provides wireless access to the LAN; routing between IP networks is a separate function, even when products combine them.",
    "source": "Wired/Wireless LAN lecture slides 3-4"
  },
  {
    "id": "Cv3-16",
    "number": 16,
    "chapter": 5,
    "question": "A hub and a switch can have a similar physical layout. What is the main logical difference in the lecture's model?",
    "options": [
      "Both create one identical full-duplex collision domain",
      "The hub routes IP packets while the switch only repeats bits",
      "The hub creates a shared logical bus; the switch creates point-to-point logical star links",
      "The hub creates a separate full-duplex circuit for each client",
      "The switch always broadcasts every frame to all ports"
    ],
    "answer": 2,
    "explanation": "Physical topology describes the layout; logical topology describes data flow. A hub repeats received traffic to other ports on a shared half-duplex medium; switched Ethernet separates the links.",
    "source": "Wired/Wireless LAN lecture slides 7-8"
  },
  {
    "id": "Cv3-17",
    "number": 17,
    "chapter": 5,
    "question": "Which statement about a conventional Ethernet hub is correct?",
    "options": [
      "It forwards only to the destination's port using a MAC forwarding table",
      "It checks each frame's FCS before forwarding only valid frames",
      "It operates at Layer 1 and creates a shared half-duplex collision domain",
      "It performs inter-subnet routing",
      "It eliminates the need for CSMA/CD on the shared medium"
    ],
    "answer": 2,
    "explanation": "A hub repeats signals to other ports without Layer 2 destination-based switching. The shared medium requires collision handling.",
    "source": "Wired/Wireless LAN lecture slides 7-9"
  },
  {
    "id": "Cv3-18",
    "number": 18,
    "chapter": 5,
    "question": "Which switching mode waits for the complete frame and checks it for errors before forwarding?",
    "options": [
      "Cut-through",
      "Roll-call polling",
      "Carrier sense",
      "Fragment-free",
      "Store-and-forward"
    ],
    "answer": 4,
    "explanation": "Store-and-forward receives the whole frame and checks its FCS before forwarding. Cut-through starts after reading the destination; fragment-free waits for the first 64 bytes rather than checking the full frame.",
    "source": "Wired/Wireless LAN lecture slide 8"
  },
  {
    "id": "Cv3-19",
    "number": 19,
    "chapter": 5,
    "question": "Cut-through switching reduces forwarding latency primarily by...",
    "options": [
      "Waiting for every client to acknowledge the complete frame",
      "Using a DHCP lease instead of a forwarding table",
      "Starting forwarding after reading the destination address rather than waiting for the complete frame",
      "Replacing full-duplex links with a shared hub",
      "Correcting every damaged frame before transmission"
    ],
    "answer": 2,
    "explanation": "The trade-off is that forwarding can begin before a full-frame FCS check is possible. Lower forwarding latency does not mean automatic error correction.",
    "source": "Wired/Wireless LAN lecture slide 8"
  },
  {
    "id": "Cv3-20",
    "number": 20,
    "chapter": 5,
    "question": "Why is CSMA/CD unnecessary on a dedicated full-duplex switched Ethernet link?",
    "options": [
      "The switch uses RTS/CTS to reserve the radio channel",
      "All devices have the same MAC address",
      "Both endpoints can transmit simultaneously without competing for one shared half-duplex channel",
      "The cable no longer carries frames",
      "TCP removes every possible collision from all media"
    ],
    "answer": 2,
    "explanation": "The point-to-point full-duplex arrangement removes shared-medium collision arbitration on that link. Ethernet still uses frame checking and other normal protocol functions.",
    "source": "Wired/Wireless LAN lecture slide 9"
  },
  {
    "id": "Cv3-21",
    "number": 21,
    "chapter": 5,
    "question": "In 1000BASE-T, 1000 refers to...",
    "options": [
      "The maximum cable distance in metres",
      "The number of clients per switch",
      "The guaranteed application throughput in megabytes per second",
      "The number of usable hosts per subnet",
      "The nominal data rate in megabits per second"
    ],
    "answer": 4,
    "explanation": "1000 Mb/s is 1 Gb/s nominal rate. T denotes twisted-pair media and BASE denotes baseband. Headers, load and bottlenecks mean useful application throughput can be lower.",
    "source": "Wired/Wireless LAN lecture slide 10"
  },
  {
    "id": "Cv3-22",
    "number": 22,
    "chapter": 5,
    "question": "Why are multi-speed interfaces useful when combining 100 Mb/s and 1 Gb/s Ethernet devices?",
    "options": [
      "They guarantee every 100 Mb/s endpoint will transmit at 1 Gb/s",
      "They convert an access switch into a campus core automatically",
      "They double all subnet capacities",
      "They support compatible link rates for devices with different nominal speeds",
      "They eliminate the need to match media and connectors"
    ],
    "answer": 3,
    "explanation": "Compatible multi-speed equipment can support different link rates. A slower endpoint/link does not acquire a faster capacity merely because a switch has faster ports.",
    "source": "Wired/Wireless LAN lecture slide 10"
  },
  {
    "id": "Cv3-23",
    "number": 23,
    "chapter": 5,
    "question": "Which statement correctly describes the WLAN in the slides?",
    "options": [
      "It is the preferred medium for every production server",
      "It uses 802.11, is Ethernet-compatible, and shares a logical medium",
      "It provides a dedicated full-duplex cable to every wireless client",
      "It requires no channel agreement between AP and client",
      "It is the same IEEE standard as wired Ethernet"
    ],
    "answer": 1,
    "explanation": "The lecture distinguishes 802.11 WLANs from 802.3 Ethernet. WLANs offer mobility and integrate with wired networks, but clients share radio airtime and must operate on the AP's channel.",
    "source": "Wired/Wireless LAN lecture slide 12"
  },
  {
    "id": "Cv3-24",
    "number": 24,
    "chapter": 5,
    "question": "The purpose of CA in CSMA/CA is to...",
    "options": [
      "Reduce collision likelihood through avoidance procedures such as random backoff",
      "Repair a damaged CRC value",
      "Guarantee that collisions can never occur",
      "Assign a network prefix to each client",
      "Detect a wired Ethernet collision during transmission"
    ],
    "answer": 0,
    "explanation": "Wireless uses collision avoidance, including waiting/backoff. Avoidance reduces risk; it does not mean every collision is impossible. Acknowledgements and retries support recovery.",
    "source": "Wired/Wireless LAN lecture slide 13"
  },
  {
    "id": "Cv3-25",
    "number": 25,
    "chapter": 5,
    "question": "The hidden-node problem occurs when...",
    "options": [
      "A client cannot read a server's source code",
      "An Ethernet cable contains a conductor without insulation",
      "A router removes all destination IP addresses",
      "Two clients can reach an AP but cannot adequately sense each other's transmissions",
      "A switch hides every MAC address from its own forwarding table"
    ],
    "answer": 3,
    "explanation": "Clients may be out of each other's sensing range while both reach the AP. RTS/CTS exchanges can help coordinate use of the shared medium. Do not confuse hidden nodes with missing IP configuration.",
    "source": "Wired/Wireless LAN lecture slide 13"
  },
  {
    "id": "Cv3-26",
    "number": 26,
    "chapter": 5,
    "question": "Why does using suitably planned non-overlapping channels help a multi-AP WLAN?",
    "options": [
      "It eliminates walls and furniture as signal obstacles",
      "It permits more concurrent use while reducing interference between nearby cells",
      "It guarantees each client the AP's advertised maximum rate",
      "It changes all WLAN links into full-duplex circuits",
      "It allows any number of APs on one shared channel with no contention"
    ],
    "answer": 1,
    "explanation": "Channel planning is a capacity and interference decision. Adding nearby APs on an already congested channel does not automatically provide independent capacity.",
    "source": "Wired/Wireless LAN lecture slides 14-15"
  },
  {
    "id": "Cv3-27",
    "number": 27,
    "chapter": 5,
    "question": "A WLAN must concurrently support 802.11n clients at 2.4 GHz and 802.11ac clients at 5 GHz. What equipment feature is needed?",
    "options": [
      "A hub with no wireless interface",
      "AP radios capable of concurrent dual-band operation",
      "An AP limited to one 2.4 GHz radio",
      "A client-side subnet mask of /32",
      "A cable modem on each wireless client"
    ],
    "answer": 1,
    "explanation": "The slide calls for dual-band APs for concurrent use of those bands. A device able to select either band is not necessarily able to operate both concurrently.",
    "source": "Wired/Wireless LAN lecture slide 15"
  },
  {
    "id": "Cv3-28",
    "number": 28,
    "chapter": 5,
    "question": "Which statement about wireless access controls is true?",
    "options": [
      "MAC filtering provides the same confidentiality as encryption",
      "Authentication and encryption are identical functions",
      "WEP is the strongest method listed in the lecture",
      "MAC filtering alone is weak because MAC addresses can be spoofed",
      "A hidden-node problem is solved by changing a user password"
    ],
    "answer": 3,
    "explanation": "MAC filtering checks an address that can be imitated. Authentication controls who gains access; encryption protects transmitted data. These solve different problems.",
    "source": "Wired/Wireless LAN lecture slide 16"
  },
  {
    "id": "Cv3-29",
    "number": 29,
    "chapter": 5,
    "question": "Which is an appropriate output of a wireless site survey?",
    "options": [
      "A plan that ignores switch locations and power sources",
      "An AP placement, channel and power plan informed by coverage and interference",
      "A new application architecture for every database",
      "A guarantee that one AP covers every building at maximum speed",
      "A replacement for compatible NICs and radio standards"
    ],
    "answer": 1,
    "explanation": "The survey evaluates coverage, interference, AP count/placement, non-overlapping channels, switching and power. It should consider both capacity and coverage requirements.",
    "source": "Wired/Wireless LAN lecture slide 17"
  },
  {
    "id": "Cv3-30",
    "number": 30,
    "chapter": 5,
    "question": "A server CPU is lightly loaded, but the shared uplink stays saturated. Which action most directly addresses the measured bottleneck?",
    "options": [
      "Change every client's subnet mask without a routing plan",
      "Add extra same-channel APs without measuring radio load",
      "Replace only the server CPU with a faster model",
      "Increase appropriate uplink capacity or reduce traffic crossing that uplink",
      "Replace all applications with host-based architecture"
    ],
    "answer": 3,
    "explanation": "Choose the intervention that changes the limiting resource. Faster server processing alone does not increase a saturated link's capacity. Scheduling backups off-hours is one demand-side alternative.",
    "source": "Wired/Wireless LAN lecture slides 19-20"
  }
];
