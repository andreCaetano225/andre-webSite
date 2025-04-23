'use client'

import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";

export const Profile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        Aos.init({ duration: 2000 });
        setIsVisible(true)
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[4rem]">
                <div className="rounded-lg bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 p-1">
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                        className="inline-block"
                    >
                        <motion.img
                            alt="André Caetano"
                            src={'./profile.jpg'}
                            className="rounded-lg w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] xl:w-[300px]"
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
                            <p className="font-normal flex flex-col gap-4 items-center md:items-start text-lightTitle text-lg sm:text-sm md:text-2xl lg:text-3xl xl:text-3xl dark:text-darkTitle">
                                Olá , eu sou
                                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-2xl sm:text-sm md:text-3xl lg:text-3xl xl:text-5xl">
                                    André Sousa
                                </span> 
                             
                                Desenvolvedor de Software
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://www.linkedin.com/in/andre-sousa-dev/" target="_blank" className="flex h-10 w-[12rem] items-center justify-center rounded-lg p-[1.5px] hover:shadow-2xl bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700">
                            <div className={`flex gap-2 h-full dark:text-darkTitle w-full items-center justify-center rounded-lg ${theme === "light" ? 'bg-white' : 'bg-darkBg' }`}>
                                Acessar Linkedin
                                <FaLinkedin size={20} />
                            </div>
                        </a>
                    </motion.div>

                </div>
            </div>
        </>
    )
}
