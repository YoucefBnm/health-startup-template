"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
  CloseAnimatedMenu,
} from "../systaliko-ui/blocks/animated-menu";
import { Variants } from "motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToggleOnScroll } from "@/hooks/use-toggle-onscroll";
import { motion } from "motion/react";

const nav_links = [
  {
    id: "nav-link-about",
    label: "About",
    href: "#",
  },
  {
    id: "nav-link-features",
    label: "Features",
    href: "#",
  },
  {
    id: "nav-link-pricing",
    label: "Pricing",
    href: "#",
  },
  {
    id: "nav-link-faq",
    label: "FAQ",
    href: "#",
  },
  {
    id: "nav-link-contact",
    label: "Contact",
    href: "#",
  },
];
const nav_socials = [
  {
    id: "nav-social-x",
    label: "x",
    href: "https://x.com",
  },
  {
    id: "nav-social-instagram",
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: "nav-social-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];
const menuListvariants = {
  open: {
    width: 320,
    height: 420,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 96,
    height: 40,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;
const menuItemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.75,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.25 + -i * 0.1,
    },
  }),
} as Variants;

const HeaderLogo = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Link href={"/"} {...props} />;
};

const NavMobile = () => {
  return (
    <AnimatedMenu className="self-center relative">
      <AnimatedMenuButton className="w-24 h-10 text-secondary-foreground font-medium">
        <AnimatedMenuButtonToggleIcon className="*:h-[1.5px] *:origin-[17.5%]" />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>
      <AnimatedMenuList
        layout
        variants={menuListvariants}
        className="absolute right-0 top-0 bg-secondary/70 backdrop-blur border border-border/10 shadow rounded-3xl"
      >
        <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
          <div className="flex flex-col items-start gap-4 *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_links.map((navLink, i) => (
              <div className="overflow-hidden" key={navLink.id}>
                <AnimatedMenuItem
                  className="perspective-dramatic perspective-origin-bottom"
                  variants={menuItemVariants}
                  order={i}
                >
                  <CloseAnimatedMenu>
                    <Link
                      className="text-2xl font-medium p-2"
                      href={navLink.href}
                      title={navLink.label}
                      aria-label={`navigate to ${navLink.label}`}
                    >
                      {navLink.label}
                    </Link>
                  </CloseAnimatedMenu>
                </AnimatedMenuItem>
              </div>
            ))}
          </div>
          <div className="flex gap-3 *:transition-blur *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_socials.map((navSocial, i) => (
              <div className="overflow-hidden text-primary" key={navSocial.id}>
                <AnimatedMenuItem
                  order={i + nav_links.length}
                  variants={menuItemVariants}
                >
                  <CloseAnimatedMenu>
                    <Link
                      className="p-1"
                      href={navSocial.href}
                      title={navSocial.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`navigate to ${navSocial.label}`}
                    >
                      {navSocial.label}
                    </Link>
                  </CloseAnimatedMenu>
                </AnimatedMenuItem>
              </div>
            ))}
          </div>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
};

const NavDesktop = () => {
  return (
    <nav className="flex border border-border/50 bg-card/50 backdrop-blur-xs gap-4 px-6 rounded-4xl items-center justify-between *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
      {nav_links.map((navLink) => (
        <Link
          key={navLink.id}
          className="font-medium text-sm p-2"
          href={navLink.href}
          title={navLink.label}
          aria-label={`navigate to ${navLink.label}`}
        >
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
};
export function Header() {
  const isMobile = useIsMobile(920);
  const { isHidden, setIsHidden } = useToggleOnScroll();
  const showHeader = () => setIsHidden(false);
  return (
    <motion.header
      className=" flex justify-between px-16 h-14 fixed z-999 top-2 left-0 w-full"
      animate={isHidden ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: "0%" }}
      onFocusCapture={showHeader}
    >
      <HeaderLogo className="basis-1/2 ">
        <Logo className="w-20 backdrop-blur-xs" />
      </HeaderLogo>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </motion.header>
  );
}
