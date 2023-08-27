

type InfoItemsProps = {
    title: string;
    description: string;
}


export const InfoItems = ({ title, description }: InfoItemsProps) => {
    return (
        <>
            <div className="flex items-center gap-4">
                <span className="text-lightTitle dark:text-darkTitle">{title}</span>
                <span className="text-lightSubTitle dark:text-darkSubTitle">{description}</span>
            </div>

        </>
    )
}