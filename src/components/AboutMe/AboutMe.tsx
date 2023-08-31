"use client";

import { InfoItems } from "./components/InfoItems"
import { SocialMedia } from "./components/SocialMedia"
import LinkedinLight from '../../assets/linkedin.svg'
import GithubLight from '../../assets/github.svg'
import WppLight from '../../assets/whatsapp.svg'
import LinkedinDark from '../../assets/linkdin-dark.svg'
import GithubDark from '../../assets/github-dark.svg'
import WppDark from '../../assets/whatsapp-dark.svg'
import { useTheme } from "next-themes";




export const AboutMe = () => {
    const { theme } = useTheme();

    return (
        <>
            <div className="flex flex-col gap-8 bg-lightBox dark:bg-darkBox rounded-md p-16  mt-28">

                <div className="flex gap-8 ">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-lightTitle text-3xl dark:text-darkTitle ">
                            Sobre
                        </h1>
                        <p className="text-md text-lightSubTitle dark:text-darkSubTitle w-[40rem]">
                            Com formação em Sistemas de Informação e mais de dois anos de experiência dedicados ao desenvolvimento de sistemas, destaco-me por minha especialidade no âmbito do front-end, onde utilizo habilmente as tecnologias React e Next.js. Minha paixão por aprendizado contínuo impulsiona-me a estar sempre atualizado no cenário tecnológico em constante evolução. Como resultado, sou capaz de criar interfaces envolventes e funcionais, enquanto permaneço aberto a novos desafios que me permitam expandir ainda mais meu conjunto de habilidades. Lembro-me constantemente de que o progresso é uma jornada, não um destino, e assim sigo em busca de excelência e crescimento constante.
                        </p>

                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-lightTitle text-3xl dark:text-darkTitle ">
                            Informações
                        </h1>
                        <div className="flex flex-col  gap-4">
                            <InfoItems title="Idade:" description="22 anos" />
                            <InfoItems title="Email:" description="andre.caetano2007@hotmail.com" />
                            <InfoItems title="Telefone:" description="+55 (88) 9 8866-5252" />
                            <InfoItems title="Localização:" description="Crato, Ceará, Brasil" />
                            <InfoItems title="Linguagem:" description="Português, English" />
                        </div>


                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-4">
                    {theme === "light" ?
                        <SocialMedia image={LinkedinLight} url='https://www.linkedin.com/in/andre-sousa-dev/' />
                        :
                        <SocialMedia image={LinkedinDark} url='https://www.linkedin.com/in/andre-sousa-dev/' />
                    }

                    {theme === "light" ?
                        <SocialMedia image={GithubLight} url='https://github.com/andreCaetano225' />
                        :
                        <SocialMedia image={GithubDark} url='https://github.com/andreCaetano225' />
                    }

                    {theme === "light" ?
                        <SocialMedia image={WppLight} url='https://api.whatsapp.com/send/?phone=5588988665252&text&type=phone_number&app_absent=0' />
                        :
                        <SocialMedia image={WppDark} url='https://api.whatsapp.com/send/?phone=5588988665252&text&type=phone_number&app_absent=0' />
                    }

                </div>

            </div>


        </>
    )
}