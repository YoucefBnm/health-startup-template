import { QuoteIcon } from "lucide-react";
import {
  CardTestimonial,
  TestimonialAuthor,
  TestimonialQuote,
  TestimonialRating,
} from "../systaliko-ui/blocks/testimonial-card";
import { VerticalMarquee } from "../vertical-marquee";
import {
  SectionText,
  SectionTextHeading,
  SectionTextLead,
  SectionTextTitle,
} from "../section-text";

const testimonials = [
  {
    id: "testimonial-sarah-m-1",
    rating: 5,
    quote:
      "As a working mom, scheduling doctor visits was always a challenge. With CareCover Pro, I booked a same-day telehealth appointment and had my son’s prescription ready within hours. The process was smooth, and the support team followed up to make sure everything went well. It felt like someone was actually looking out for us.",
    author: {
      name: "Sarah M.",
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Family Plan Member",
    },
  },
  {
    id: "testimonial-david-k-2",
    rating: 4.5,
    quote:
      "We switched to CareCover Pro for our small business, and the difference has been huge. Their onboarding sessions and easy-to-navigate dashboard helped our team members understand their coverage for the first time. Claims are faster, and support is incredibly responsive. It’s made our benefits package a real competitive advantage.",
    author: {
      name: "David K.",
      avatarUrl:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Business Owner",
    },
  },
  {
    id: "testimonial-maria-r-3",
    rating: 5,
    quote:
      "I’ve had insurance before, but nothing this straightforward. I submitted my claim through their mobile app and got reimbursed in a few days — no paperwork, no long calls, no confusion. It was honestly the best insurance experience I’ve had.",
    author: {
      name: "Maria R.",
      avatarUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Individual Member",
    },
  },
  {
    id: "testimonial-john-p-4",
    rating: 5,
    quote:
      "I didn’t expect online medical care to feel so real, but the doctor spent time listening and explaining things clearly. I felt more heard during that call than in most in-person visits. CareCover Pro has completely changed how I manage my health.",
    author: {
      name: "Jonathan P.",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Premium Plan Client",
    },
  },
  {
    id: "testimonial-eric-m-5",
    rating: 4.5,
    quote:
      "I was skeptical at first, but after a few sessions, I realized how much I loved the care I received. The staff was friendly, knowledgeable, and always willing to go the extra mile to make sure I felt comfortable. I highly recommend CareCover Pro to anyone looking for a reliable and affordable healthcare solution.",
    author: {
      name: "Eric M.",
      avatarUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Individual Member",
    },
  },
  {
    id: "testimonial-aisha-t-6",
    rating: 5,
    quote:
      "When my father got sick late at night, we used the 24/7 CareLine. We were instantly connected with a nurse who guided us step by step. The support was calm, professional, and incredibly reassuring. I’m grateful we had CareCover Pro when we needed it most.",
    author: {
      name: "Aisha T.",
      avatarUrl:
        "https://images.unsplash.com/photo-1586448325968-5ec7ba1da737?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "marketing specialist",
    },
  },
];

export function Testimonials() {
  const testimonialCol1 = testimonials.slice(0, 3);
  const testimonialCol2 = testimonials.slice(3, 6);
  const testimonialCol3 = testimonialCol1.reverse();
  return (
    <section className="py-12 space-y-8 px-8">
      <SectionText>
        <SectionTextTitle>Testimonials / Case Studies</SectionTextTitle>
        <SectionTextHeading>Real people. Real relief</SectionTextHeading>
        <SectionTextLead>
          Our team of experts has helped them all achieve the peace of mind they
          deserve.
        </SectionTextLead>
      </SectionText>

      <div className="flex justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
        <VerticalMarquee className="flex flex-col gap-6 pb-6 bg-background">
          {testimonialCol1.map((testimonial) => (
            <CardTestimonial
              key={testimonial.id}
              testimonialQuote={testimonial.quote}
              testimonialRating={testimonial.rating}
              testimonialAuthor={{
                authorName: testimonial.author.name,
                avatarUrl: testimonial.author.avatarUrl,
                description: testimonial.author.profession,
              }}
              role="article"
              aria-labelledby={`card-${testimonial.id}-title`}
              aria-describedby={`card-${testimonial.id}-content`}
              className=" max-w-2xl shadow-xs border-border/20 justify-evenly"
            >
              <TestimonialRating className="text-primary self-start" />
              <div className="relative text-lg flex">
                <sup>
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />{" "}
                </sup>
                <TestimonialQuote className="my-2">
                  {testimonial.quote}
                </TestimonialQuote>
                <sup className="self-end">
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />
                </sup>
              </div>

              <TestimonialAuthor className="flex  items-center gap-4" />
            </CardTestimonial>
          ))}
        </VerticalMarquee>
        <VerticalMarquee className="hidden md:flex flex-col gap-6 pb-6 bg-background">
          {testimonialCol2.map((testimonial) => (
            <CardTestimonial
              key={testimonial.id}
              testimonialQuote={testimonial.quote}
              testimonialRating={testimonial.rating}
              testimonialAuthor={{
                authorName: testimonial.author.name,
                avatarUrl: testimonial.author.avatarUrl,
                description: testimonial.author.profession,
              }}
              role="article"
              aria-labelledby={`card-${testimonial.id}-title`}
              aria-describedby={`card-${testimonial.id}-content`}
              className=" max-w-2xl shadow-xs border-border/20 justify-evenly"
            >
              <TestimonialRating className="text-primary self-start" />
              <div className="relative text-lg flex">
                <sup>
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />{" "}
                </sup>
                <TestimonialQuote className="my-2">
                  {testimonial.quote}
                </TestimonialQuote>
                <sup className="self-end">
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />
                </sup>
              </div>

              <TestimonialAuthor className="flex  items-center gap-4" />
            </CardTestimonial>
          ))}
        </VerticalMarquee>
        <VerticalMarquee className="hidden md:flex flex-col gap-6 pb-6 bg-background">
          {testimonialCol3.map((testimonial) => (
            <CardTestimonial
              key={testimonial.id}
              testimonialQuote={testimonial.quote}
              testimonialRating={testimonial.rating}
              testimonialAuthor={{
                authorName: testimonial.author.name,
                avatarUrl: testimonial.author.avatarUrl,
                description: testimonial.author.profession,
              }}
              role="article"
              aria-labelledby={`card-${testimonial.id}-title`}
              aria-describedby={`card-${testimonial.id}-content`}
              className=" max-w-2xl shadow-xs border-border/20 justify-evenly"
            >
              <TestimonialRating className="text-primary self-start" />
              <div className="relative text-lg flex">
                <sup>
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />{" "}
                </sup>
                <TestimonialQuote className="my-2">
                  {testimonial.quote}
                </TestimonialQuote>
                <sup className="self-end">
                  <QuoteIcon className="size-6 fill-muted-foreground/20 stroke-none" />
                </sup>
              </div>

              <TestimonialAuthor className="flex  items-center gap-4" />
            </CardTestimonial>
          ))}
        </VerticalMarquee>
      </div>
    </section>
  );
}
