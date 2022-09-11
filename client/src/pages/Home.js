import { ContactUs } from "../components/HomeComponents/ContactsUs/ContactUs"
import { Feature } from "../components/HomeComponents/Feature/Feature"
import { LatestEdition } from "../components/HomeComponents/LatestEdition/LatestEdition"


export const Home = () => {
    return (
        <>
            <Feature />
            <LatestEdition />
            <ContactUs />   
        </>
    )
}
