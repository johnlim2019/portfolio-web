import { AspectRatio, Button, Center, Container, Divider, Stack, Text, Title } from "@mantine/core"
import "../../assets/buttons.css"
import "../../assets/containers.css"
import "../../assets/titles.css"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"
import RecentPostDisplay from "../../components/RecentPostDisplay/RecentPostDisplay"
import { useNavigate } from "react-router-dom"

function HomePage(): JSX.Element {

    const navigate = useNavigate();
    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <AspectRatio ratio={16 / 9} w='100%'>
                <div className="homeTitleContainer">
                    <div className="homeTitleContainerShade">
                        <Title className="homeTitleText1">John Lim</Title>
                        <Center p='1em'>
                            <Divider color="white" w="60%"></Divider>
                        </Center>
                        <Title order={3} className="homeTitleText2">Full Stack Web Developer</Title>
                    </div>
                </div>
            </AspectRatio>



            <Container className="responsiveContainer">
                <Stack align="center">
                    <Center p="lg">
                        <Text fs="italic">01 about</Text>
                    </Center>
                    <Text ta="center">
                        Graduated from SUTD class of 2024 with: <br /> Bachelor of Engineering - Honours with Distinction.
                    </Text>
                    <Button variant="outline" onClick={() => { navigate("/about") }}>
                        <Text>See Full Resume</Text>
                    </Button>

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
