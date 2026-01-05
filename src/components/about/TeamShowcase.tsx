import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TeamShowcase = () => {
  const { theme } = useTheme();
  const [category, setCategory] = useState("leadership");

  const leadershipTeam = [
    {
      name: "Moazzam M. Malik",
      title: "Chairman & CEO BMA Capital",
      bio: "Moazzam is one of the Founding Partners of BMA Capital since 1992. He has been instrumental in transforming the firm into one of the country’s first professionally managed institutions and a top-five player in securities brokering, investment banking and asset management. He was pivotal in the deregulation of the telecom sector which ultimately led to the explosive growth and raised over US$1bn for the govt. in licensing fees.",
      imageSrc: "/lovable-uploads/moazam.jpg",
    },
    {
      name: "Jawad Bhatti",
      title: "Chief Operating Officer (COO)",
      bio: "Jawad is an MBA qualified customer services/marketing professional with fourteen years of customer services and quality assurance experience.",
      imageSrc: "/lovable-uploads/jawad.jpg",
    },
    {
      name: "Syed Hammad",
      title: "Chief Financial Officer (CFO)",
      bio: "Hammad joined BMA Capital in January 2022 as Head of Compliance and Internal Audit and was appointed CFO in March 2024.",
      imageSrc: "/lovable-uploads/hammad.jpeg",
    },
    {
      name: "Miraal Malik",
      title: "Director",
      bio: "Miraal joined BMA Capital in 2020 and has worked in the Online Trade and Human Resources Departments.",
      imageSrc: "/lovable-uploads/miral.jpg",
    },
  ];

  const expertTeam = [
    {
      name: "BMA Investment Advisors Limited",
      title: "",
      bio: "BMA Asset Management Company is an advisory firm that pioneered Separately Managed Accounts in Pakistan. As a medium-sized company (MSC), our primary goal is to deliver one-stop wealth management services across all asset categories.",
      imageSrc: "/lovable-uploads/about.jpg",
    },
  ];

  const currentTeam = category === "leadership" ? leadershipTeam : expertTeam;

  return (
    <section id="team" className={`py-24 ${theme === "dark" ? "bg-[#1A1F2C]" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The People Behind Our Success
          </h2>
          <p className="text-lg text-gray-600">
            Our strength lies in our diverse team of financial experts who bring passion,
            innovation, and deep industry knowledge to every client relationship.
          </p>
        </motion.div>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md p-1 ">
            <Button
              variant={category === "leadership" ? "default" : "ghost"}
              className="rounded-md"
              onClick={() => setCategory("leadership")}
            >
              Board of Directors
            </Button>

            <Button
              variant={category === "experts" ? "default" : "ghost"}
              className="rounded-md"
              onClick={() => setCategory("experts")}
            >
              BMA About Us
            </Button>
          </div>
        </div>

        {/* GRID SECTION */}
        {category === "leadership" ? (
          /* ========= BOARD OF DIRECTORS — 4 GRID ========= */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="rounded-lg border shadow-sm"
              >
                {/* Fixed image ratio, full head visible */}
                <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-white text-gray-500">{member.title}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* ========= BMA ABOUT US — 2 GRID ========= */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-1 gap-10 items-center"
          >
            {expertTeam.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">

                {/* Image Left */}
                <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Text Right */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {member.bio}
                  </p>
                </div>

              </div>
            ))}
          </motion.div>
        )}

        {/* SWITCH BUTTON */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => setCategory(category === "leadership" ? "experts" : "leadership")}
          >
            {category === "leadership" ? (
              <>
                <span>BMA About Us</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>View Leadership Team</span>
              </>
            )}
          </Button>
        </div>

      </div>
    </section>
  );
};
