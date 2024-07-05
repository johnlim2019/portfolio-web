import { Card, Group, Space, Stack, Text, Title } from '@mantine/core';
import "../../assets/buttons.css";
import "../../assets/titles.css";


function BottomBar(): JSX.Element {


    return (
        <>
            <Space h="50px"></Space>
            <Card>
                <Group align='flex-start' justify='center'>
                    <Stack align='left' justify='flex-start' style={{ "width": "25em" }}>
                        <Title order={3}>Sources</Title>
                        <Text>Some images were generated with Meta AI</Text>
                    </Stack>
                    <Stack align='left' justify='flex-start' style={{ "width": "25em" }}>
                        <Title order={3}>Links</Title>
                        <a className='minimalUnderlineButton' href="https://github.com/johnlim2019">
                            Github Profile
                        </a>
                        <a className='minimalUnderlineButton' href="https://www.linkedin.com/in/lim-jie-sheng-john-baa3731a1/">
                            LinkedIn
                        </a>
                    </Stack>
                </Group>
            </Card>

        </>
    )
}

export default BottomBar
