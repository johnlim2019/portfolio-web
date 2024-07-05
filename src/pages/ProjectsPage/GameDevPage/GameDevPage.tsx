import { Card, Center, Container, Image, List, Stack, Text, Title } from "@mantine/core"
import "../../../assets/containers.css"
import "../../../assets/titles.css"
import TopBar from "../../../components/TopBar/TopBar"
import { TopBarEnum } from "../../../enum/TopBarEnum"

function GameDevPage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Container className="responsiveContainer">

            </Container >


        </>
    )
}

export default GameDevPage
