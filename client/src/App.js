import './App.css';
import { EditorialBorad } from './components/EditorialBorad/EditorialBorad';
import { Feature } from './components/Feature/Feature';
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
        </div>
    );
}

export default App;
