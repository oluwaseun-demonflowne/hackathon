import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "What is the Wellspring Hackathon?",
    answer:
      "The Wellspring Hackathon is an innovation challenge for students to showcase their skills, collaborate, and build impactful solutions.",
  },
  {
    id: "item-2",
    question: "Who can participate?",
    answer:
      "The hackathon is open to all IT students at Wellspring University.",
  },
  {
    id: "item-3",
    question: "What are the benefits of participating?",
    answer:
      "Participants can win prizes, receive mentorship, and gain visibility for their projects.",
  },
  {
    id: "item-4",
    question: "How can I register?",
    answer:
      "You can register by visiting the official Wellspring Hackathon page and completing the registration form.",
  },
  {
    id: "item-5",
    question: "Are there any prerequisites?",
    answer:
      "No prerequisites are required. Just come with your enthusiasm and innovative ideas!",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="px-4 md:px-20 space-y-5 text-[#3c3b3a] font-brush py-10 bg-[#F5F4E2]">
      <h1 className="font-black text-3xl md:text-6xl">Frequently asked question</h1>
      <Accordion className=" " type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="font-semibold text-xl">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-lg font-light tracking-wider">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
