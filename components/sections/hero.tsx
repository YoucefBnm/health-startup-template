"use client";
import { motion } from "motion/react";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";
import { ANIMATION_VARIANTS } from "../systaliko-ui/utils/animation-variants";
import { Button } from "../ui/button";
import { ArrowUpRightIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

const animation_variants = ANIMATION_VARIANTS["default"];
const animation_variants_blur = ANIMATION_VARIANTS["blur"];
function HeroText() {
  return (
    <div className="self-center pt-12 ps-8 space-y-6">
      <h1>
        <TextStaggerInview
          animation="left"
          className=" text-4xl *:leading-none *:overflow-hidden *:duration-150 *:ease-out *:pb-1"
        >
          instant health insights understand your symptoms
        </TextStaggerInview>
      </h1>
      <motion.p
        variants={animation_variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        className="text-muted-foreground text-balance"
      >
        Your AI health companion, available 24/7. Get instant health insights,
        understand your symptoms, organize your medical records, and make
        informed healthcare decisions all powered by advanced artificial
        intelligence.
      </motion.p>

      <motion.div
        className="flex gap-2"
        variants={animation_variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.7, ease: "easeOut" }}
      >
        <Button>
          Start Free <ArrowUpRightIcon />
        </Button>
        <Button variant={"secondary"}>
          Watch Demo <PlayIcon />
        </Button>
      </motion.div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative place-content-center rounded-l-2xl overflow-hidden min-h-[500px] w-full">
      <Image
        alt="shader"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        src="/shader-image.png"
        aria-hidden={true}
        className="size-full object-cover"
      />
      <motion.div
        variants={animation_variants_blur}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
      >
        <Image
          alt="dashboard"
          width={646}
          height={767}
          sizes="(max-width: 768px) 100vw, 50vw"
          src="/dashboard-image.png"
          className="size-full block  relative object-cover  z-2"
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8">
      <HeroText />
      <HeroImage />
    </section>
  );
}
