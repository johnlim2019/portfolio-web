import { Burger, Button, Container, Drawer, Group, Stack, Title } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { TopBarEnum } from '../../enum/TopBarEnum';
import "../../assets/titles.css"
import "../../assets/buttons.css"
import styles from "./TopBar.module.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

interface IProps {
    currentPage: TopBarEnum
}

function TopBar(props: IProps): JSX.Element {


    const navigate = useNavigate();

    // screen size check
    const [screenSize, setScreenSize] = useState('lg'); // Default to small screens
    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth < 600) {
                setScreenSize('sm');
            } else {
                setScreenSize('lg');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return (): void => window.removeEventListener('resize', handleResize);
    }, [screenSize]);

    // drawer toggle
    const [opened, { open, close }] = useDisclosure();


    return (
        <>
            <Container className="responsiveContainer" p='md'>
                <Group justify='space-between'>
                    <div>
                        <Button variant='transparent' className='minimalUnderlineButton' onClick={() => { navigate("/") }}>
                            <Title fw={100} tt="uppercase" className='homeTitleText2'>John Lim </Title>
                        </Button>
                    </div>
                    {(screenSize == 'lg') &&
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
                    }
                    {(screenSize == 'sm') &&
                        <div className={styles.topBarContainer}>
                            <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />
                        </div>
                    }

                </Group >
            </Container >

            <Drawer opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} >
                <Stack justify='center' align='center' >
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
                </Stack>
            </Drawer>

        </>
    )
}

export default TopBar
