import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, HelpCircleIcon } from "lucide-react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 pb-8 pt-[1.5rem]">
      <div className="mb-[2.5rem] text-center">
        <h1 className="text-[1.8rem] font-bold">Choose Your Perfect Plan</h1>
        <p className="text-md text-muted-foreground">
          Unlock your musical potential with our cutting-edge software suite
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-4">
        {[
          {
            title: "Free",
            price: "$0",
            description: "For entry-level users and trial",
            features: [
              "5 virtual instruments",
              "10 audio effects",
              "2GB cloud storage",
              "Community forum access",
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
            ],
          },
          {
            title: "Enterprise",
            price: "Custom",
            description: "For studios and professional teams",
            features: [
              "Unlimited virtual instruments",
              "Unlimited audio effects",
              "100GB cloud storage",
              "24/7 phone support",
              "Advanced collaboration tools",
              "Custom plugin integration",
            ],
          },
        ].map((tier) => (
          <Card key={tier.title} className="flex flex-col dark:bg-[#000000]">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4 text-4xl font-bold">{tier.price}</div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircledIcon
                      width={"20"}
                      height={"20"}
                      className="mr-2"
                    />
                    {feature}
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

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
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
          ].map((faq) => (
            <Card key={faq.question} className="bg-[#000000]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircleIcon className="mr-2 h-5 w-5" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
