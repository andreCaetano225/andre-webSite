import Image from "next/image"
import ProfileImage from "../assets/profile.jpg"




export const Profile = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between ">
                <div>
                    <p className="font-bold  text-lightTitle text-3xl dark:text-darkTitle">
                        Olá 👋, <br /> Eu sou o <br /> <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lightGrandBlue via-lightGrandPink to-[#7D5FCF]">André Caetano de Sousa</span> <br />
                        E sou desenvolvedor full stack
                    </p>
                </div>
                <div className="rounded-[992px]  bg-gradient-to-r from-lightGrandBlue via-lightGrandPink to-[#7D5FCF] p-1">
                    <Image
                        alt="André Caetano"
                        src={ProfileImage}
                        width={300}
                        className="rounded-full"
                    />

                </div>
            </div>

        </>
    )
}