"use client"
import Image from "next/image"
import ProfileImage from "../assets/profile.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { analytics } from '../lib/firebase';




export const Profile = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });

        if (analytics) {
            console.log("Firebase Analytics is initialized");
          }
    }, []);


    return (
        <>
            <div className="flex flex-row items-center justify-between " data-aos="fade-up">
                <div >
                    <p className="font-bold  text-lightTitle text-sm sm:text-sm md:text-3xl lg:text-3xl xl:text-3xl dark:text-darkTitle">
                        Olá 👋, <br /> Eu sou o <br /> <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lightGrandBlue via-lightGrandPink to-[#7D5FCF]">André Caetano de Sousa</span> <br />
                        E sou desenvolvedor front-end
                    </p>
                </div>
                <div className="rounded-[992px]  bg-gradient-to-r from-lightGrandBlue via-lightGrandPink to-[#7D5FCF] p-1">
                    <Image
                        alt="André Caetano"
                        src={ProfileImage}
                        className="rounded-full w-[100px] sm:w-[100px] md:w-[300px] lg:w-[300px] xl:w-[300px]"
                    />

                </div>
            </div>


        </>
    )
}