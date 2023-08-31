import { Title } from "../Title"



export const Education = () => {

    return (
        <>
            <div className=" flex flex-col gap-20 mt-28">
                <Title title="Educação" />
                <div className="flex  gap-20">


                    <div className="bg-lightBox dark:bg-bgColorJokerDark w-[15rem] h-[8rem]">
                        <div className={'border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer'}>
                            <span className={'ml-4 text-colorJoker font-bold'}>UNINASSAU</span>
                        </div>
                    </div>


                    <div className="flex mt-4 gap-24">
                        <div className="flex flex-col">
                            <span className="text-xl">Bacharelado em Sistemas de Irformação</span>
                            <span className="text-lightSubTitle dark:text-darkSubTitle">Centro Universitário Maurício de Nassau - UNINASSAU</span>

                        </div>

                        <span className="text-lightSubTitle dark:text-darkSubTitle">Fev 2019 - Dez 2022</span>
                    </div>

                </div>

            </div>

        </>
    )

}