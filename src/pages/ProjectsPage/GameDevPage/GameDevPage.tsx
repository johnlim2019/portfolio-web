import { AspectRatio, Card, Center, Container, List, Stack, Text, Title } from "@mantine/core"
import "../../../assets/containers.css"
import "../../../assets/titles.css"
import TopBar from "../../../components/TopBar/TopBar"
import { TopBarEnum } from "../../../enum/TopBarEnum"

function GameDevPage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Container className="responsiveContainer">
                <Center m="25px">
                    <Title className="homeTitleText2">Unity Game Project</Title>
                </Center>
                <Card withBorder shadow="xl" m="25px">
                    <AspectRatio ratio={16 / 9} >
                        <iframe src="https://www.youtube.com/embed/kvun77r72u8" title="Perdition" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </AspectRatio>
                </Card>
                <Stack align="center" gap="2em">


                    <Text className="justifiedParagraph">
                        This was a group project that used Unity Game Engine to develop a top-down shooter game.
                        Over an 8 week sprint, our group applied object oriented programming principles to develop the game.
                        This included user testing, gathering feedback on the playability and intuitiveness of the game controls.
                    </Text>

                    <Title className="homeTitleText2">Gameplay</Title>
                    <Title className="homeTitleText3">Main Objectives</Title>
                    <List>
                        <List.Item>Kill waves of enemies</List.Item>
                        <List.Item>Level up to gain buffs and weapons</List.Item>
                        <List.Item>Survive until the end</List.Item>
                    </List>
                    <Title className="homeTitleText3">Specific elements I built</Title>
                    <List>
                        <List.Item>The coin game mechanic and player buff system</List.Item>
                        <List.Item>Expendable power ups picked up from the map</List.Item>
                        <List.Item>Kill combo system</List.Item>
                        <List.Item>Map design</List.Item>
                        <List.Item>UI elements</List.Item>
                    </List>

                </Stack>
            </Container >


        </>
    )
}

export default GameDevPage
