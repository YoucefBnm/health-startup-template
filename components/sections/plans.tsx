"use client";
import {
  ArrowUpRightIcon,
  CircleStarIcon,
  ShieldPlusIcon,
  Tally3Icon,
} from "lucide-react";
import {
  calculateYearlySavings,
  Pricing,
  PricingCard,
  PricingFeature,
  PricingIncludesPrevious,
  PricingIntervalSwitch,
  PricingPackage,
  PricingValue,
} from "../pricing";
import {
  SectionText,
  SectionTextHeading,
  SectionTextLead,
  SectionTextTitle,
} from "../section-text";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface PricingConfig {
  id: string;
  name: string;
  description: string;
  icon: typeof Tally3Icon;
  pricing: { monthly: number; yearly: number };
  features: string[];
  includesPrevious?: boolean;
  featured?: boolean;
}

const PLAN_CONFIGS: PricingConfig[] = [
  {
    id: "basic",
    name: "Basic Care",
    description:
      "Perfect for individuals who want essential coverage without complexity",
    icon: Tally3Icon,
    pricing: { monthly: 19, yearly: 199 },
    features: [
      "Access to certified doctors via telehealth (weekday hours)",
      "Standard prescription discounts",
      "Basic claims submission through the app",
      "Coverage recommendations tailored to your profile",
      "Secure health records dashboard",
      "Email-based support",
    ],
  },
  {
    id: "family",
    name: "Family Plus",
    description: "Built for households who need reliable, everyday care.",
    icon: CircleStarIcon,
    pricing: { monthly: 49, yearly: 499 },
    featured: true,
    includesPrevious: true,
    features: [
      "24/7 unlimited telehealth visits for the entire family",
      "Priority claims processing (usually under 48 hours)",
      "Child wellness reminders & family scheduling tools",
      "Up to 40% off partner clinics and lab tests",
      "Full access to medical history and care summaries",
      "Live chat + phone support",
      "Add dependents with one click",
    ],
  },
  {
    id: "premium",
    name: "Premium Shield",
    description:
      "Comprehensive coverage for those who want maximum peace of mind and priority care.",
    icon: ShieldPlusIcon,
    pricing: { monthly: 89, yearly: 899 },
    includesPrevious: true,
    features: [
      "Dedicated personal care coordinator",
      "Fastest claim approvals (often same-day)",
      "Unlimited specialist teleconsultations",
      "Annual wellness check package included",
      "Extended provider network with premium partners",
      "Priority hotline + concierge support",
      "Advanced analytics on health trends & recommendations",
    ],
  },
];

export function Plans() {
  const savings = calculateYearlySavings(PLAN_CONFIGS[1].pricing);

  return (
    <section className="pb-16 px-4">
      <SectionText className="w-3/4 mx-auto flex flex-col justify-center mb-10">
        <SectionTextTitle>our plans</SectionTextTitle>
        <SectionTextHeading>Choose Your Plan</SectionTextHeading>
        <SectionTextLead>
          Flexible healthcare coverage that grows with your needs
        </SectionTextLead>
      </SectionText>
      <Pricing className="space-y-8">
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <PricingIntervalSwitch />
          <Label className="text-muted-foreground">Billed annually</Label>
          <Badge className="border-primary text-primary" variant={"outline"}>
            💰 Save up to {savings}% with annual billing
          </Badge>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-end">
          {PLAN_CONFIGS.map((plan) => {
            return (
              <PricingCard
                className="md:flex-1 p-0 max-w-md rounded"
                key={plan.id}
              >
                <div className="p-6 space-y-4 border-b border-b-border/20 ">
                  <PricingPackage className="flex-col space-y-2 items-start ">
                    <div className="w-full flex gap-4 items-center justify-between">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      {plan.featured && (
                        <Badge className="rounded-full text-background">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </PricingPackage>

                  <PricingValue
                    yearlyValue={plan.pricing.yearly}
                    monthlyValue={plan.pricing.monthly}
                    className="font-semibold text-2xl "
                  />
                  <div>
                    <Button size="sm" variant={"outline"}>
                      Get Started
                      <ArrowUpRightIcon className="size-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 pb-8 px-6">
                  {plan.includesPrevious && (
                    <PricingIncludesPrevious className="text-sm text-muted-foreground">
                      Everything in previous
                    </PricingIncludesPrevious>
                  )}
                  {plan.features.map((feature) => (
                    <PricingFeature
                      className="text-sm text-muted-foreground"
                      key={feature}
                    >
                      {feature}
                    </PricingFeature>
                  ))}
                </div>
              </PricingCard>
            );
          })}
        </div>
        <div className=" text-center text-sm text-muted-foreground">
          <p>
            All plans include a 30-day money-back guarantee. No hidden fees.
          </p>
        </div>
      </Pricing>
    </section>
  );
}
