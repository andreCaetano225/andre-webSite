
type TitleProps = {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="font-bold text-lightTitle text-3xl dark:text-darkTitle">{title}</h1>
            </div>
        </>
    )
}