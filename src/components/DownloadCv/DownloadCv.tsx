import { AiOutlineDownload } from "react-icons/ai";



export const DownloadCv = () => {
    return (
        <>
            <div className="flex items-center justify-center  mt-28">
                <a href="./CvAndreSousa.pdf" download rel="noreferrer" className="flex items-center p-4 gap-2 rounded-md bg-colorJoker hover:bg-hoverJoker transition duration-700 w-[11rem] text-[#fff] dark:text-[#000]">
                    <span>
                        Download CV
                    </span>
                    <span>
                        <AiOutlineDownload className="text-2xl" />
                    </span>
                </a>
            </div>

        </>
    )
}