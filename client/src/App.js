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
import { ScrollTop } from './components/ScrollTop';
import { GeneralTerms } from './pages/GeneralTerms';
import { Policy } from './pages/Policy';

import { NotFound } from './pages/NotFound';


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="authors" element={<ForAuthors />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="terms" element={<GeneralTerms />} />
                    <Route path="policy" element={<Policy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollTop />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
