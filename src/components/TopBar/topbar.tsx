import { Button, Container, Group, Title } from '@mantine/core'
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
                        <Title>John Lim</Title>
                    </div>
                    <div>
                        {props.currentPage == TopBarEnum.WRITINGS && <Button radius='xl' variant='light'>Writings</Button>}
                        {props.currentPage != TopBarEnum.WRITINGS && <Button radius='xl' variant='transparent'>Writings</Button>}
                        {props.currentPage == TopBarEnum.PROJECTS && <Button radius='xl' variant='light'>Projects</Button>}
                        {props.currentPage != TopBarEnum.PROJECTS && <Button radius='xl' variant='transparent'>Projects</Button>}
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
