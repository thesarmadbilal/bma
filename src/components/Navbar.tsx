import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./theme/ThemeToggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenuList } from "./ui/navigation-menu";

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="flex items-center">
            <img
              src="/lovable-uploads/bma.png"
              alt="BMA Capital Logo"
              className="h-10 mr-4"
              key={`logo-${new Date().getTime()}`}
            />
          </a>
        </div>


        <div className="hidden md:flex md:flex-1">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList>
              <NavigationMenuItem className="group relative">
                <NavigationMenuTrigger>
                  <Link
                    to="/investors"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Investor's Corner
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full z-50 mt-1 hidden min-w-[200px] flex-col space-y-1 rounded-md border bg-white p-2 text-black shadow-lg group-hover:flex">
                  <Link
                    to="/investors"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Investor Guide
                  </Link>
                  <Link
                    to="/glossary"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Glossary
                  </Link>
                  <Link
                    to="/faqs"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    FAQs
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              

              {/* Business Activities Dropdown */}
              <NavigationMenuItem className="group relative max-w-none">
                <NavigationMenuTrigger>
                  <Link
                    to="/business-activities"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Business Activities
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full z-50 mt-1 hidden min-w-[200px] flex-col space-y-1 rounded-md border bg-white p-2 text-black shadow-lg group-hover:flex">
                  <Link
                    to="/business-activities"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Equities
                  </Link>
                  <Link
                    to="/business-activities"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Investment Bank
                  </Link>
                  <Link
                    to="/business-activities"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Investment Advisory
                  </Link>
                  <Link
                    to="/business-activities"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Commodities
                  </Link>
                  <Link
                    to="/business-activities"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Money Market/Forex
                  </Link>
                  <Link
                    to="/business-activities#research"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Research
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Governance Dropdown */}
              <NavigationMenuItem className="group relative max-w-none">
                <NavigationMenuTrigger>
                  <Link
                    to="/governance"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Governance
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full z-50 mt-1 hidden min-w-[200px] flex-col space-y-1 rounded-md border bg-white p-2 text-black shadow-lg group-hover:flex">
                  <Link
                    to="/about/#board"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Board of Directors
                  </Link>
                  <Link
                    to="/governance#committees"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Board Audit Committee
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Pattern of Share Holding
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Details of Sponsor
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Agent Details
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Broker Ratings
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Press Releases JCR-VIS
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us Dropdown */}
              <NavigationMenuItem className="group relative max-w-none">
                <NavigationMenuTrigger>
                  <Link
                    to="/about"
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About Us
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full z-50 mt-1 hidden min-w-[200px] flex-col space-y-1 rounded-md border bg-white p-2 text-black shadow-lg group-hover:flex">
                  <Link
                    to="/about/bma-at-a-glance"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    BMA at a Glance
                  </Link>
                  <Link
                    to="/about/introduction"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Introduction
                  </Link>
                  <Link
                    to="/about/our-history"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Our History
                  </Link>
                  <Link
                    to="/about/vision-mission"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Senior Management
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Legal Advisor(s)
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Awards and Milestones
                  </Link>
                  <Link
                    to="/coming"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Corporate Governance
                  </Link>
                  <Link
                    to="/contact"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-2 pr-4 border-r"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur"></div>
              <Phone className="h-4 w-4 text-primary relative" />
            </div>
            <a
              href="tel:+922111262111"
              className="text-sm font-medium hover:text-primary transition-colors group flex items-center"
            >
              <span className="opacity-70 group-hover:opacity-100">+92 21</span>
              <span className="text-primary ml-1 group-hover:scale-105 transition-transform"> 111 262 111</span>
            </a>
          </motion.div>

          <ThemeToggle />

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild>
              <a href="https://web.bmatrade.com/webterminal/BMALoginView">Log In</a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://aof.bmatrade.com/">Open an Account</a>
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 space-y-4">
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+922111262111" className="text-sm">
                +92 21 111 262 111
              </a>
            </div>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/investors">Investor's Corner</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/business-activities">Business Activities</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/governance">Governance</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}