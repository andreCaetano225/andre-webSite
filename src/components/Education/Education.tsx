"use client";

import { Title } from "../Title"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const Education = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className=" flex flex-col  sm:gap-20 md:gap-20 lg:gap-20 xl:gap-20 mt-28">
                <Title title="Educação" />
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-20 md:gap-20 lg:gap-20 xl:gap-20">


                    <div data-aos="fade-right" className="sm:bg-lightBox md:bg-lightBox lg:bg-lightBox xl:bg-lightBox mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 flex items-center sm:items-start md:items-start lg:items-start xl:items-start justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col dark:bg-bgColorJokerDark sm:w-[15rem] md:w-[15rem] lg:w-[15rem] xl:w-[15rem] h-[8rem]">
                        <div className={'sm:border-l-4 md:border-l-4 lg:border-l-4 xl:border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer'}>
                            <span className={'ml-4 text-colorJoker font-bold'}>UNINASSAU</span>
                        </div>
                    </div>


                    <div data-aos="fade-left" className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  gap-24">
                        <div className="flex flex-col">
                            <span className=" text-md font-semibold sm:text-xl md:text-xl lg:text-xl xl:text-xl">Bacharelado em Sistemas de Irformação</span>
                            <span className="text-lightSubTitle text-sm sm:text-md md:text-md lg:text-md xl:text-md dark:text-darkSubTitle sm:hidden md:hidden lg:hidden xl:hidden">Fev 2019 - Dez 2022</span>

                            <span className="text-lightSubTitle text-sm sm:text-md md:text-md lg:text-md xl:text-md dark:text-darkSubTitle">Centro Universitário Maurício de Nassau - UNINASSAU</span>

                        </div>

                        <span className="text-lightSubTitle dark:text-darkSubTitle hidden sm:block md:block lg:block xl:block">Fev 2019 - Dez 2022</span>
                    </div>

                </div>

            </div>

        </>
    )

}