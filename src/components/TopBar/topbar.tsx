import { Button, Container, Divider, Group, Title } from '@mantine/core'
import { IconBrandLinkedin } from '@tabler/icons-react';
import { TopBarEnum } from '../../enum/TopBarEnum';

interface IProps {
    currentPage: TopBarEnum
}

function TopBar(props: IProps): JSX.Element {

    return (
        <>
            <Container size="xl" p='md'>
                <Group justify='space-between'>
                    <div>
                        <Group>
                            <Title>John Lim </Title>
                            <Divider color="white" orientation='vertical' />
                            <Title order={5}>Full Stack Web Dev</Title>
                        </Group>
                    </div>
                    <div>
                        {props.currentPage == TopBarEnum.WRITINGS && <Button radius='xl' variant='light'>Writings</Button>}
                        {props.currentPage != TopBarEnum.WRITINGS && <Button radius='xl' variant='transparent'>Writings</Button>}
                        {props.currentPage == TopBarEnum.PROJECTS && <Button radius='xl' variant='light'>Projects</Button>}
                        {props.currentPage != TopBarEnum.PROJECTS && <Button radius='xl' variant='transparent'>Projects</Button>}
                        {props.currentPage == TopBarEnum.GAMES && <Button radius='xl' variant='light'>Games</Button>}
                        {props.currentPage != TopBarEnum.GAMES && <Button radius='xl' variant='transparent'>Games</Button>}
                        <a href="https://www.linkedin.com/in/lim-jie-sheng-john-baa3731a1/" rel="noopenernoreferrer">
                            <Button radius='xl' variant='filled' leftSection={
                                <IconBrandLinkedin size={30} />
                            }
                            >Profile</Button>
                        </a>
                    </div>
                </Group >
            </Container >

        </>
    )
}

export default TopBar
