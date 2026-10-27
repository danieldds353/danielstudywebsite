window.NETWORK_EXAM = {
  "version": 1,
  "mcq": [
    {
      "id": "NET-29",
      "topic": "Intranets & extranets",
      "stem": "A public company website uses HTTPS and requires no sign-in for its public catalogue. Is HTTPS alone sufficient to classify it as an extranet?",
      "options": [
        "Yes; every encrypted website is an extranet.",
        "Yes; HTTPS prevents the public from reading the catalogue.",
        "No; encryption alone does not establish restricted partner access.",
        "No; extranets cannot use HTTPS."
      ],
      "correct": 2,
      "explanation": "Security of the connection and the intended access audience are separate issues. Extranets provide controlled external access; a public catalogue can remain public while using HTTPS.",
      "source": "extranet"
    },
    {
      "id": "NET-25",
      "topic": "Intranets & extranets",
      "stem": "A company gives approved suppliers access to a private inventory and order portal. What is this best classified as?",
      "options": [
        "An employee-only intranet",
        "A public website with unrestricted access",
        "An extranet",
        "A transport-layer protocol"
      ],
      "correct": 2,
      "explanation": "An extranet offers controlled access to selected organizational resources for authorized outsiders, such as suppliers. Public availability and employee-only access describe different audiences.",
      "source": "extranet"
    },
    {
      "id": "NET-19",
      "topic": "TCP, UDP & transport",
      "stem": "A developer chooses TCP because a file must arrive in order, then claims the file is automatically confidential. What is the best correction?",
      "options": [
        "A private source address guarantees confidentiality end to end.",
        "TCP encrypts automatically whenever the file is large.",
        "UDP would encrypt the file automatically instead.",
        "TCP reliability does not provide encryption; a security protocol such as TLS is needed."
      ],
      "correct": 3,
      "explanation": "Delivery reliability and confidentiality are separate properties. Plain TCP does not conceal application contents; secure applications commonly add TLS.",
      "source": "tcp"
    },
    {
      "id": "NET-02",
      "topic": "Subnetting",
      "stem": "How many usable host addresses are in a conventional IPv4 /27 subnet?",
      "options": [
        "62",
        "27",
        "32",
        "30"
      ],
      "correct": 3,
      "explanation": "There are 32 − 27 = 5 host bits: 2⁵ = 32 addresses. Reserving the network and broadcast addresses leaves 30 usable hosts.",
      "source": "subnet"
    },
    {
      "id": "NET-03",
      "topic": "Subnetting",
      "stem": "What is the network address of 192.168.10.77/26?",
      "options": [
        "192.168.10.64",
        "192.168.10.77",
        "192.168.10.0",
        "192.168.10.128"
      ],
      "correct": 0,
      "explanation": "A /26 divides the last octet into blocks of 64: 0–63, 64–127, 128–191, and 192–255. Address 77 belongs to the block starting at 64.",
      "source": "subnet"
    },
    {
      "id": "NET-07",
      "topic": "Subnetting",
      "stem": "A /24 network is divided into equal /27 subnets. Using modern subnetting, how many subnets result?",
      "options": [
        "8",
        "6",
        "16",
        "30"
      ],
      "correct": 0,
      "explanation": "Three bits are borrowed: 27 − 24 = 3, so 2³ = 8 subnets. Do not subtract two from the number of subnets; modern practice permits the all-zero and all-one subnets.",
      "source": "subnet"
    },
    {
      "id": "NET-09",
      "topic": "Subnetting",
      "stem": "What is the network address of 172.16.5.10/23?",
      "options": [
        "172.16.0.0",
        "172.16.5.255",
        "172.16.5.0",
        "172.16.4.0"
      ],
      "correct": 3,
      "explanation": "The /23 mask is 255.255.254.0. Third-octet blocks start on even numbers, so this block spans 172.16.4.0–172.16.5.255. Do not assume every subnet starts within the fourth octet.",
      "source": "subnet"
    },
    {
      "id": "NET-27",
      "topic": "Intranets & extranets",
      "stem": "An employee connects from home through a VPN to an employee-only HR site. Does the employee’s physical location alone make the site an extranet?",
      "options": [
        "No; it is still an intranet serving internal personnel.",
        "Yes; any service reached from home is an extranet.",
        "No; remote access makes it a public Internet site instead.",
        "Yes; VPNs always convert intranets into extranets."
      ],
      "correct": 0,
      "explanation": "Internal versus external access is about the organizational audience, not simply whether a user is inside an office. Remote employee access can remain intranet access.",
      "source": "extranet"
    },
    {
      "id": "NET-32",
      "topic": "Networking foundations",
      "stem": "A host is 192.168.1.10/24. It needs to send to 192.168.2.20, and no more-specific route exists. Which next step is appropriate?",
      "options": [
        "Use a DNS server to forward the IP packet.",
        "Send toward the configured default gateway/router.",
        "Change its own address to the destination address.",
        "Treat the destination as a host on the same /24 subnet."
      ],
      "correct": 1,
      "explanation": "The /24 networks are 192.168.1.0 and 192.168.2.0. Reaching a different network requires routing; a default route supplies the next hop when no more-specific route matches.",
      "source": "hosts"
    },
    {
      "id": "NET-33",
      "topic": "Networking foundations",
      "stem": "Which address belongs to an RFC 1918 private IPv4 range?",
      "options": [
        "172.32.10.5",
        "8.8.8.8",
        "192.169.1.5",
        "172.20.10.5"
      ],
      "correct": 3,
      "explanation": "Private ranges are 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31), and 192.168.0.0/16. Not every 172.x or 192.x address is private.",
      "source": "private"
    },
    {
      "id": "NET-11",
      "topic": "Subnetting",
      "stem": "Which address can be assigned to a host in the conventional subnet 192.168.1.32/27?",
      "options": [
        "192.168.1.64",
        "192.168.1.62",
        "192.168.1.32",
        "192.168.1.63"
      ],
      "correct": 1,
      "explanation": "This subnet spans .32–.63; .32 identifies the network and .63 is its broadcast. Usable hosts are .33–.62. Address .64 starts the next subnet.",
      "source": "subnet"
    },
    {
      "id": "NET-30",
      "topic": "Intranets & extranets",
      "stem": "Which design best follows least privilege for an extranet used by shipping partners?",
      "options": [
        "Allow each partner only the shipment data and actions needed for its work.",
        "Share one administrator account among all partners.",
        "Remove access checks once a partner completes its first login.",
        "Give every partner unrestricted access to payroll and internal systems."
      ],
      "correct": 0,
      "explanation": "Least privilege grants only the access needed for assigned tasks. Scoped permissions limit exposure; a partner relationship does not justify organization-wide administrator rights.",
      "source": "access"
    },
    {
      "id": "NET-13",
      "topic": "TCP, UDP & transport",
      "stem": "A host receives traffic for several applications. What helps TCP or UDP deliver data to the appropriate application endpoint?",
      "options": [
        "The Ethernet cable category",
        "Transport-layer port numbers",
        "The router’s routing metric",
        "Only the subnet mask"
      ],
      "correct": 1,
      "explanation": "Ports distinguish application endpoints at a host. IP addressing and routing get traffic between hosts; a subnet mask describes a network prefix.",
      "source": "tcp"
    },
    {
      "id": "NET-34",
      "topic": "Networking foundations",
      "stem": "How many bits are in an IPv4 address, before dividing it into network and host portions?",
      "options": [
        "128",
        "16",
        "48",
        "32"
      ],
      "correct": 3,
      "explanation": "IPv4 has four 8-bit octets, giving 32 bits. A prefix length says how many of those bits identify the network; the remaining bits identify addresses within it. IPv6 uses 128 bits.",
      "source": "ip"
    },
    {
      "id": "NET-10",
      "topic": "Subnetting",
      "stem": "What is the next /28 subnet after 192.168.1.32/28 within the same /24?",
      "options": [
        "192.168.1.64/28",
        "192.168.1.47/28",
        "192.168.1.48/28",
        "192.168.1.33/28"
      ],
      "correct": 2,
      "explanation": "A /28 has 16 addresses per block. The .32 block ends at .47, so the next network begins at .48.",
      "source": "subnet"
    },
    {
      "id": "NET-31",
      "topic": "Networking foundations",
      "stem": "In the seven-layer OSI model, which layer corresponds to TCP and UDP transport functions?",
      "options": [
        "Layer 4",
        "Layer 3",
        "Layer 2",
        "Layer 7"
      ],
      "correct": 0,
      "explanation": "The transport layer is Layer 4. Layer 3 is the network layer, Layer 2 is data link, and Layer 7 is application. Do not confuse OSI numbering with a differently numbered TCP/IP model.",
      "source": "osi"
    },
    {
      "id": "NET-18",
      "topic": "TCP, UDP & transport",
      "stem": "Which distinction between TCP flow control and congestion control is correct?",
      "options": [
        "Flow control protects receiver capacity; congestion control responds to network capacity.",
        "Both terms mean encrypting a session.",
        "Flow control protects routers; congestion control protects only the receiving application.",
        "Both mechanisms are determined only by the destination port."
      ],
      "correct": 0,
      "explanation": "The receiver advertises a receive window to prevent buffer overload. The sender’s congestion window limits traffic in response to network conditions. These are different constraints on sending.",
      "source": "tcp"
    },
    {
      "id": "NET-26",
      "topic": "Intranets & extranets",
      "stem": "Which distinction best separates an intranet from an extranet?",
      "options": [
        "An intranet serves internal users; an extranet extends selected access to authorized external parties.",
        "An intranet cannot use web browsers.",
        "An extranet is always open to everyone on the Internet.",
        "An intranet uses TCP, while an extranet must use UDP."
      ],
      "correct": 0,
      "explanation": "The important distinction is who is authorized to use the resources. Either can use web technologies and standard Internet protocols.",
      "source": "extranet"
    },
    {
      "id": "NET-06",
      "topic": "Subnetting",
      "stem": "A LAN needs at least 50 usable IPv4 addresses, including its router interface. Which prefix gives the smallest sufficient subnet?",
      "options": [
        "/27",
        "/28",
        "/25",
        "/26"
      ],
      "correct": 3,
      "explanation": "A /27 gives 30 usable hosts, which is too few. A /26 gives 62 and is sufficient; /25 gives 126 but wastes more addresses.",
      "source": "subnet"
    },
    {
      "id": "NET-22",
      "topic": "TCP, UDP & transport",
      "stem": "When a UDP checksum is used, what does it do?",
      "options": [
        "Help detect corruption; it does not itself repair or retransmit damaged data.",
        "Encrypt the datagram payload",
        "Put all datagrams into the correct order",
        "Guarantee that the datagram reaches its destination"
      ],
      "correct": 0,
      "explanation": "A checksum is an error-detection mechanism. Do not confuse detecting corrupted data with guaranteeing delivery or correcting errors. The question specifies “when used” because UDP checksum rules differ between IPv4 and IPv6.",
      "source": "udp"
    },
    {
      "id": "NET-17",
      "topic": "TCP, UDP & transport",
      "stem": "A TCP data segment is lost, but the connection remains operational. Which feature supports recovery?",
      "options": [
        "UDP’s mandatory delivery acknowledgment",
        "Retransmission based on loss detection",
        "Encrypting the missing segment at the receiver",
        "Changing the subnet mask automatically"
      ],
      "correct": 1,
      "explanation": "TCP uses sequence information, acknowledgments, timers, and retransmission to recover lost data. A checksum can detect corruption, but cannot recreate missing payload by itself.",
      "source": "tcp"
    },
    {
      "id": "NET-14",
      "topic": "TCP, UDP & transport",
      "stem": "Which service does TCP provide to an application?",
      "options": [
        "Built-in encryption of every application byte",
        "An ordered byte stream with mechanisms for reliable delivery",
        "A guarantee that every send call becomes one receive call",
        "A fixed maximum delivery time for every segment"
      ],
      "correct": 1,
      "explanation": "TCP exposes a byte stream and recovers from detected loss. It does not preserve application message boundaries, encrypt data by itself, or promise a delivery deadline; a connection can still fail.",
      "source": "tcp"
    },
    {
      "id": "NET-08",
      "topic": "Subnetting",
      "stem": "Which pair of usable host addresses is in the same /26 subnet?",
      "options": [
        "192.168.1.65 and 192.168.1.126",
        "192.168.1.62 and 192.168.1.65",
        "192.168.1.190 and 192.168.1.193",
        "192.168.1.126 and 192.168.1.129"
      ],
      "correct": 0,
      "explanation": "Both 65 and 126 are inside the usable range 65–126 of 192.168.1.64/26. Each other pair crosses a 64-address boundary.",
      "source": "subnet"
    },
    {
      "id": "NET-16",
      "topic": "TCP, UDP & transport",
      "stem": "A TCP receiver has all preceding bytes and receives 200 contiguous data bytes beginning with sequence number 1000. No SYN or FIN is present. What cumulative acknowledgment number is expected?",
      "options": [
        "1000",
        "200",
        "1200",
        "1199"
      ],
      "correct": 2,
      "explanation": "The received data occupies byte numbers 1000–1199. The acknowledgment identifies the next expected byte: 1200. TCP sequence numbers count bytes, not segments.",
      "source": "tcp"
    },
    {
      "id": "NET-20",
      "topic": "TCP, UDP & transport",
      "stem": "An application using UDP needs to recover selected lost messages. Which statement is accurate?",
      "options": [
        "The subnet mask determines whether UDP becomes reliable.",
        "UDP forbids any application from acknowledging a message.",
        "UDP automatically retransmits every unacknowledged datagram.",
        "The application or a protocol above UDP can implement acknowledgments and retransmissions."
      ],
      "correct": 3,
      "explanation": "UDP itself does not guarantee delivery or retransmit lost datagrams. Reliability can be supplied above UDP, so “UDP application” does not necessarily mean “application with no reliability features.”",
      "source": "udpguide"
    },
    {
      "id": "NET-01",
      "topic": "Subnetting",
      "stem": "Which dotted-decimal mask corresponds to /26?",
      "options": [
        "255.255.255.128",
        "255.255.255.224",
        "255.255.255.192",
        "255.255.255.240"
      ],
      "correct": 2,
      "explanation": "The first 24 bits fill three octets. The next two bits are 11000000 = 192. The other masks are /27, /25, and /28.",
      "source": "subnet"
    },
    {
      "id": "NET-15",
      "topic": "TCP, UDP & transport",
      "stem": "Which sequence describes the usual TCP three-way connection handshake?",
      "options": [
        "SYN → FIN → ACK",
        "SYN → SYN-ACK → ACK",
        "SYN → ACK → RST",
        "ACK → SYN → FIN"
      ],
      "correct": 1,
      "explanation": "The initiator sends SYN, the receiver responds with SYN-ACK, and the initiator acknowledges. FIN closes a direction of an established connection; RST resets it.",
      "source": "tcp"
    },
    {
      "id": "NET-24",
      "topic": "TCP, UDP & transport",
      "stem": "A server listens on TCP port 5000 and UDP port 5000. Which statement is correct?",
      "options": [
        "The IP address becomes a different subnet for each listener.",
        "Both listeners must share one TCP connection.",
        "Both can coexist because TCP and UDP have separate port namespaces.",
        "The server must shut down one listener because the numbers match."
      ],
      "correct": 2,
      "explanation": "The transport protocol is part of endpoint identification. The same numeric port can be used by TCP and UDP without those listeners being the same transport endpoint.",
      "source": "hosts"
    },
    {
      "id": "NET-21",
      "topic": "TCP, UDP & transport",
      "stem": "A live voice application can tolerate occasional loss but wants to avoid waiting for late audio. Which is the strongest reason to consider UDP?",
      "options": [
        "It guarantees that packets can never arrive late.",
        "It lets the application manage loss and timing without TCP’s ordered-stream delivery requirement.",
        "It guarantees more bandwidth than TCP on every path.",
        "It eliminates the need to manage network congestion."
      ],
      "correct": 1,
      "explanation": "A real-time application may prefer dropping stale media to waiting for recovery. UDP is not a latency or bandwidth guarantee, and applications using it still need appropriate congestion behavior.",
      "source": "udpguide"
    },
    {
      "id": "NET-04",
      "topic": "Subnetting",
      "stem": "What is the broadcast address of the subnet containing 192.168.20.150/27?",
      "options": [
        "192.168.20.255",
        "192.168.20.159",
        "192.168.20.128",
        "192.168.20.158"
      ],
      "correct": 1,
      "explanation": "A /27 has blocks of 32. Address 150 lies in 128–159; 128 is the network, 159 is the broadcast, and 129–158 are usable hosts.",
      "source": "subnet"
    },
    {
      "id": "NET-05",
      "topic": "Subnetting",
      "stem": "Which is the complete usable-host range for 192.168.5.96/27?",
      "options": [
        "192.168.5.98–192.168.5.126",
        "192.168.5.97–192.168.5.126",
        "192.168.5.97–192.168.5.127",
        "192.168.5.96–192.168.5.127"
      ],
      "correct": 1,
      "explanation": "The 32-address block runs from 96 to 127. Exclude only the first and last addresses: usable hosts run from 97 through 126.",
      "source": "subnet"
    },
    {
      "id": "NET-28",
      "topic": "Intranets & extranets",
      "stem": "A supplier has signed in to an extranet but must only see its own orders. Which control determines which records it may access?",
      "options": [
        "TCP sequencing",
        "A shorter subnet prefix",
        "Authorization",
        "Authentication alone"
      ],
      "correct": 2,
      "explanation": "Authentication establishes identity; authorization determines permitted actions and resources. A successful login should not imply access to every supplier’s records.",
      "source": "access"
    },
    {
      "id": "NET-12",
      "topic": "Subnetting",
      "stem": "Within 192.168.40.0/24, LAN A needs 100 usable addresses and LAN B needs 25, including their gateways. Which allocation uses the smallest sufficient, nonoverlapping subnets?",
      "options": [
        "A: 192.168.40.0/26; B: 192.168.40.128/27",
        "A: 192.168.40.0/25; B: 192.168.40.128/25",
        "A: 192.168.40.0/25; B: 192.168.40.64/27",
        "A: 192.168.40.0/25; B: 192.168.40.128/27"
      ],
      "correct": 3,
      "explanation": "A /25 gives A 126 usable addresses; a /27 gives B 30. Their blocks are .0–.127 and .128–.159. The alternatives make A too small, overlap A, or allocate an unnecessarily large block to B.",
      "source": "subnet"
    },
    {
      "id": "NET-23",
      "topic": "TCP, UDP & transport",
      "stem": "An application sends two messages. Which statement correctly contrasts TCP and UDP?",
      "options": [
        "TCP preserves messages, while UDP merges all data into a byte stream.",
        "UDP always delivers both messages in their original order.",
        "TCP is a byte stream; UDP preserves datagram boundaries for datagrams delivered to the application.",
        "TCP always delivers exactly two application reads."
      ],
      "correct": 2,
      "explanation": "Application writes and reads need not align under TCP; message framing is the application’s job. UDP keeps separate datagrams, but a datagram can be lost, duplicated, or delivered out of order.",
      "source": "udpguide"
    }
  ],
  "short": [
    {
      "id": "NET-SA1",
      "topic": "TCP, UDP & transport",
      "stem": "In 1–2 sentences, contrast TCP and UDP and give one suitable use for each.",
      "model": "TCP supplies a connection-oriented, ordered byte stream with loss recovery, making it suitable for transferring a file reliably. UDP sends datagrams without built-in delivery or ordering guarantees, making it useful for live voice when the application prioritizes timely media and handles loss appropriately.",
      "points": [
        "Correctly contrasts TCP’s ordered, reliable byte-stream service with UDP’s lack of built-in delivery/ordering guarantees.",
        "Gives a suitable example for each and connects the choice to application needs."
      ],
      "source": "udpguide"
    },
    {
      "id": "NET-SA2",
      "topic": "TCP, UDP & transport",
      "stem": "In 1–2 sentences, explain the transport layer’s role and name one capability that depends on the transport protocol used.",
      "model": "The transport layer supports communication between application processes on end hosts, using ports to identify endpoints. Capabilities depend on the protocol: TCP adds ordered delivery, retransmission, and flow control, while UDP does not provide those features itself.",
      "points": [
        "Explains process-to-process/end-to-end application communication and ports.",
        "Identifies a protocol-dependent capability accurately rather than claiming all transport protocols guarantee it."
      ],
      "source": "hosts"
    },
    {
      "id": "NET-SA3",
      "topic": "Intranets & extranets",
      "stem": "In 1–2 sentences, define an extranet and distinguish it from an intranet using an example.",
      "model": "An extranet gives authorized external parties controlled access to selected organizational resources, such as a supplier checking its purchase orders. An intranet primarily serves internal personnel, such as employees viewing an internal HR portal.",
      "points": [
        "Defines an extranet as controlled access to selected resources for authorized outsiders.",
        "Distinguishes internal intranet users and gives an appropriate example."
      ],
      "source": "extranet"
    }
  ],
  "sources": {
    "tcp": {
      "title": "IETF RFC 9293 — TCP",
      "url": "https://www.rfc-editor.org/rfc/rfc9293.html"
    },
    "udp": {
      "title": "IETF RFC 768 — UDP",
      "url": "https://www.rfc-editor.org/rfc/rfc768.html"
    },
    "udpguide": {
      "title": "IETF RFC 8085 — UDP usage guidelines",
      "url": "https://www.rfc-editor.org/rfc/rfc8085.html"
    },
    "hosts": {
      "title": "IETF RFC 1122 — Internet host communication layers",
      "url": "https://www.rfc-editor.org/rfc/rfc1122.html"
    },
    "subnet": {
      "title": "Cisco — Host and subnet quantities",
      "url": "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13790-8.html"
    },
    "extranet": {
      "title": "Cisco — Partner extranet case study (2007)",
      "url": "https://www.cisco.com/c/dam/en_us/about/ciscoitatwork/downloads/ciscoitatwork/pdf/Cisco_IT_Case_Study_Extranet_print.pdf"
    },
    "private": {
      "title": "IETF RFC 1918 — Private IPv4 address allocation",
      "url": "https://www.rfc-editor.org/rfc/rfc1918.html"
    },
    "access": {
      "title": "NIST — Least privilege",
      "url": "https://csrc.nist.gov/glossary/term/least_privilege"
    },
    "osi": {
      "title": "Cloudflare — OSI model",
      "url": "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
    },
    "ip": {
      "title": "IETF RFC 791 — IPv4",
      "url": "https://www.rfc-editor.org/rfc/rfc791.html"
    }
  }
};
