"use client";

import { InfoItems } from "./components/InfoItems";
import { SocialMedia } from "./components/SocialMedia";
import LinkedinLight from "../../assets/linkedin.svg";
import GithubLight from "../../assets/github.svg";
import WppLight from "../../assets/whatsapp.svg";
import LinkedinDark from "../../assets/linkdin-dark.svg";
import GithubDark from "../../assets/github-dark.svg";
import WppDark from "../../assets/whatsapp-dark.svg";
import { useTheme } from "next-themes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col gap-8 bg-lightBox dark:bg-darkBox rounded-md p-5 sm:p-5 md:p-16 lg:p-16 xl:p-16  mt-28">
        <div
          className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-8 "
          data-aos="fade-down"
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-lightTitle text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl dark:text-darkTitle ">
              Sobre
            </h1>
            <p className="text-md text-lightSubTitle dark:text-darkSubTitle  w-[18.2rem] sm:w-[40rem] md:w-[40rem] lg:w-[40rem] xl:w-[40rem]">
              Sou formado em Sistemas de Informação e tenho mais de 4 anos de
              experiência no desenvolvimento de sistemas, com especialização em
              front-end. Trabalho com React, Next.js e React Native para criar
              interfaces envolventes e funcionais. Além disso, tenho experiência
              com Node.js e Golang no desenvolvimento back-end. Estou sempre
              atualizado com as novas tendências tecnológicas, buscando
              aprimorar minhas habilidades e enfrentar novos desafios. Acredito
              no progresso contínuo e estou em constante evolução profissional.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-lightTitle text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl dark:text-darkTitle ">
              Informações
            </h1>
            <div className="flex flex-col  gap-4">
              <InfoItems title="Idade:" description="23 anos" />
              <InfoItems title="Email:" description="andre@devandresousa.com" />
              <InfoItems title="Telefone:" description="+55 (88) 9 8866-5252" />
              <InfoItems
                title="Localização:"
                description="Crato, Ceará, Brasil"
              />
              <InfoItems title="Linguagem:" description="Português, English" />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-6 mt-4"
          data-aos="fade-up"
        >
          {theme === "light" ? (
            <SocialMedia
              image={LinkedinLight}
              url="https://www.linkedin.com/in/andre-sousa-dev/"
            />
          ) : (
            <SocialMedia
              image={LinkedinDark}
              url="https://www.linkedin.com/in/andre-sousa-dev/"
            />
          )}

          {theme === "light" ? (
            <SocialMedia
              image={GithubLight}
              url="https://github.com/andreCaetano225"
            />
          ) : (
            <SocialMedia
              image={GithubDark}
              url="https://github.com/andreCaetano225"
            />
          )}

          {theme === "light" ? (
            <SocialMedia
              image={WppLight}
              url="https://api.whatsapp.com/send/?phone=5588988665252&text&type=phone_number&app_absent=0"
            />
          ) : (
            <SocialMedia
              image={WppDark}
              url="https://api.whatsapp.com/send/?phone=5588988665252&text&type=phone_number&app_absent=0"
            />
          )}
        </div>
      </div>
    </>
  );
};
