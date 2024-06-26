import { Button, Container, Group, Title } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { TopBarEnum } from '../../enum/TopBarEnum';
import "../../assets/titles.css"
import "../../assets/buttons.css"
import styles from "./TopBar.module.css"
import { useNavigate } from 'react-router-dom';

interface IProps {
    currentPage: TopBarEnum
}

function TopBar(props: IProps): JSX.Element {

    const navigate = useNavigate();

    return (
        <>
            <Container size="xl" p='md'>
                <Group justify='space-between'>
                    <div>
                        <Group>
                            <Button variant='transparent' className='minimalUnderlineButton' onClick={() => { navigate("/") }}>
                                <Title fw={100} tt="uppercase" className='homeTitleText2'>John Lim </Title>
                            </Button>
                        </Group>
                    </div>
                    <div className={styles.topBarContainer}>
                        {props.currentPage == TopBarEnum.WRITINGS && <Button radius='xl' variant='light' >Writings</Button>}
                        {props.currentPage != TopBarEnum.WRITINGS && <Button radius='xl' variant='transparent' className='minimalUnderlineButton' onClick={() => { navigate("/writings") }}>Writings</Button>}
                        {props.currentPage == TopBarEnum.PROJECTS && <Button radius='xl' variant='light' >Projects</Button>}
                        {props.currentPage != TopBarEnum.PROJECTS && <Button radius='xl' variant='transparent' className='minimalUnderlineButton' onClick={() => { navigate("/projects") }}>Projects</Button>}
                        {props.currentPage == TopBarEnum.ABOUT && <Button radius='xl' variant='light' >About</Button>}
                        {props.currentPage != TopBarEnum.ABOUT && <Button radius='xl' variant='transparent' onClick={() => { navigate("/about") }} className='minimalUnderlineButton'>About</Button>}
                        <a href="https://www.linkedin.com/in/lim-jie-sheng-john-baa3731a1/" rel="noopenernoreferrer">
                            <Button radius='xl' variant='outline' leftSection={
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
