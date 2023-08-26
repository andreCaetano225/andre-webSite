import Image from "next/image";
import React from 'react'



type StacksProps = {
    image: string;
    url: string;
}



export const Stacks = ({ image, url }: StacksProps) => {
    return (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={image}
                    alt="stack"
                    width={100}
                    height={100}
                />
            </a>

        </>
    )
}