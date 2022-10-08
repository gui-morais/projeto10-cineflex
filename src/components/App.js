import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "./GlobalStyle"
import Header from './Header';
import MainPage from './MainPage';
import SessionsPage from './SessionsPage';
import SeatsPage from './SeatsPage';

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                {/* <Route path='/' element={<MainPage />}/> */}
                {/* <Route path='/' element={<SessionsPage />}/> */}
                <Route path='/' element={<SeatsPage />} />
            </Routes>
        </BrowserRouter>
    )
}