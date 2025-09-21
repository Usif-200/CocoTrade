import { Command, Facebook, Instagram, Linkedin } from "lucide-react";

import { footerLinks } from "../assets/data.jsx";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#0A0A0A]/80  border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="centered-row gap-2 cursor-pointer hover:-translate-y-1 transition2">
                <Command className="w-6 h-6 text-indigo-400" />

                <h3 className="clash-display text-lg text-zinc-100">
                  CocoTrade
                </h3>
              </div>
              <p className="text-sm text-zinc-400/90">
                Empowering traders with advanced forex trading solutions.
              </p>
              <div className="flex space-x-4">
                <button variant="ghost" size="icon">
                  <Instagram className="w-6 h-6" />
                </button>
                <button variant="ghost" size="icon">
                  <Facebook className="w-6 h-6" />
                </button>
                <button variant="ghost" size="icon">
                  <Linkedin className="w-6 h-6" />
                </button>
              </div>
            </div>

            {footerLinks.map(({ _id, title, links }) => (
              <div key={_id} className="space-y-4">
                <h4 className="clash-display text-base text-zinc-200">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#features"
                        className="text-sm text-zinc-400 hover:text-indigo-300  hover:ml-3 transition2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-zinc-400/80 text-center clash-display">
              &copy; {new Date().getFullYear()} YOUSEF. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
