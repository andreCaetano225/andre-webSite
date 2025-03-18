"use client"
import Image from "next/image"
import ProfileImage from "../assets/profile.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";




export const Profile = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            <div className="flex flex-row items-center justify-center gap-[5rem]">
            <div className=" rounded-lg bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 p-1">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                drag
                >
                <Image
                    alt="André Caetano"
                    src={ProfileImage}
                    className=" rounded-lg w-[100px] sm:w-[100px] md:w-[300px] lg:w-[300px] xl:w-[300px]"
                />
            </motion.button>
            </div>

            <div className="flex flex-col items-center gap-4">
                <motion.div
                initial={{ y: 20 }}
                animate={{ y: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                                <div >
                                    <p className="font-normal  text-lightTitle text-sm sm:text-sm md:text-3xl lg:text-3xl xl:text-3xl dark:text-darkTitle">
                                        Olá , eu sou <br /> <br /> <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-sm sm:text-sm md:text-3xl lg:text-3xl xl:text-5xl">André Sousa</span> <br /> <br />
                                        Desenvolvedor de Software
                                    
                                    </p>


                                </div>
                </motion.div>

                 <motion.div
                initial={{ y: 20 }}
                animate={{ y: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >

            <a href="https://www.linkedin.com/in/andre-sousa-dev/" target="_blank" className="flex h-10 w-[12rem] items-center justify-center rounded-lg p-[1.5px] text-white hover:shadow-2xl  bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 "> 
                    <div className="flex gap-2 h-full w-full items-center justify-center rounded-lg bg-darkBg">
                                Acessar Linkedin
                    <FaLinkedin size={20}/>
                    </div>
            </a> 

            </motion.div>

            </div>

            </div>


        </>
    )
}