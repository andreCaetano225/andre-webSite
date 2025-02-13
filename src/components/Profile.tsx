"use client"
import Image from "next/image"
import ProfileImage from "../assets/profile.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";




export const Profile = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            <div className="flex flex-row items-center justify-between " data-aos="fade-up">
            <div className="rounded-[992px]  bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700 p-1">
                <Image
                    alt="André Caetano"
                    src={ProfileImage}
                    className="rounded-full w-[100px] sm:w-[100px] md:w-[300px] lg:w-[300px] xl:w-[300px]"
                />
            </div>
                <div >
                    <p className="font-bold  text-lightTitle text-sm sm:text-sm md:text-3xl lg:text-3xl xl:text-3xl dark:text-darkTitle">
                        Olá 👋, <br /> Eu sou o <br /> <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700">André Caetano de Sousa</span> <br />
                        E sou desenvolvedor front-end
                       
                    </p> 
                </div>
             
            </div>


        </>
    )
}