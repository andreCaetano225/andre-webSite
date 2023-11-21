import { Title } from "../Title"
import { InfoExperience } from "./components/InfoExperience"



export const Experience = () => {
    return (
        <>

            <div className="flex flex-col  mt-28  sm:gap-20 md:gap-20 lg:gap-20 xl:gap-20">
                <Title title='Experiências' />
                <InfoExperience />
            </div>


        </>
    )
}