import { HoverEffect } from "../ui/card-hover-effect";

export function ServicesSection() {
  return (
    <div className=" mx-auto ">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "Pet Adoption & Shelter",
    description:
      "Find loving homes for rescued pets and provide shelter for abandoned animals.",
    link: "/adoption-shelter",
  },
  {
    title: "Pet Grooming",
    description:
      "Professional grooming services including bathing, fur trimming, nail clipping, and styling.",
    link: "/grooming",
  },
  {
    title: "Pet Food & Supplies",
    description:
      "A wide variety of nutritious pet food, toys, and accessories to keep your pets happy and healthy.",
    link: "/food-supplies",
  },
  {
    title: "Veterinary Care",
    description:
      "Get expert medical consultations, vaccinations, and emergency care for your pets.",
    link: "/veterinary-care",
  },
  {
    title: "Pet Training",
    description:
      "Professional training services to help pets learn commands, behavior control, and tricks.",
    link: "/pet-training",
  },
  {
    title: "Pet Boarding & Daycare",
    description:
      "Safe and comfortable boarding facilities for when you’re away, ensuring pets are well cared for.",
    link: "/boarding-daycare",
  },
];

