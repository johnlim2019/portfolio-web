import { AspectRatio, Center, Container, Divider, Stack, Text, Title } from "@mantine/core"
import "../../assets/buttons.css"
import "../../assets/containers.css"
import "../../assets/titles.css"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"
import RecentPostDisplay from "../../components/RecentPostDisplay/RecentPostDisplay"

function HomePage(): JSX.Element {

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <AspectRatio ratio={16 / 9} w='100%'>
                <div className="homeTitleContainer">
                    <div className="homeTitleContainerShade">
                        <Title tt="uppercase" fw={400} className="homeTitleText1">John Lim</Title>
                        <Center p='1em'>
                            <Divider color="white" w="60%"></Divider>
                        </Center>
                        <Title order={3} fw={100} tt="uppercase" className="homeTitleText2">Full Stack Web Developer</Title>
                    </div>
                </div>
            </AspectRatio>



            <Container className="responsiveContainer">
                <Stack align="center">
                    <Center p="lg">
                        <Text fs="italic">01 about</Text>
                    </Center>
                    <Text ta="center">
                        Graduated from SUTD class of 2024 with: <br /> Bachelor's of Engineering - Honours with Distinction.
                    </Text>
                    <Text ta="center">Major: Computer Science and Design</Text>
                    <Text ta="center">Minor: Artificial Intelligence</Text>
                    <Text ta="center">Minor: Digital Humanities</Text>
                    <Center p='lg'>
                        <Divider orientation="vertical" color="white" h='5em'></Divider>
                    </Center>
                    <Center>
                        <Text fs="italic">02 portfolio</Text>
                    </Center>
                    <Text ta='justify'>
                        This portfolio encompasses diverse fields, ranging from culture to technology. This interdisciplinary background enables me to manage multimodal concepts effectively. It fosters a holistic perspective on how technology integrates into organisations and communities.
                    </Text>
                    <RecentPostDisplay />
                </Stack>
            </Container >


        </>
    )
}

export default HomePage
