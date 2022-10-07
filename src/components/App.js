import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "./GlobalStyle"
import Header from './Header';
import MainPage from './MainPage';
import SessionsPage from './SessionsPage'

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/sessoes' element={<SessionsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}