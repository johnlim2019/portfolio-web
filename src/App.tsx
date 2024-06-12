import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import About from './pages/About/About'

function App(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </>
    )
}

export default App
