import Image from "next/image";

type SocialMediaProps = {
    image: string;
    url: string;
}


export const SocialMedia = ({ image, url }: SocialMediaProps) => {
    return (
        <>
            <div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={image}
                        alt="icon"
                        width={30}
                        height={30} />
                </a>
            </div>
        </>
    )
}