import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brewlab Café",
  description: "Café de especialidad y repostería artesanal",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}