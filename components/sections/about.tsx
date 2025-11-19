import {
  ExpandIcon,
  GlobeIcon,
  HeadsetIcon,
  SmileIcon,
  TrophyIcon,
} from "lucide-react";
import {
  SectionText,
  SectionTextHeading,
  SectionTextLead,
} from "../section-text";
import { cn } from "@/lib/utils";

interface AchievementProps {
  id: string;
  title: string;
  icon: typeof SmileIcon;
  description: string;
}
const achievements: AchievementProps[] = [
  {
    id: "achievement-trust",
    title: "Trusted by Thousands Nationwide",
    icon: GlobeIcon,
    description:
      "Over 50,000 families rely on CareCover Pro for their health coverage and peace of mind every year.",
  },
  {
    id: "achievement-satisfaction",
    title: "99% Claim Satisfaction Rate",
    icon: SmileIcon,
    description:
      "Our commitment to clarity and care means that almost every claim is resolved quickly and transparently.",
  },
  {
    id: "achivement-top-rated",
    title: "Top rated support team",
    icon: HeadsetIcon,
    description:
      "Recognized as one of the best customer service providers in the health insurance sector for three consecutive years.",
  },
  {
    id: "achievement-award",
    title: "Award-Winning Innovation",
    icon: TrophyIcon,
    description:
      "Recipient of the HealthTech Excellence Award 2024 for simplifying access to telemedicine and online health services.",
  },
  {
    id: "achievement-expand",
    title: "Expanding Care Network",
    icon: ExpandIcon,
    description:
      "Partnered with 2,000+ certified healthcare providers to ensure quality care in every region.",
  },
];

function AchievementCard({
  title,
  icon,
  description,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement> & Omit<AchievementProps, "id">) {
  const AchievementIcon = icon;
  return (
    <div
      className={cn("flex flex-col items-start space-y-6", className)}
      {...props}
    >
      <div className="p-4 rounded-xl bg-muted text-muted-foreground">
        <AchievementIcon className="size-8" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="px-6 pt-20 space-y-10">
      <SectionText className="flex flex-col md:flex-row md:text-left md:items-center md:justify-between md:gap-8">
        <SectionTextHeading className="flex-1">
          Built on expertise,{" "}
          <span className="text-primary">backed by trust</span>
        </SectionTextHeading>
        <SectionTextLead className="max-w-[52ch]">
          CareCover Pro helps individuals and small businesses get flexible,
          affordable health plans with fast claims, 24/7 care access, and a
          simple member portal. Compare plans, enroll online, and manage claims
          in minutes.
        </SectionTextLead>
      </SectionText>

      <div className="flex flex-wrap ">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            className="md:basis-1/3 px-6 py-8 md:nth-1:border-b md:nth-2:border-b md:nth-3:border-b md:nth-2:border-x md:nth-5:border-x"
            title={achievement.title}
            icon={achievement.icon}
            description={achievement.description}
          />
        ))}
      </div>
    </section>
  );
}
