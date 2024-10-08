import { Container, Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { IPostCard } from "./Interfaces/IPostCard";
import { Link } from "react-router-dom";
import "../../assets/global.css"
import styles from "./PostCard.module.css"


function PostCard(props: IPostCard): JSX.Element {

    return (
        <Link to={props.slug} state={{ props: props }} >
            <Paper radius="md" className={styles.cardOuter} >
                <Group grow className={styles.cardInner} justify='center'>
                    <Container className={styles.cardComponent}>
                        <Image src={props.image}></Image>
                    </Container>
                    <Container className={styles.cardComponent}>
                        <Stack justify='Flex-start'>
                            <Title ta="right" className='homeTitleText2'>{props.title}</Title>
                            <Title ta="right" className='homeTitleText3'>{props.date}</Title>
                            <Text ta='justify'>{props.paragraph}</Text>
                        </Stack>
                    </Container>

                </Group>
            </Paper>
        </ Link >

    )
}
export default PostCard;