import { Center, Group, Image, Stack, Title } from "@mantine/core"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"

function HomePage(): JSX.Element {

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Center>
                <Group>
                    <Stack>
                        <Title>Writings</Title>
                        <Title>Projects</Title>
                        <Title>Games</Title>
                    </Stack>
                    <Image src="https://images.unsplash.com/photo-1539656119061-a62d6610bb7e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                </Group>
            </Center>
        </>
    )
}

export default HomePage
