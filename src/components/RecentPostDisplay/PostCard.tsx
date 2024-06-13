import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { IPostCard } from "./Interfaces/IPostCard";

function PostCard(props: IPostCard): JSX.Element {

    return (
        <Paper radius="md" className='cardOuter' >
            <Group grow className='cardInner' justify='center'>
                <Image w="50%" className='cardComponent' src={props.image}></Image>
                <Stack w="40%" className='cardComponent' justify='Flex-start'>
                    <Title ta="right" className='homeTitleText2'>{props.title}</Title>
                    <Title ta="right" className='homeTitleText3'>{props.date}</Title>
                    <Text ta='justify'>{props.paragraph}</Text>
                </Stack>
            </Group>
        </Paper>
    )
}
export default PostCard;