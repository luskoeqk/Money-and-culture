import { ContactUs } from "../components/ContactsUs/ContactUs"
import { EditorialBorad } from "../components/EditorialBorad/EditorialBorad"
import { Feature } from "../components/Feature/Feature"
import { LatestEdition } from "../components/HomeComponents/LatestEdition/LatestEdition"


export const Home = () => {
    return (
        <>
            <Feature />
            <LatestEdition />
            <br />
            <EditorialBorad />
            <ContactUs /> 
        </>
    )
}
