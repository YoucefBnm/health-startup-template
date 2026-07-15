"use client";

import { motion } from "motion/react";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";
import { ANIMATION_VARIANTS } from "../systaliko-ui/utils/animation-variants";
import { BotIcon, BrainCircuitIcon, ShieldCheckIcon } from "lucide-react";
import { Process } from "@/components/process";
const animation_variants = ANIMATION_VARIANTS["default"];
const FEATURES = [
  {
    Icon: ShieldCheckIcon,
    title: "AI Symptom Checker",
    description:
      "Describe your symptoms in natural language and receive instant, evidence-based guidance.",
  },
  {
    Icon: BotIcon,
    title: "Personal Health Assistant",
    description:
      "Ask health-related questions anytime and receive personalized answers based on your medical history.",
  },
  {
    Icon: BrainCircuitIcon,
    title: "Medical Record Intelligence",
    description:
      "Upload lab reports, prescriptions, and medical documents. AI automatically organizes, summarizes.",
  },
];
function FeaturesCard({
  Icon,
  title,
  description,
}: {
  Icon: typeof ShieldCheckIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="min-w-xs bg-card text-card-foreground rounded-lg p-8 flex items-center gap-8">
      <div>
        <Icon className="size-8 text-primary stroke-[1.5]" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground text-xs text-balance">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="relative border-y space-y-10 mt-8 py-16 px-8">
      <div className="max-w-md space-y-4">
        <h2>
          <TextStaggerInview
            className="text-3xl block max-w-[20ch] *:overflow-hidden *:leading-none *:pb-1 leading-none *:duration-150 *:ease-out"
            animation="left"
            viewport={{ once: true, amount: "all" }}
          >
            Trusted by people who want smarter healthcare
          </TextStaggerInview>
        </h2>
        <motion.p
          className="text-muted-foreground text-balance"
          variants={animation_variants}
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: "all" }}
        >
          Join thousands of individuals, families, and healthcare professionals
          using AI to make healthcare more accessible, organized and
          personalized.
        </motion.p>
      </div>

      <div className="flex justify-center flex-wrap gap-6 flex-1">
        <div className=" grow">
          <Process />
        </div>
        <div className="flex-1  flex flex-col gap-6">
          {FEATURES.map((feature, index) => (
            <FeaturesCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
