import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";

function PostCard(): JSX.Element {
    return (
        <Paper radius="md" className='cardOuter' >
            <Group grow className='cardInner' justify='center'>
                <Image w="50%" className='cardComponent' src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"></Image>
                <Stack w="40%" className='cardComponent' justify='Flex-start'>
                    <Title ta="right" order={3} fw={9000} tt='uppercase' className='homeTitleText2'>Project Title</Title>
                    <Text ta='justify'>
                        This project needs a paragraph.
                        The paragraph needs to share the key ideas that the project addresses.
                        How you contributed to the project.
                        And the main learning points, both technical and project skills
                    </Text>
                </Stack>
            </Group>
        </Paper>
    )
}
export default PostCard;