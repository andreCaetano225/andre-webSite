

type InfoItemsProps = {
    title: string;
    description: string;
}


export const InfoItems = ({ title, description }: InfoItemsProps) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-lightTitle dark:text-darkTitle">{title}</span>
                <span className="text-lightSubTitle dark:text-darkSubTitle text-sm sm:text-md md:text-md lg:text-md lg:text-md">{description}</span>
            </div>

        </>
    )
}