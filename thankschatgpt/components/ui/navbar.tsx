"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/",
    description: "📞 988",
  },
  {
    title: "Crisis Text Line",
    href: "https://www.crisistextline.org/",
    description: "📞 741-741",
  },
  {
    title: "Domestic Violence Hotline",
    href: "https://www.thehotline.org/",
    description: "📞 800-799-7233",
  },
  {
    title: "SAMHSA’s Helpline",
    href: "https://www.samhsa.gov/",
    description: "📞 800-662-4357",
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu className="mx-32 py-4">
      <NavigationMenuList>
        <NavigationMenuItem className="px-2">
          <NavigationMenuLink href="/">
            <div className="pr-4">
              <svg
                width="80"
                height="32"
                viewBox="0 0 337 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="337" height="126" fill="#4F46E5" />
                <path
                  d="M15.0682 23.1818H33.2727L52.5 70.0909H53.3182L72.5455 23.1818H90.75V93H76.4318V47.5568H75.8523L57.7841 92.6591H48.0341L29.9659 47.3864H29.3864V93H15.0682V23.1818ZM102.639 93V40.6364H117.162V93H102.639ZM109.935 33.8864C107.776 33.8864 105.923 33.1705 104.378 31.7386C102.855 30.2841 102.094 28.5455 102.094 26.5227C102.094 24.5227 102.855 22.8068 104.378 21.375C105.923 19.9205 107.776 19.1932 109.935 19.1932C112.094 19.1932 113.935 19.9205 115.457 21.375C117.003 22.8068 117.776 24.5227 117.776 26.5227C117.776 28.5455 117.003 30.2841 115.457 31.7386C113.935 33.1705 112.094 33.8864 109.935 33.8864ZM143.318 62.7273V93H128.795V40.6364H142.636V49.875H143.25C144.409 46.8295 146.352 44.4205 149.08 42.6477C151.807 40.8523 155.114 39.9545 159 39.9545C162.636 39.9545 165.807 40.75 168.511 42.3409C171.216 43.9318 173.318 46.2045 174.818 49.1591C176.318 52.0909 177.068 55.5909 177.068 59.6591V93H162.545V62.25C162.568 59.0455 161.75 56.5455 160.091 54.75C158.432 52.9318 156.148 52.0227 153.239 52.0227C151.284 52.0227 149.557 52.4432 148.057 53.2841C146.58 54.125 145.42 55.3523 144.58 56.9659C143.761 58.5568 143.341 60.4773 143.318 62.7273ZM207.81 93.8523C203.832 93.8523 200.23 92.8295 197.003 90.7841C193.798 88.7159 191.253 85.6818 189.366 81.6818C187.503 77.6591 186.571 72.7273 186.571 66.8864C186.571 60.8864 187.537 55.8977 189.469 51.9205C191.401 47.9205 193.969 44.9318 197.173 42.9545C200.401 40.9545 203.935 39.9545 207.776 39.9545C210.707 39.9545 213.151 40.4545 215.105 41.4545C217.082 42.4318 218.673 43.6591 219.878 45.1364C221.105 46.5909 222.037 48.0227 222.673 49.4318H223.116V23.1818H237.605V93H223.287V84.6136H222.673C221.991 86.0682 221.026 87.5114 219.776 88.9432C218.548 90.3523 216.946 91.5227 214.969 92.4545C213.014 93.3864 210.628 93.8523 207.81 93.8523ZM212.412 82.2955C214.753 82.2955 216.73 81.6591 218.344 80.3864C219.98 79.0909 221.23 77.2841 222.094 74.9659C222.98 72.6477 223.423 69.9318 223.423 66.8182C223.423 63.7045 222.991 61 222.128 58.7045C221.264 56.4091 220.014 54.6364 218.378 53.3864C216.741 52.1364 214.753 51.5114 212.412 51.5114C210.026 51.5114 208.014 52.1591 206.378 53.4545C204.741 54.75 203.503 56.5455 202.662 58.8409C201.821 61.1364 201.401 63.7955 201.401 66.8182C201.401 69.8636 201.821 72.5568 202.662 74.8977C203.526 77.2159 204.764 79.0341 206.378 80.3523C208.014 81.6477 210.026 82.2955 212.412 82.2955ZM264.068 23.1818V93H249.545V23.1818H264.068ZM284.668 112.636C282.827 112.636 281.099 112.489 279.486 112.193C277.895 111.92 276.577 111.568 275.531 111.136L278.804 100.295C280.509 100.818 282.043 101.102 283.406 101.148C284.793 101.193 285.986 100.875 286.986 100.193C288.009 99.5114 288.838 98.3523 289.474 96.7159L290.327 94.5L271.543 40.6364H286.815L297.656 79.0909H298.202L309.145 40.6364H324.52L304.168 98.6591C303.19 101.477 301.861 103.932 300.179 106.023C298.52 108.136 296.418 109.761 293.872 110.898C291.327 112.057 288.259 112.636 284.668 112.636Z"
                  fill="white"
                />
              </svg>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <NavigationMenuTrigger>Purpose</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#DAD8FC]/50 to-[#DAD8FC] p-6 no-underline outline-none focus:shadow-md"
                    href="/ourmission"
                  >
                    <div className="mb-2 mt-4 text-xl font-semibold">
                      Mindly
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      An AI-powered mental health chatbot designed to provide
                      emotional support. Built using Gemini AI and Next.js.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/ourmission" title="Our mission">
                Whether you're dealing with stress, self-doubt, or simply need
                someone to talk to, Mindly is here for you.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
