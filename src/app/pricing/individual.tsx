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
    <div>
      <div className="grid gap-[2rem] px-[2rem] md:grid-cols-4">
        {pricingData.individual.map((tier) => (
          <Card key={tier.title} className="flex flex-col bg-[#0c0c0c]">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4 text-4xl font-bold">
                {tier.price}
                <span className="text-lg font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <BadgeCheck className="h-[22px] w-[22px] flex-shrink-0 text-[#bfbfbf]" />
                    <p className="text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {tier.title === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
