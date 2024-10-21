import { Avatar, Center, Container, Divider, Group, List, Space, Stack } from "@mantine/core"
import "../../assets/containers.css"
import "../../assets/titles.css"
import TopBar from "../../components/TopBar/TopBar"
import { TopBarEnum } from "../../enum/TopBarEnum"
import "./About.module.css"
import aboutStyles from "./About.module.css"
import BottomBar from "../../components/BottomBar/BottomBar"

function About(): JSX.Element {
    return (
        <>
            <TopBar currentPage={TopBarEnum.ABOUT} />
            <Container className="responsiveContainer">
                <Center>
                    <Stack ta="center" className={aboutStyles.stackContainer}>
                        <Group justify="center">
                            <Avatar size={200} src="/avatar.jpg"></Avatar>
                            <div className={aboutStyles.aboutHeader1}>John Lim</div>
                        </Group>
                        <Center p='lg'>
                            <Divider orientation="vertical" color='white' h='5em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader2} >Current Position</div>
                        <div className={aboutStyles.aboutHeader3}>SUTD Roar Lab - Research Officer</div>
                        <div className={aboutStyles.aboutText}>July 2024</div>
                        <List>
                            <List.Item>I am working on the Smorphi Imaginary Learning Platform. A 3D robot simulator built with Unity to introduce children to coding and robotics</List.Item>
                            <List.Item>Managed sub-contractor team to develop the web platform that delivers the unity runtime to users.</List.Item>
                        </List>
                        <Center p='lg'>
                            <Divider orientation="vertical" color='white' h='5em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader1} >Education</div>
                        <div className={aboutStyles.aboutText}>Bachelor of Engineering (Computer Science and Design)</div>
                        <div className={aboutStyles.aboutText}>Class of 2024 - Honours with Distinction</div>
                        <div className={aboutStyles.aboutText}>Minor 1: Artificial Intelligence</div>
                        <div className={aboutStyles.aboutText}>Minor 2: Digital Humanities</div>
                        <Center p='lg'>
                            <Divider orientation="vertical" color='white' h='5em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader1} >Experience</div>
                        <div className={aboutStyles.aboutHeader3}>Lionsbot - Backend Intern</div>
                        <div className={aboutStyles.aboutText}>May 2023 - Aug 2023 (16 Weeks)</div>
                        <List>
                            <List.Item>Worked on POC that used MQTT and Websocket to stream ROS topic data</List.Item>
                            <List.Item>Used Echo(GO) and Spring Boot Frameworks to build Restful API services</List.Item>
                            <List.Item>Worked with Go K8s API to manage deployments programmatically</List.Item>
                            <List.Item>Ran k8s on local dev cluster using K8s in docker</List.Item>
                        </List>
                        <Center p='lg'>
                            <Divider orientation="vertical" color='white' h='2em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader3}>Lionsbot - QA Intern</div>
                        <div className={aboutStyles.aboutText}>Aug 2022 - Dec 2022 (16 Weeks)</div>
                        <List>
                            <List.Item>Ran and maintained Cypress.io automation scripts</List.Item>
                            <List.Item>Ran end-to-end testing for sprint deployments</List.Item>
                            <List.Item>Participated in regular stand-ups and engaged with the development team to update scripts based on each sprint's changelog</List.Item>
                        </List>
                        <Center p='lg'>
                            <Divider orientation="vertical" color='white' h='2em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader3}>SUTD - Undergraduate Research Assistant</div>
                        <div className={aboutStyles.aboutText}>June 2020 - July 2020</div>
                        <List>
                            <List.Item>Used MATLAB to analyse and interpret the correlation between spinal grey level voxel texture features of in vivo CT scans and vertebrae’s failure load in osteoporosis patients. </List.Item>
                            <List.Item>Co-author of the paper published in Quantitative Imaging in Medicine and Surgery. </List.Item>
                            <List.Item><a href="http://dx.doi.org/10.21037/qims-20-1156">MDCT imaging: Association of bone texture parameters with FEA-based failure load of single vertebrae and functional spinal.</a></List.Item>
                        </List>
                        <Center>
                            <Divider orientation="vertical" color='white' h='5em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader1} >Awards</div>
                        <div className={aboutStyles.aboutHeader3}>SUTD Digi Edu Hackathon 2019 - Won 1st place</div>
                        <div className={aboutStyles.aboutText}>Applied design thinking to design a teaching tool that aims to foster critical thinking amongst non-tertiary students in Singapore using natural language processing to analyse emotive language in news articles.</div>

                        <Center>
                            <Divider orientation="vertical" color='white' h='5em' ></Divider>
                        </Center>
                        <div className={aboutStyles.aboutHeader1} >Skills</div>
                        <div className={aboutStyles.aboutHeader3}>Experience with the following frameworks and tools </div>
                        <div className={aboutStyles.aboutText}><i>Unity, Spring Boot, Express.js, FastApi, React.js, Cypress.io, Echo (GO), Docker, Bash Scripting, PyTorch, TensorFlow, Postman, Figma, Adobe Illustrator</i></div>

                        <Space h="xl"></Space>
                    </Stack>
                </Center>
            </Container>
            <BottomBar />
        </>

    )

}
export default About