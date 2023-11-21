"use client";

import React from 'react'
import { Stacks } from './components/Stacks'

import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import Js from '../../assets/js.svg'
import Type from '../../assets/typescript.svg'
import ReactJs from '../../assets/react.svg'
import Next from '../../assets/next-js.svg'
import NextDark from '../../assets/next-Dark.svg'
import Vue from '../../assets/vue-9.svg'
import Angular from '../../assets/angular.svg'
import Sass from '../../assets/sass.svg'
import Tailwind from '../../assets/tailwind.svg'
import Styled from '../../assets/styled-lith.svg'
import StyledDark from '../../assets/styled-Dark.svg'
import Jest from '../../assets/jest.svg'
import { useTheme } from 'next-themes'
import { Title } from '../Title';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const TechStack = () => {
    const { theme } = useTheme();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="flex items-center flex-col justify-center text-center mt-28 gap-20">
                <div className="flex flex-col gap-2">
                    <Title title='Conhecimentos' />
                    <span className="font-bold text-lightSubTitle text-md dark:text-darkSubTitle">
                        Tecnologias com as quais tenho trabalhado recentemente
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-20' data-aos="fade-up">
                    <Stacks image={Html} url='https://developer.mozilla.org/pt-BR/docs/Web/HTML' />
                    <Stacks image={Css} url='https://developer.mozilla.org/pt-BR/docs/Web/CSS' />
                    <Stacks image={Js} url='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' />
                    <Stacks image={Type} url='https://www.typescriptlang.org/' />
                    <Stacks image={ReactJs} url='https://react.dev/' />
                    {theme === "light" ?
                        <Stacks image={Next} url='https://nextjs.org/' />
                        :
                        <Stacks image={NextDark} url='https://nextjs.org/' />
                    }
                    <Stacks image={Vue} url='https://vuejs.org/' />
                    <Stacks image={Angular} url='https://angular.io/' />
                    <Stacks image={Sass} url='https://sass-lang.com/' />
                    <Stacks image={Tailwind} url='https://tailwindcss.com/' />
                    {theme === "light" ?
                        <Stacks image={Styled} url='https://styled-components.com/' />
                        :
                        <Stacks image={StyledDark} url='https://styled-components.com/' />
                    }
                    <Stacks image={Jest} url='https://jestjs.io/' />
                </div>
            </div>
        </>
    )
}