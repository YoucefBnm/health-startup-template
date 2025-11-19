import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  SectionText,
  SectionTextHeading,
  SectionTextLead,
  SectionTextTitle,
} from "../section-text";

export function CTA() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto w-fit relative p-2 bg-linear-120  from-accent/30 to-primary/50 bg-no-repeat border border-foreground/10 rounded-3xl shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
        <div className="border border-border/20 rounded-[19px] shadow-[inset_0_1px_#ffffff1a,0_0_1.8px_#ffffff30]">
          <SectionText className="flex border-24 ring ring-black border-black/60 flex-col text-center justify-center items-center size-full py-20 px-6  bg-linear-180 via-10% from-card to-card/80 bg-no-repeat rounded-[19px] relative">
            <SectionTextTitle className="mb-1">
              start your coverage with carecover
            </SectionTextTitle>
            <SectionTextHeading>
              Built on expertise, backed by trust
            </SectionTextHeading>

            <SectionTextLead className="text-base max-w-[52ch] my-6">
              CareCover Pro helps individuals and small businesses get flexible,
              affordable health plans with fast claims, 24/7 care access, and a
              simple member portal. Compare plans, enroll online, and manage
              claims in minutes.
            </SectionTextLead>

            <Button size="lg">
              Start today <ArrowRightIcon />
            </Button>
          </SectionText>
        </div>
      </div>
    </section>
  );
}
