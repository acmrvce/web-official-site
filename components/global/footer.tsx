import { cn } from "@/lib/utils";
// Removed Next.js imports to fix build errors
import { FooterConfig } from "@/lib/config/footer";
import * as Icons from "lucide-react";

// --- Font Injection (Ensuring consistency if used in isolation) ---
const FooterFonts = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap');
    .font-footer { font-family: 'Manrope', sans-serif; }
    .font-footer-tech { font-family: 'Space Grotesk', monospace; }
  `,
    }}
  />
);

interface FooterProps {
  className?: string;
  config: FooterConfig;
}

// Helper to get icon component dynamically
const IconComponent = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={cn("w-5 h-5", className)} />;
};

const Footer = ({ className, config }: FooterProps) => {
  const developers = ["Vishal", "Taha", "Tharun", "Avinash"];

  return (
    <footer
      className={cn(
        "relative w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-white font-footer border-t border-neutral-200 dark:border-white/10 overflow-hidden",
        className
      )}
    >
      <FooterFonts />

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* 1. Large Call to Action Section */}
        <div className="py-20 md:py-32 border-b border-neutral-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-blue-600">
              Ready to <br />
              <span className="text-neutral-400 dark:text-neutral-600">
                Innovate?
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-sm text-left md:text-right leading-relaxed">
              Join our community of developers, designers, and innovators
              building the future.
            </p>
            <a
              href="/join"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 dark:bg-white px-8 font-medium text-white dark:text-black transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Become a Member{" "}
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* 2. Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {config.brand.logoSrc ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white p-1.5">
                  <img
                    src={config.brand.logoSrc}
                    alt={`${config.brand.title} Logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <Icons.Command className="w-6 h-6 text-white dark:text-black" />
                </div>
              )}
              <span className="text-xl font-bold tracking-tight uppercase font-footer-tech">
                {config.brand.title}
              </span>
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
              {config.brand.description}
            </p>

            {/* Social Links */}
            {config.socialLinks && config.socialLinks.length > 0 && (
              <div className="flex gap-4 mt-auto pt-4">
                {config.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
                    aria-label={link.label}
                  >
                    {link.icon && <IconComponent name={link.icon} />}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {config.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h3 className="font-footer-tech text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <span className="h-px w-0 bg-black dark:bg-white transition-all group-hover:w-3" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Bar with Developer Credits */}
        <div className="border-t border-neutral-200 dark:border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 dark:text-neutral-500 font-footer-tech uppercase tracking-wider relative z-20">
          
          {/* Copyright & Credits */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>{config.copyright}</p>
            
            {/* Divider for desktop */}
            <div className="hidden md:block w-px h-4 bg-neutral-200 dark:bg-white/20" />

            {/* Developer Credits Block */}
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-white/5 rounded-full px-3 py-1.5 border border-neutral-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors">
                <Icons.Code2 className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-bold">devs:</span>
                <div className="flex items-center gap-2">
                    {developers.map((dev, i) => (
                        <div key={dev} className="flex items-center">
                            <span className="font-semibold text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                                {dev}
                            </span>
                            {i < developers.length - 1 && (
                                <span className="ml-2 text-neutral-300 dark:text-neutral-700 opacity-50">/</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Legal Links */}
          {/* <div className="flex gap-8">
            <a
              href="/privacy"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.08] dark:opacity-[0.05]">
          <h1 className="text-[15vw] font-bold leading-none text-blue-600 dark:text-white text-center whitespace-nowrap translate-y-[30%]">
            ACM RVCE
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;