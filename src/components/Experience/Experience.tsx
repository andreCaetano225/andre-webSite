import { Title } from "../Title"
import { InfoExperience } from "./components/InfoExperience"



export const Experience = () => {
    return (
        <>

            <div className="flex flex-col  mt-28 gap-20">
                <Title title='Experiências' />
                <InfoExperience />
            </div>


        </>
    )
}