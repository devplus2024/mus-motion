"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Individual from "./individual";
import Business from "./business";
import { HelpCircleIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the possible keys as a union of string literals
type TabKey = "individual" | "business";

const tabs: { id: TabKey; label: string }[] = [
  { id: "individual", label: "Individual" },
  { id: "business", label: " Business" },
];

const contents: Record<TabKey, JSX.Element> = {
  individual: <Individual />,
  business: <Business />,
};

function PricingPage() {
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0].id);

  return (
    <main className="pb-[6rem] pt-[1.3rem]">
      <div className="mb-[1rem] text-center">
        <h1 className="text-[1.8rem] font-bold">Choose Your Perfect Plan</h1>
        <p className="text-md text-muted-foreground">
          Unlock your musical potential with our cutting-edge software suite
        </p>
      </div>
      <div className="flex justify-center space-x-1">
        <div className="flex w-fit rounded-full border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <motion.div className="mt-[4rem]">{contents[activeTab]}</motion.div>
      <div className="mx-[2rem] mt-16 flex flex-col items-center">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="grid w-[700px] gap-8 md:grid-cols-1"
          >
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "We offer a 14-day free trial for all our plans. No credit card required to start your trial.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
              },
              {
                question: "Do you offer educational discounts?",
                answer:
                  "Yes, we offer special discounts for students and educational institutions. Please contact our sales team for more information.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "We use industry-standard encryption and security measures to protect your data. Your files are stored securely in the cloud with regular backups.",
              },
              {
                question: "Can I share my projects with others?",
                answer:
                  "Yes, you can easily share your projects with others. Our collaboration tools allow for seamless teamwork, especially in the Pro and Enterprise plans.",
              },
              {
                question: "What happens to my projects if I downgrade my plan?",
                answer:
                  "If you downgrade your plan, your projects will remain accessible, but certain features may become limited or unavailable based on the new plan.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 30-day money-back guarantee on annual subscriptions. Monthly subscriptions can be canceled at any time, but are non-refundable.",
              },
              {
                question:
                  "Is there a limit to the number of projects I can create?",
                answer:
                  "There is no limit to the number of projects you can create, regardless of your plan. However, storage limits may vary based on your chosen plan.",
              },
              {
                question: "How often are new features added?",
                answer:
                  "We regularly update our software with new features and improvements based on user feedback. Major updates are typically rolled out every quarter.",
              },
              {
                question: "Can I collaborate with users on different plans?",
                answer:
                  "Yes, you can collaborate with users on different plans, but certain features may be restricted based on the lowest plan in the collaboration.",
              },
              {
                question:
                  "Do I need an internet connection to use the software?",
                answer:
                  "An internet connection is required for cloud storage and collaboration features, but most core features are available offline after installation.",
              },
            ].map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default PricingPage;
