import './App.css';

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'


import { Navbar } from './components/NavigationBar/Navbar';
import { Footer } from './components/Footer/Footer';


import { Home } from './pages/Home';
import { About } from './pages/About';
import { ForAuthors } from './pages/ForAuthors';
import { Archive } from './pages/Archive';


function App() {
    return (
        <div className="App">


            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="for-authors" element={<ForAuthors />} />
                    <Route path="archive" element={<Archive />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
