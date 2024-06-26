import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import About from './pages/About/About'
import WritingPage from './pages/Writing Page/WritingPage'
import WritingHomePage from './pages/WritingHomePage/WritingHomePage'
import ProjectHomePage from './pages/ProjectsHomePAge/ProjectsHomePage'

function App(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/writings/:slug' element={<WritingPage />}></Route>
                <Route path='/writings' element={<WritingHomePage />}></Route>
                <Route path='/projects' element={<ProjectHomePage />}></Route>
            </Routes>
        </>
    )
}

export default App
