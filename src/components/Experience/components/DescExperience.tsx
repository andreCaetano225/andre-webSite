

type DescExperienceProps = {
    title: string;
    company: string;
    date: string;
    description: string;
}


export const DescExperience = ({ company, date, description, title }: DescExperienceProps) => {
    return (
        <>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <span className="text-lightSubTitle dark:text-darkSubTitle">{date}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-colorJoker font-semibold">{company}</span>
                    <p className="text-lightSubTitle dark:text-darkSubTitle w-[42rem]">
                        {description}</p>
                </div>
            </div>

        </>
    )
}