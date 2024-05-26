import { AspectRatio, Center, Container, Divider, Stack, Text, Title } from "@mantine/core"
import "../../assets/buttons.css"
import "../../assets/containers.css"
import "../../assets/titles.css"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"

function HomePage(): JSX.Element {

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <AspectRatio ratio={16 / 9} w='100%'>
                <div className="homeTitleContainer">
                    <div className="homeTitleContainerShade">
                        <Title tt="uppercase" className="homeTitleText1">John Lim</Title>
                        <Center>
                            <Divider color="white" w={500}></Divider>
                        </Center>
                        <Title order={3} fw={100} tt="uppercase" className="homeTitleText2">Full Stack Web Developer</Title>
                    </div>
                </div>
            </AspectRatio>



            <Container className="responsiveContainer">
                <Stack align="center">
                    <Center p="lg">
                        <Text fs="italic">about</Text>
                    </Center>
                    <Text ta="center">
                        Graduated in 2024 from SUTD's Computer Science and Design Programme with a<br />  Bachelor's of Engineering - Honours with Distinction.
                    </Text>

                </Stack>
            </Container>
            <Container className="tallContainer">

            </Container>

        </>
    )
}

export default HomePage
