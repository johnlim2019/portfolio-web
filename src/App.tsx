import { MantineProvider } from '@mantine/core'
import HomePage from './pages/home/home'

function App(): JSX.Element {
    return (
        <>
            <MantineProvider>
                <HomePage />
            </MantineProvider>

        </>
    )
}

export default App
