import { Container } from "@mantine/core"
import "../../assets/containers.css"
import RecentPostDisplay from "../../components/RecentPostDisplay/RecentPostDisplay"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"
import BottomBar from "../../components/BottomBar/BottomBar"
function ProjectHomePage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.PROJECTS} />

            <Container className="responsiveContainer">
                <RecentPostDisplay numberOfCards={0} title="" jsonFile="./featured_projects.json" slugPrefix="projects" />
            </Container >

            <BottomBar />
        </>
    )
}

export default ProjectHomePage
