"use client";
import { useState } from "react"
import { DescExperience } from "./DescExperience";





export const InfoExperience = () => {
    const [experience2, setexperience2] = useState(false)

    return (
        <>
            <div className="flex gap-20">
                <div className="bg-lightBox dark:bg-bgColorJokerDark w-[15rem] h-[8rem]">

                    <div className={experience2 ? 'h-12 flex items-center mt-1 cursor-pointer' : 'border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer'} onClick={() => setexperience2(!experience2)}>
                        <span className={experience2 ? 'ml-5  font-bold' : 'ml-4 text-colorJoker font-bold'}>Music PRO</span>
                    </div>

                    <div className={experience2 ? 'border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer' : 'h-12 flex items-center mt-1 cursor-pointer'} onClick={() => setexperience2(!experience2)}>
                        <span className={experience2 ? 'ml-4 text-colorJoker font-bold' : 'ml-5  font-bold'}>SharePrime</span>
                    </div>


                </div>
                {experience2 ? (
                    <DescExperience company="SharePrime" date="Mai 2021 - Jun 2022" description="Desenvolver novas soluções, documentá-las e integrá-las à intranets, desenvolver intranets para empresas à partir do Reactjs e SPFX, dar manutenção e melhorias à soluções já criadas e Desenvolver novos sites com Nextjs." title="Desenvolvedor Front-End React Js" />
                ) : (
                    <DescExperience company="MusicPRO" date="Jun 2022 - Atual" description="Desenvolver novas soluções de sistemas web com Next.js e React.js, sempre priorizando usabilidade e design. Contribuí também na criação de uma experiência visual moderna com Tailwind CSS e participei na construção de um aplicativo sólido usando React Native." title="Desenvolvedor Front-End React Js / React Native" />
                )}

            </div>

        </>
    )

}