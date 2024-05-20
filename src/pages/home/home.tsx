import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"

function HomePage(): JSX.Element {

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <div>

            </div>
        </>
    )
}

export default HomePage
