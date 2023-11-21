"use client";
import { useState } from "react"
import { DescExperience } from "./DescExperience";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";




export const InfoExperience = () => {
    const [experience2, setexperience2] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-20 md:gap-20 lg:gap-20 xl:gap-20" >
                <div data-aos="fade-right" className="sm:bg-lightBox md:bg-lightBox lg:bg-lightBox xl:bg-lightBox mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 flex items-center sm:items-start md:items-start lg:items-start xl:items-start justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col dark:bg-bgColorJokerDark sm:w-[15rem] md:w-[15rem] lg:w-[15rem] xl:w-[15rem] h-[8rem]">

                    <div className={experience2 ? 'h-12 flex items-center mt-1 cursor-pointer' : 'sm:border-l-4 md:border-l-4 lg:border-l-4 xl:border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer'} onClick={() => setexperience2(!experience2)}>
                        <span className={experience2 ? 'ml-5  font-bold' : 'ml-4 text-colorJoker font-bold'}>Music PRO</span>
                    </div>

                    <div className={experience2 ? ' sm:border-l-4 md:border-l-4 lg:border-l-4 xl:border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer' : 'h-12 flex items-center mt-1 cursor-pointer'} onClick={() => setexperience2(!experience2)}>
                        <span className={experience2 ? 'ml-4 text-colorJoker font-bold' : 'ml-5  font-bold'}>SharePrime</span>
                    </div>


                </div>
                <div data-aos="fade-left">
                    {experience2 ? (
                        <DescExperience company="SharePrime" date="Mai 2021 - Jun 2022" description="Desenvolver novas soluções, documentá-las e integrá-las à intranets, desenvolver intranets para empresas à partir do Reactjs e SPFX, dar manutenção e melhorias à soluções já criadas e Desenvolver novos sites com Nextjs." title="Desenvolvedor Front-End React Js" />
                    ) : (
                        <DescExperience company="MusicPRO" date="Jun 2022 - Atual" description="Desenvolver novas soluções de sistemas web com Next.js e React.js, sempre priorizando usabilidade e design. Contribuí também na criação de uma experiência visual moderna com Tailwind CSS e participei na construção de um aplicativo sólido usando React Native." title="Desenvolvedor Front-End React Js" />
                    )}
                </div>


            </div>

        </>
    )

}