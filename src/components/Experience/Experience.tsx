import { Title } from "../Title"
import { InfoExperience } from "./components/InfoExperience"



export const Experience = () => {
    return (
        <>

            <div className="flex flex-col gap-4 mt-6">
                <Title title='Experiências' />
                <InfoExperience />
            </div>


        </>
    )
}