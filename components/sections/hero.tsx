"use client";
import { motion, MotionConfig, stagger } from "motion/react";
import Image from "next/image";
import { ANIMATION_VARIANTS } from "../systaliko-ui/utils/animation-variants";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

function HeroColImage() {
  const fadeLeft = ANIMATION_VARIANTS["left"];
  const fadeRight = ANIMATION_VARIANTS["right"];
  return (
    <div className="relative overflow-hidden min-h-[580px] w-full p-6 space-y-10 flex flex-col justify-end">
      <Image
        src="/hero-image.jpg"
        alt="woman looking at carecover website"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute inset-0 object-cover"
        priority
      />
      <motion.div
        className=" place-self-end"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        <HeroCard
          title="99%"
          heading="Satisfaction Rate"
          description="Clarity and caring means that almost every claim is resolved quickly and transparently."
        />
      </motion.div>
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 1,
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        <HeroCard
          title="500K+"
          heading="Members Covered"
          description="Over 50,000 families rely on CareCover Pro for their health coverage and peace of mind every year."
        />
      </motion.div>
    </div>
  );
}
function HeroCard({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="w-fit space-y-2 p-4 border border-border/15 text-white bg-muted/20 shadow rounded-lg overflow-hidden backdrop-blur-xs">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <h3 className="text-lg font-medium">{heading}</h3>
      </div>

      <p className="text-sm text-muted max-w-[32ch]">{description}</p>
    </div>
  );
}
function HeroColText() {
  const variants = ANIMATION_VARIANTS["blur"];
  return (
    <motion.div
      className="flex flex-col items-start justify-center space-y-4 py-18 px-8 md:px-12 lg:px-16"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ delayChildren: stagger(0.3) }}
    >
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <motion.h1
          className="text-5xl tracking-tight font-semibold"
          variants={variants}
        >
          Health coverage that actually works for you
        </motion.h1>
        <motion.p className="text-lg text-muted-foreground" variants={variants}>
          Fast claims. Clear pricing. 24/7 care access nsurance built to be
          human.
        </motion.p>

        <motion.div variants={variants} className="flex flex-wrap gap-2">
          <Button size="lg">
            Get a free quote <ArrowRightIcon className="size-4" />
          </Button>
          <Button size="lg" variant={"link"}>
            Compare plans <ArrowRightIcon className="size-4" />
          </Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-wrap md:grid md:grid-cols-2">
      <HeroColText />
      <HeroColImage />
    </section>
  );
}
