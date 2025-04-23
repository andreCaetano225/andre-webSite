import { AboutMe } from "@/components/AboutMe/AboutMe";
import { DownloadCv } from "@/components/DownloadCv/DownloadCv";
import { Education } from "@/components/Education/Education";
import { Experience } from "@/components/Experience/Experience";
import { Finaly } from "@/components/Finaly/Finaly";
import { Profile } from "@/components/Profile";
import { TechStack } from "@/components/TechStack/TechStack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "André Sousa Dev - Blog",
  description:
    "Com formação em Sistemas de Informação e mais de quatro anos de experiência dedicados ao desenvolvimento de sistemas, destaco-me por minha especialidade no âmbito do front-end, onde utilizo habilmente as tecnologias React e Next.js.",
  metadataBase: new URL("https://www.devandresousa.com"),
  openGraph: {
    title: "André Dev - Blog",
    description:
      "Com formação em Sistemas de Informação e mais de dois anos de experiência dedicados ao desenvolvimento de sistemas, destaco-me por minha especialidade no âmbito do front-end, onde utilizo habilmente as tecnologias React e Next.js.",
    type: "website",
    url: "https://www.devandresousa.com",
    siteName: "André Sousa",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.devandresousa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.476f0fa0.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "André Sousa",
      },
    ],
  },
  robots: "all",
};

export default function Home() {
  return (
    <div className="max-w-[1180px] w-full m-auto p-4 flex flex-col gap-10">
      <Profile />

      <AboutMe />
      <TechStack />
      <Experience />
      <Education />
      <DownloadCv />
      <Finaly />
    </div>
  );
}
