"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, CheckIcon, HelpCircleIcon } from "lucide-react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const pricingData = {
  individual: [
    {
      title: "Free",
      price: "$0",
      description: "For entry-level users and trial",
      features: [
        "5 virtual instruments",
        "10 audio effects",
        "2GB cloud storage",
        "Community forum access",
        "Basic tutorials and resources",
        "Limited export options",
        "Monthly newsletters",
        "Access to user community events",
      ],
    },
    {
      title: "Basic",
      price: "$9.99",
      description: "For hobbyists and beginners",
      features: [
        "10 virtual instruments",
        "50 audio effects",
        "5GB cloud storage",
        "Community forum access",
        "Standard tutorials and resources",
        "Basic MIDI support",
        "Limited collaborative features",
        "Monthly live Q&A sessions",
      ],
    },
    {
      title: "Pro",
      price: "$24.99",
      description: "For serious musicians and producers",
      features: [
        "50 virtual instruments",
        "100 audio effects",
        "25GB cloud storage",
        "Priority email support",
        "Collaboration tools",
        "Access to premium tutorials and workshops",
        "Advanced MIDI editing features",
        "Audio mixing and mastering tools",
        "Monthly feature updates",
        "Cloud project backup",
        "Offline usage capabilities",
      ],
    },
    {
      title: "Ultimate",
      price: "$39.99",
      description: "For professional studios and artists",
      features: [
        "Unlimited virtual instruments",
        "Unlimited audio effects",
        "100GB cloud storage",
        "24/7 phone support",
        "Advanced collaboration tools",
        "Custom plugin integration",
        "Exclusive artist packs",
        "Multi-user support for studios",
        "Access to beta features",
        "Direct developer support",
        "Tailored mastering services",
        "Priority software updates",
        "Cross-platform syncing",
        "Advanced sound design tools",
        "Personalized workflow consultation",
        "Professional-grade recording tools",
        "Dedicated project management tools",
        "Export in multiple formats",
        "Full integration with DAWs",
        "Customizable templates",
        "VIP access to events and workshops",
        "Personalized coaching sessions",
        "Brand partnerships for exclusive content",
      ],
    },
  ],
  business: [
    {
      title: "Team",
      price: "$99.99",
      description: "For small studios and bands",
      features: [
        "5 user licenses",
        "100 virtual instruments",
        "200 audio effects",
        "100GB shared cloud storage",
        "Priority email support",
        "Team collaboration tools",
      ],
    },
    {
      title: "Studio",
      price: "$199.99",
      description: "For professional recording studios",
      features: [
        "10 user licenses",
        "Unlimited virtual instruments",
        "Unlimited audio effects",
        "500GB shared cloud storage",
        "24/7 phone support",
        "Advanced team collaboration",
        "Custom plugin integration",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations and educational institutions",
      features: [
        "Unlimited user licenses",
        "Unlimited virtual instruments",
        "Unlimited audio effects",
        "1TB shared cloud storage",
        "Dedicated account manager",
        "On-site training and support",
        "Custom feature development",
      ],
    },
  ],
};
export default function Individual() {
  const [activeTab, setActiveTab] = useState("individual");
  return (
    <motion.div>
      <motion.div className="grid px-[5rem] md:grid-cols-3">
        {/* <div className="flex flex-col border bg-black text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold tracking-tight">Free</h3>
            <p className="text-sm text-muted-foreground">
              For entry-level users and trial
            </p>
          </div>
          <div className="flex-grow p-6 pt-0">
            <div className="mb-4 text-4xl font-bold">
              $0
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />5 virtual
                instruments
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                10 audio effects
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                2GB cloud storage
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                Community forum access
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                Basic tutorials and resources
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                Limited export options
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                Monthly newsletters
              </li>
              <li className="flex items-center">
               <BadgeCheck className="text-yellow-300 mr-2 h-[22px] w-[22px]" />
                Access to user community events
              </li>
            </ul>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Get Started
            </button>
          </div>
        </div> */}
        <div className="flex flex-col border-y border-l bg-black text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold tracking-tight">Basic</h3>
            <p className="text-sm text-muted-foreground">
              For hobbyists and beginners
            </p>
          </div>
          <div className="flex-grow p-6 pt-0">
            <div className="mb-4 text-4xl font-bold">
              $9.99
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                10 virtual instruments
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                50 audio effects
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                5GB cloud storage
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Community forum access
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Standard tutorials and resources
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Basic MIDI support
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Limited collaborative features
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Monthly live Q&A sessions
              </li>
            </ul>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col border-y border-l bg-black text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold tracking-tight">Pro</h3>
            <p className="text-sm text-muted-foreground">
              For serious musicians and producers
            </p>
          </div>
          <div className="flex-grow p-6 pt-0">
            <div className="mb-4 text-4xl font-bold">
              $24.99
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                50 virtual instruments
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                100 audio effects
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                25GB cloud storage
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Priority email support
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Collaboration tools
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Access to premium tutorials and workshops
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Advanced MIDI editing features
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Audio mixing and mastering tools
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Monthly feature updates
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Cloud project backup
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Offline usage capabilities
              </li>
            </ul>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col border bg-black text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold tracking-tight">Ultimate</h3>
            <p className="text-sm text-muted-foreground">
              For professional studios and artists
            </p>
          </div>
          <div className="flex-grow p-6 pt-0">
            <div className="mb-4 text-4xl font-bold">
              $39.99
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Unlimited virtual instruments
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Unlimited audio effects
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                100GB cloud storage
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                24/7 phone support
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Advanced collaboration tools
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Exclusive artist packs
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Custom plugin integration
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Multi-user support for studios
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Access to beta features
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Direct developer support
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Tailored mastering services
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Priority software updates
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Cross-platform syncing
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Advanced sound design tools
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Personalized workflow consultation
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Professional-grade recording tools
              </li>
              <li className="flex items-center">
                <BadgeCheck className="mr-2 h-[22px] w-[22px] text-yellow-300" />
                Dedicated project management tools
              </li>
            </ul>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
