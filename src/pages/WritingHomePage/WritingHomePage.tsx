import { Container } from "@mantine/core"
import "../../assets/containers.css"
import RecentPostDisplay from "../../components/RecentPostDisplay/RecentPostDisplay"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"
function WritingHomePage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.WRITINGS} />

            <Container className="responsiveContainer">
                <RecentPostDisplay numberOfCards={0} title="" jsonFile="./featured_writings.json" slugPrefix="writings" />
            </Container >


        </>
    )
}

export default WritingHomePage
