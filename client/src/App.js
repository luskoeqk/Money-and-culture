import './App.css';
import { ContactUs } from './components/ContactsUs/ContactUs';
import { EditorialBorad } from './components/EditorialBorad/EditorialBorad';
import { Feature } from './components/Feature/Feature';
import { Footer } from './components/Footer/Footer';
import { LatestEdition } from './components/LatestEdition/LatestEdition';

import { Navbar } from './components/NavigationBar/Navbar';
 
function App() {
    return (
        <div className="App">
            <Navbar />
            <Feature />
            <LatestEdition />
            <br />
            <EditorialBorad />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
