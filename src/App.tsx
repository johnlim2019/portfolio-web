import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import About from './pages/About/About'
import WritingPage from './pages/Writing Page/WritingPage'
import WritingHomePage from './pages/WritingHomePage/WritingHomePage'

function App(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/writings/:slug' element={<WritingPage />}></Route>
                <Route path='/writings' element={<WritingHomePage />}></Route>
            </Routes>
        </>
    )
}

export default App
