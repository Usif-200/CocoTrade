import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

const features = [
  {
    title: "Advanced Trading Interface",
    description:
      "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/fit1.png",
    isActive: true,
  },
  {
    title: "Portfolio Management",
    description:
      "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/fit3.png",
    isActive: false,
  },
  {
    title: "Security & Verification",
    description:
      "Industry-leading security measures with KYC verification process to protect your assets.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/fit4.png",
    isActive: false,
  },
  {
    title: "Performance Analytics",
    description:
      "Detailed analytics and credit scoring system to help you make informed decisions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/fit2.png",
    isActive: false,
  },
];

const testimonials = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    image: "/av1.png",
    content:
      "The real-time market data and advanced trading features have significantly improved my trading performance. The platform's security measures give me peace of mind.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    image: null,
    content:
      "ForexTrade's institutional-grade tools have transformed our trading strategy. The API integration and automated features have saved us countless hours.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av2.png",
    content:
      "The customer support is exceptional, and the platform's intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    image: "/av4.png",
    content:
      "We've seen remarkable improvements in our trading efficiency since switching to ForexTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "James Rodriguez",
    role: "Forex Security Expert",
    image: "/av3.png",
    content:
      "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what the Forex industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: "/av1.png",
    content:
      "The platform's ability to handle complex trading strategies while maintaining simplicity in its interface is remarkable. It's been invaluable for our portfolio management.",
  },
];

const footerLinks = [
  {
    _id: "001",
    title: "Trading",
    links: ["Markets", "Trading Fees"],
  },
  {
    _id: "002",
    title: "Resources",
    links: ["Trading Guide", "Market Analysis"],
  },
  {
    _id: "003",
    title: "Legal",
    links: ["Privacy Policy", "Terms of Services"],
  },
];


export { footerLinks, testimonials, features };
