

type DescExperienceProps = {
    title: string;
    company: string;
    date: string;
    description: string;
}


export const DescExperience = ({ company, date, description, title }: DescExperienceProps) => {
    return (
        <>

            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between">
                    <h3 className=" text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">{title}</h3>
                    <span className="text-lightSubTitle dark:text-darkSubTitle">{date}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-colorJoker font-semibold">{company}</span>
                    <p className="text-lightSubTitle dark:text-darkSubTitle w-[20rem] sm:w-[42rem] md:w-[42rem] lg:w-[42rem] xl:w-[42rem]">
                        {description}</p>
                </div>
            </div>

        </>
    )
}