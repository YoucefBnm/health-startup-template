"use client";
import { CheckIcon } from "lucide-react";
import {
  motion,
  HTMLMotionProps,
  useScroll,
  MotionValue,
  useTransform,
  MapInputRange,
} from "motion/react";
import Image from "next/image";
import React from "react";

const features_cards = [
  {
    id: "feature-plan-1",
    title: "Smart Plan Matching",
    description:
      "Get personalized coverage recommendations in seconds. Our system analyzes your household size, health needs, and budget to match you with the most cost-effective plan — no confusing forms or sales pressure. Just clear options that fit your life.",
    imageUrl:
      "https://images.pexels.com/photos/8441775/pexels-photo-8441775.jpeg",
  },
  {
    id: "feature-support-2",
    title: "24/7 Telehealth Access",
    description:
      "Talk to certified doctors anytime, anywhere. Whether it's a late-night fever or a quick follow-up question, you’ll have round-the-clock access to medical professionals without waiting rooms, travel, or extra fees.",
    imageUrl:
      "https://images.pexels.com/photos/7709146/pexels-photo-7709146.jpeg",
  },
  {
    id: "feature-lighting-3",
    title: "Lighting fast Claims",
    description:
      "Skip the paperwork. Submit claims through a simple mobile upload and track every step in real time. Most claims are reviewed within 48 hours, giving you faster reimbursements and fewer surprises.",
    imageUrl:
      "https://images.pexels.com/photos/9461250/pexels-photo-9461250.jpeg",
  },
  {
    id: "feature-transparent-4",
    title: "Transparent Pricing",
    description:
      "Know exactly what you're paying for. Every plan comes with upfront pricing, simplified explanations, and zero hidden charges. You get full clarity on coverage, co-pays, and deductibles before you commit.",
    imageUrl:
      "https://images.pexels.com/photos/5717944/pexels-photo-5717944.jpeg",
  },
  {
    id: "feature-nationwide-5",
    title: "Nationwid Network of providers",
    description:
      "Access over 2,000+ vetted healthcare professionals, including primary doctors, specialists, labs, and urgent-care centers. No matter where you live, quality care is always within reach.",
    imageUrl:
      "https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg",
  },
  {
    id: "feature-familly-6",
    title: "Family Friendly Tools",
    description:
      "Keep your entire household connected. Add dependents with one click, manage appointments for children or elderly family members, and receive reminders for vaccinations, checkups, and routine screenings.",
    imageUrl:
      "https://images.pexels.com/photos/8763068/pexels-photo-8763068.jpeg",
  },
];
interface FeatureImageProps extends HTMLMotionProps<"div"> {
  imageUrl: string;
  scrollYProgress: MotionValue<number>;
  inputRange: MapInputRange;
  outputRange?: unknown[];
}
function FeatureImage({
  imageUrl,
  scrollYProgress,
  inputRange,
  outputRange = [0, 1],
  ...props
}: FeatureImageProps) {
  const opacity = useTransform(scrollYProgress, inputRange, outputRange);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 size-full"
      {...props}
    >
      <Image
        fill
        alt="carecover feature"
        src={imageUrl}
        className="size-full object-cover"
      />
    </motion.div>
  );
}
export function Features() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  return (
    <section ref={scrollRef} className="relative  py-12 px-8 ">
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-8 ">
        <div className="space-y-4 ">
          {features_cards.map((feature) => (
            <div
              key={feature.id}
              className="md:h-screen  place-content-center "
            >
              <div className="flex items-start space-x-4">
                <div className="p-1">
                  <CheckIcon className="size-6 text-muted" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-3xl">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-[48ch]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky top-0 right-0 w-full h-screen place-content-center">
          <div className="w-full aspect-video p-2 bg-linear-120 from-muted-foreground/30 to-muted/40 bg-no-repeat border border-foreground/10 rounded-3xl shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
            <div className="size-full border-16 border-stone-800 ring ring-black rounded-[19px] relative">
              {features_cards.map((feature, index) => {
                const start = index / (features_cards.length + 1);
                const end = (index + 1) / (features_cards.length + 1);
                const range = [start, end];
                return (
                  <FeatureImage
                    key={feature.id}
                    imageUrl={feature.imageUrl}
                    scrollYProgress={scrollYProgress}
                    inputRange={range}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
