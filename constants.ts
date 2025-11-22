import { TeamMember, ResourceLink, StrategyPhase } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Utkarsh",
    role: "Team Lead / The Architect",
    specialty: ["Digital Forensics", "OSINT", "AI Orchestration", "Strategy"],
    icon: "cpu",
    color: "text-purple-500"
  },
  {
    name: "Aryan Bhardwaj",
    role: "Web Exploitation Specialist",
    specialty: ["SQL Injection", "XSS", "Burp Suite", "Server-Side Vulns"],
    icon: "globe",
    color: "text-cyan-500"
  },
  {
    name: "Yuyutshu Prasar",
    role: "Reverse Engineering & Mobile",
    specialty: ["Android CTFs", "APK Decompilation", "Binary Analysis", "Ghidra"],
    icon: "smartphone",
    color: "text-green-500"
  },
  {
    name: "Divyanshu Rai",
    role: "Steganography & Intel",
    specialty: ["Image Analysis", "Hidden Data", "Advanced OSINT", "Cryptography"],
    icon: "eye",
    color: "text-red-500"
  }
];

export const RESOURCES: ResourceLink[] = [
  {
    title: "PicoCTF Gym",
    url: "https://picoctf.org/gym",
    description: "The absolute baseline. Clear the 'General Skills' and your specific category immediately.",
    difficulty: "Beginner",
    category: "General"
  },
  {
    title: "TryHackMe: Web Fundamentals",
    url: "https://tryhackme.com/module/web-fundamentals",
    description: "Crucial for Aryan. Master requests, cookies, and injection.",
    difficulty: "Intermediate",
    category: "Web"
  },
  {
    title: "OWASP Top 10",
    url: "https://owasp.org/www-project-top-ten/",
    description: "The bible for Web Exploitation. Memorize the patterns.",
    difficulty: "Advanced",
    category: "Web"
  },
  {
    title: "CyberChef",
    url: "https://gchq.github.io/CyberChef/",
    description: "The 'Swiss Army Knife'. Divyanshu needs this open 24/7.",
    difficulty: "Beginner",
    category: "General"
  },
  {
    title: "Aperisolve",
    url: "https://www.aperisolve.com/",
    description: "Automated image steganography solver. Upload and analyze.",
    difficulty: "Intermediate",
    category: "Forensics"
  },
  {
    title: "Jadx Decompiler",
    url: "https://github.com/skylot/jadx",
    description: "Yuyutshu's sword. Convert APKs to readable Java code.",
    difficulty: "Advanced",
    category: "Binary"
  },
  {
    title: "Ghidra",
    url: "https://ghidra-sre.org/",
    description: "NSA's reverse engineering tool. Essential for difficult binaries.",
    difficulty: "God Mode",
    category: "Binary"
  }
];

export const STRATEGY_PHASES: StrategyPhase[] = [
  {
    phase: 1,
    title: "The Foundation & Tooling",
    days: "Days 1-5",
    focus: "Drill Basics & Setup Environment",
    tasks: [
      "Install the 'God Mode' Script on everyone's machine.",
      "Aryan: Complete THM Web Fundamentals completely.",
      "Yuyutshu: Decompile 5 sample APKs from PicoCTF.",
      "Divyanshu: Learn to manually identify file headers (Magic Bytes).",
      "Utkarsh: Build a repository of 'AI Prompts' for specific vulnerability types."
    ]
  },
  {
    phase: 2,
    title: "Deep Dive & Specialization",
    days: "Days 6-10",
    focus: "Advanced Exploitation",
    tasks: [
      "Solve previous year Shaastra CTF writeups (Search GitHub).",
      "Yuyutshu: Practice using GDB/Pwndbg for buffer overflows.",
      "Aryan: Master SQLMap and manual SQL injection payloads.",
      "Utkarsh: Practice Volatility3 memory dump analysis.",
      "Team: Run a 4-hour mini-CTF simulation together on CTFtime."
    ]
  },
  {
    phase: 3,
    title: "Speed & Synchronization",
    days: "Days 11-15",
    focus: "Efficiency & Communication",
    tasks: [
      "Develop shorthand communication (e.g., 'Found flag.txt, need root').",
      "Utkarsh: Manage the 'Help' flow. If someone is stuck for 15m, swap tasks.",
      "Automate the easy stuff. Scripts for basic recon.",
      "Rest Day on Day 14. No screens.",
      "Day 15: Verify all tools work. Update system. WIN."
    ]
  }
];

// A safe but comprehensive setup script for Kali/Debian based systems
export const KALI_SETUP_SCRIPT = `sudo apt-get update && sudo apt-get install -y \\
  git curl wget python3-pip build-essential \\
  gdb ltrace strace exiftool binwalk steghide \\
  foremost scalpel pngcheck aircrack-ng hydra \\
  john sqlmap nmap wireshark gobuster dirb \\
  nikto netcat-traditional python3-impacket \\
  ffuf jq unrar unzip p7zip-full ripgrep \\
  zsteg hexedit radare2

# Install Python tools
pip3 install --break-system-packages \\
  pwntools uncompyle6 ropper capstone \\
  requests beautifulsoup4 pycryptodome

# Install Volatility 3 (Forensics)
git clone https://github.com/volatilityfoundation/volatility3.git ~/volatility3
pip3 install --break-system-packages -r ~/volatility3/requirements.txt

# Install Pwndbg (for GDB)
git clone https://github.com/pwndbg/pwndbg ~/pwndbg
cd ~/pwndbg && ./setup.sh

echo "System primed. Good hunting, Xaenithra."`;