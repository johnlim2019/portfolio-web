import { Card, Center, Container, Divider, Grid, Group, Image, List, ListItem, Space, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAdjustments, IconArrowsSplit, IconClockUp, IconCloudNetwork, IconDashboard, IconLock, IconPhotoEdit, IconResize, IconUserQuestion, IconUsers, IconX } from "@tabler/icons-react";
import { Brain, Building, LaptopFix } from "iconoir-react";
import styles from "./CapstonePage.module.css"
import "../../assets/containers.css";

function CapstonePage(): JSX.Element {
    const spaceHeight = 100;
    const iconSize = 80;
    const iconSizeLittle = 40;
    const dividerHeight = 5;
    const dividerColor = "cyan.7";

    return (
        <Container className="responsiveContainer">
            <Stack align="center" justify="center" >
                <Container className={styles.fullWidth}>
                    <Grid className={styles.fullWidth} align="stretch" justify="center">
                        <Grid.Col span={4} >
                            <Stack h='100%' justify="center" align="flex-end">
                                <Title>Small Item Counting</Title>
                                <Title order={4}>Team Members</Title>
                                <Text flex='end'>
                                    Celeste Ng(ESD), Pranhakar Dhilahesh(DAI), John Lim (CSD), Josiah Fong (CSD), Xiong Yang (CSD)
                                </Text>
                                <Title order={4}>Instructors</Title>
                                <Text>Kwan Wei Lek</Text>
                                <Title order={4}>Writing Instructors</Title>
                                <Text>Delfinn Tan</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={6} pt={50}>
                            <Image h='auto%' w='80%' variant="scale-down" src='./logo4-Chip3NoText@4x.png'></Image>
                        </Grid.Col>
                    </Grid>
                </Container>
                <Card className={styles.mediumWidth} withBorder shadow="xl" bg='yellow.1'>
                    <Title className={styles.title} style={{ textAlign: 'center' }} c="red" order={2}>Problem: Inbound process for small items</Title>
                    <Text className={styles.subtitle}>Inefficient use of manual labour to count inbound items.</Text>
                    <Divider h={dividerHeight} color={dividerColor}></Divider>
                    <Grid align="flex-start" justify="center" gutter='xl'>
                        <Grid.Col span={4}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconUsers size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>Labour Shortages</Text>
                            <Text className={styles.paragraph}>The increasing cost of labour requires each worker to be more productive in their assigned tasks.</Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconClockUp size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>Time Consuming</Text>
                            <Text className={styles.paragraph}>Employing man-hours for inbound item counting diverts labour from other crucial tasks, impacting operational efficiency.</Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconX size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>Error Prone</Text>
                            <Text className={styles.paragraph}>Manual labour in counting inbound items is at risk of human error.</Text>
                        </Grid.Col>
                    </Grid>
                </Card>
            </Stack >
            <Space h={spaceHeight}></Space>
            <Stack pt='xl' justify="center" align="center">
                <Image src="/constraints-solutions@4x.png"></Image>
            </Stack >
            <Space h={150}></Space >
            <Container className={styles.mediumWidth}>
                <Title>Solution: AI Powered Automation</Title>
                <Image src='./logo4-ChipTitle2@4x.png'></Image>
                <Space h={spaceHeight}></Space>
                <Card shadow='lg' withBorder >
                    <Title className={styles.title} order={2}>What is TSI Counting?</Title>
                    <Divider h={dividerHeight} color={dividerColor}></Divider>
                    <Text className={styles.paragraph}>
                        TSI Counting offers a practical AI-driven solution designed to streamline inbound management.
                        Our web service and lightbox automate inbound item counting, improving process efficiency and accuracy in inbound operations.
                        Easily integrated into existing counting stations, our solution introduces AI efficiency without disrupting established workflows.
                    </Text>
                </Card>
                <Space h={spaceHeight}></Space>
                <Card shadow='lg' withBorder >
                    <Title className={styles.title} order={2}>How Does it work?</Title>
                    <Divider h={dividerHeight} color={dividerColor}></Divider>
                    <Text>video</Text>
                    <video></video>
                </Card>
            </Container>
            <Space h={spaceHeight}></Space>
            <Stack justify="center" align="center">

                <Card className={styles.mediumWidth} withBorder shadow="xl">
                    <Group>
                        <ThemeIcon color={dividerColor} variant="subtle" size={iconSizeLittle}>
                            <Brain width={iconSizeLittle} height={iconSizeLittle} />
                        </ThemeIcon>
                        <Title order={3} className={styles.title}>Artificial Intelligence</Title>
                    </Group>
                    <Text className={styles.paragraph}>
                        Item counting is an object detection problem that can be solved with the use of Convolutional Neural Networks.
                        The two criteria for evaluating possible neural network are:
                    </Text>
                    <List type="ordered" withPadding pl="lg" pt='lg'>
                        <ListItem>Accuracy</ListItem>
                        <ListItem>Speed</ListItem>
                    </List>
                </Card>
                <Space h={spaceHeight / 2} />
                <Text className={styles.subtitle}>Our choice:</Text>
                <Title order={3} className={styles.title}>Ultralytics YOLO v8</Title>
                <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={6}>
                        <Center>
                            <ThemeIcon variant="subtle" color="cyan.6" size={spaceHeight}>
                                <IconDashboard size={iconSize}></IconDashboard>
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            YOLO v8 is real fast
                        </Text>
                        <Text className={styles.paragraph}>
                            Its speed comes from its single pass neural network.
                            Its region proposal and classification is done in a single pass reducing computational overhead and speeds up the process.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center>
                            <ThemeIcon variant="subtle" color="cyan.6" size={spaceHeight}>
                                <IconCloudNetwork size={iconSize}></IconCloudNetwork>
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Cutting edge
                        </Text>
                        <Text className={styles.paragraph}>
                            YOLO is well supported project, each year it has released new revisions that improve the network's performance and accuracy.
                            YOLO v8 in conjunction with Anchor boxes, now uses anchor free detection. More flexible bounding box predictions improves accuracy of the model.
                        </Text>
                    </Grid.Col>
                </Grid >
                <div className={styles.mediumWidth}>
                    <Center>
                        <Title p={5} className={styles.title} order={3}>Light Box</Title>
                    </Center>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <Text className={styles.paragraph}>
                        We need to have a controlled environment.
                        Repeatable and consistent lighting and perspective
                        helps increase the reliability and accuracy of model results.
                    </Text>
                </div>
                <Card className={styles.largeWidth} withBorder shadow="xl">
                    <Image src="/exploded_diagramArtboard 3@4x.png"></Image>
                </Card>

                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={4}>
                        <Center>
                            <Image src={null}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Reduce reflections
                        </Text>
                        <Text className={styles.paragraph}>
                            Most of the items are store inside clear plastic packages. Reflections obstruct the image and prevent accurate object detection.
                            The light-box is constructed from frosted acrylic sheets, to reduce the glare that causes reflections.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Fixed perspective
                        </Text>
                        <Text className={styles.paragraph}>
                            To improve consistency of model's performance, the scale and perspective of the items need to be fixed.
                            This reduces the ambiguity caused by different perspectives. The height is fixed at <Text span c="cyan" size='xl' className={styles.subtitle}>30cm</Text>.
                            For smaller items that need to be photographed at closer distance, we have a shelf at <Text span c="cyan" size='xl' className={styles.subtitle}>15cm</Text>.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Small footprint
                        </Text>
                        <Text className={styles.paragraph}>
                            The footprint of the light box is about <Text span c="cyan" size='xl' className={styles.subtitle}>41 cm by 31 cm</Text>. This makes it easy to deploy at existing counting stations.
                            There is no need to change the warehouse floor-plan or workflow making it easy to deploy.
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h={spaceHeight}></Space>
                <Stack className={styles.mediumWidth}>
                    <Center>
                        <Title className={styles.title} order={3}>Building Dataset</Title>
                    </Center>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <Text className={styles.paragraph}>
                        Using the light box our client was able to help us take images for the dataset.
                        We took <Text span c='cyan' className={styles.subtitle}>200</Text>  images for each SKU.
                    </Text>
                    <Text className={styles.subtitle}>Dataset pre-processing pipeline</Text>
                    <Image src="/AI Training.png"></Image>
                    <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                        <Grid.Col span={6}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconArrowsSplit width={iconSize} height={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Train/Test Split
                            </Text>
                            <Text className={styles.paragraph}>
                                The split was applied with random sampling.
                                <Text span c="cyan" className={styles.highlight}> 120</Text> images were set aside for training.
                                <Text span c="cyan" className={styles.highlight}> 80</Text> images were set aside for testing. These images were not used in the training pipeline.
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconPhotoEdit size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Augmentation
                            </Text>
                            <Text className={styles.paragraph}>
                                To improve the generalisation of the dataset, we use augmentation to increase the size and variation in the training dataset. <br />
                                <Text span c="cyan" className={styles.highlight}>Two main augmentations used:</Text>
                                <List type="ordered">
                                    <List.Item>Flip Horizontally and Vertically</List.Item>
                                    <List.Item>Rotate 180° Clockwise</List.Item>
                                </List>
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Stack>


                <Space h={spaceHeight} ></Space>
                <Stack className={styles.mediumWidth}>
                    <Center>
                        <Title className={styles.title} order={3}>Training Model</Title>
                    </Center>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <Text className={styles.paragraph} style={{ fontWeight: 700 }}>
                        One Model per SKU. This helped us achieve:
                    </Text>
                </Stack>
                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={4}>
                        <Center>
                            <ThemeIcon variant="subtle" size={spaceHeight}>
                                <IconResize size={iconSize} />
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Scalability
                        </Text>
                        <Text className={styles.paragraph}>
                            We anticipate that many SKUs will be in use. To enable us to keep adding new SKUs without increasing the complexity of the model,
                            we decided each SKU to have one model to identify it.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <ThemeIcon variant="subtle" size={spaceHeight}>
                                <LaptopFix width={iconSize} height={iconSize} />
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Reliability
                        </Text>
                        <Text className={styles.paragraph}>
                            If we increase the number of SKUs, the model required will be overly complex. Each new SKU would change the weights of the model, this can change the reliability of the results.
                            Hence for to maintain reliability each SKU is trained on one model.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <ThemeIcon variant="subtle" size={spaceHeight}>
                                <IconAdjustments size={iconSize} />
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Tuning
                        </Text>
                        <Text className={styles.paragraph}>
                            We tuned hyperparameters <Text span className={styles.subtitle}>Intersection Over Union</Text> and <Text span className={styles.subtitle}>Confidence</Text> to maximise the accuracy of the results in the test dataset.
                        </Text>
                    </Grid.Col>
                </Grid>

                <Space h={spaceHeight}></Space>
                <Card className={styles.mediumWidth} withBorder shadow="xl">
                    <Group>
                        <ThemeIcon color={dividerColor} variant="subtle" size={40}>
                            <Building width={40} height={40} />
                        </ThemeIcon>
                        <Title order={3} className={styles.title}>Software Architecture</Title>
                    </Group>
                    <Text className={styles.paragraph}>
                        This is the software that allows users to access and use the model.
                        Being a web app it is also easy to deploy. It does not require specialist equipment or software. Users can just
                        visit and login to the web app on any Android device and immediately start operations.
                    </Text>
                    <Text className={styles.paragraph}>
                        The primary features of the web app are:
                    </Text>
                    <List type="ordered" withPadding pl="lg" pt='lg'>
                        <ListItem>Allow users take photos to feed into the AI Model</ListItem>
                        <ListItem>
                            To create an audit trail of the inbound invoices and the AI results.
                            These records should allow users to review each invoice record.
                        </ListItem>
                    </List>
                </Card>
                <Space h={spaceHeight}></Space>
                <Title className={styles.title}>Architecture Diagram</Title>
                <Card className={styles.mediumWidth} withBorder shadow="xl">
                    <Image src="/Architecture.png"></Image>
                </Card>
                <Space h={spaceHeight}></Space>
                <Title className={styles.title} order={3}>Capturing Records</Title>
                <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                <div className={styles.mediumWidth}>
                    <Text className={styles.paragraph}>
                        In order to track the AI model's results, each record is identified by a unique pair of SKU and Invoice number.
                    </Text>
                </div>
                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/barcode-scanner.svg"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Barcode Scanner
                        </Text>
                        <Text className={styles.paragraph}>
                            For data entry of SKU, Invoice and Label Quantity. Scanning speeds up the process.
                            We included barcode encoding for: <Text span className={styles.paragraph} style={{ fontStyle: "italic" }}> code 39, code 93, code 128 </Text>
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/ai-camera.svg"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            AI Scanner
                        </Text>
                        <Text className={styles.paragraph}>
                            Each image is sent to AI API. Each image will have a response the number of items and a annotated image.
                            User is also prompted to use either the top or bottom shelf. And to remove from plastic.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/image-storage.svg"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Image Storage.
                        </Text>
                        <Text className={styles.paragraph}>
                            The images will be uploaded to the AWS S3 bucket. Image SQL table maps each image a single record in the Records SQL table.
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h={spaceHeight}></Space>
                <Title className={styles.title} order={3}>Retrieving Records</Title>
                <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                <div className={styles.mediumWidth}>
                    <Text className={styles.paragraph}>
                        Records are retrieved based on the submitted search query.
                    </Text>
                </div>
                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/csv-download.png"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Download records as csv
                        </Text>
                        <Text className={styles.paragraph}>
                            All records that match the search query will be downloaded into a single csv file. This table will hold the SKU, Invoice, Label Quantity, Count Quantity, User ID, List of image filenames.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/zip-download.svg"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Download images
                        </Text>
                        <Text className={styles.paragraph}>
                            All images from the records that match the search query are downloaded as a zip file. Each record has a folder with its images.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Center>
                            <Image className={styles.screenshot} src={"/archive-buttons.svg"}></Image>
                        </Center>
                        <Text className={styles.subtitle}>
                            Archive records
                        </Text>
                        <Text className={styles.paragraph}>
                            To reduce the number of records that can be selected, old records can be archived.
                            This archival feature stops the search feature from accessing records from before a given date.
                            This date is can only be set by a Supervisor.
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h={spaceHeight}></Space>
                <Title order={3} className={styles.title}>Security</Title>
                <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                    <Grid.Col span={6}>
                        <Center>
                            <ThemeIcon variant="subtle" color="cyan.6" size={50}>
                                <IconLock size={50}></IconLock>
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Encryption
                        </Text>
                        <Text className={styles.paragraph}>
                            We deploy reverse proxy servers to encrypt the internal http traffic into https traffic on the exposed external ports.
                            The SSL certificate issuance and renewal are done through the certbot CLI tool by Let's Encrypt.
                            The certificate renewal and redeploying of the reverse proxy servers are setup as crontab job.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center>
                            <ThemeIcon variant="subtle" color="cyan.6" size={50}>
                                <IconUserQuestion size={50}></IconUserQuestion>
                            </ThemeIcon>
                        </Center>
                        <Text className={styles.subtitle}>
                            Identity and Access
                        </Text>
                        <Text className={styles.paragraph}>
                            JWT tokens and refresh tokens are used by the backend API to validate identity of incoming traffic.
                            The Spring Boot backend also tracks the access rights of each user. Different rights limits the access of the user
                            to APIs and Web App features.
                        </Text>
                    </Grid.Col>
                </Grid >
                <Space h={spaceHeight}></Space>
                <Title order={2} className={styles.title}>A collaboration between:</Title>
                <Center>
                    <Image fit='scale-down' width={200} height={200} src="sutd.png"></Image>
                    <ThemeIcon variant="subtle" color="black" size={60}>
                        <IconX size={60} ></IconX>
                    </ThemeIcon>
                    <Image fit='scale-down' width={100} height={90} src="db.png"></Image>
                </Center>
            </Stack >
        </Container>


    )
}

export default CapstonePage