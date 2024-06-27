import { AspectRatio, Card, Center, Container, Divider, Grid, Group, Image, List, ListItem, Space, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAdjustments, IconArrowsSplit, IconBackground, IconClockUp, IconCloudNetwork, IconDashboard, IconDimensions, IconLock, IconPhotoEdit, IconPhotoSensor, IconResize, IconSparkles, IconUserQuestion, IconX } from "@tabler/icons-react";
import { Brain, Building, LaptopFix } from "iconoir-react";
import "../../../assets/containers.css";
import styles from "./CapstonePage.module.css";
import TopBar from "../../../components/TopBar/TopBar";
import { TopBarEnum } from "../../../enum/TopBarEnum";

function CapstonePage(): JSX.Element {
    const spaceHeight = "5em";
    const iconSize = 80;
    const iconSizeLittle = 40;
    const dividerHeight = 5;
    const dividerColor = "cyan.5";
    const highlightColor = "cyan.5";
    const bgColor = "gray.2"

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME}></TopBar>
            <Space h={spaceHeight}></Space>
            <Container className="responsiveContainer">
                <Stack align="center" justify="center" >

                    <Group wrap="nowrap">
                        <Card bg={bgColor} maw="50%">
                            <Image src='/capstone-project/batulaChip3NoText@2x.png'></Image>
                        </Card>
                        <Stack h='100%' justify="center" align="flex-start">
                            <Title >Count Calcula (TSI Counting)</Title>
                            <Title order={4}>Team Members</Title>
                            <Text flex='end'>
                                Celeste Ng(ESD), Pranhakar Dhilahesh(DAI), John Lim (CSD), Josiah Fong (CSD), Xiong Yang (CSD)
                            </Text>
                            <Title order={4}>Instructors</Title>
                            <Text >Kwan Wei Lek</Text>
                            <Title order={4}>Writing Instructors</Title>
                            <Text >Delfinn Tan</Text>
                        </Stack>
                    </Group>
                    <Space h={spaceHeight}></Space>

                    <Card className={styles.mediumWidth} withBorder shadow="xl">
                        <Title className={styles.title} order={2}>Project Background</Title>
                        <List>
                            <List.Item>Warehouse personnel will have to manually count small-sized products, which come in varying appearances and quantities, as a part of the inbound receiving requirements before the products are received into the warehouse.</List.Item>
                            <List.Item>The current manual counting process is time-consuming, labour-dependent, and has a high possibility of human error.</List.Item>
                        </List>
                    </Card>
                    <Space h={spaceHeight}></Space>
                    <Card className={styles.mediumWidth} withBorder shadow="xl">
                        <Title className={styles.title} style={{ textAlign: 'center' }} c="red" order={2}>Key Issues</Title>
                        <Divider h={dividerHeight} color={dividerColor}></Divider>
                        <Grid align="flex-start" justify="center" gutter='xl'>
                            <Grid.Col span={6}>
                                <Center>
                                    <ThemeIcon variant="subtle" size={spaceHeight}>
                                        <IconClockUp size={iconSize} />
                                    </ThemeIcon>
                                </Center>
                                <Text className={styles.subtitle}>Time Consuming</Text>
                                <Text className={styles.paragraph}>Employing man-hours for inbound item counting diverts labour from other crucial tasks, impacting operational efficiency.</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
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
                <Divider h={dividerHeight} color={dividerColor}></Divider>
                <Title className={styles.title} style={{ textAlign: 'center' }} order={2}>Project Objective</Title>
                <Text>The project aims to reduce the time spent and increase the accuracy rate of the counting process by leveraging technology</Text>
                <Divider h={dividerHeight} color={dividerColor}></Divider>
                <Space h={spaceHeight}></Space>
                <Space h={spaceHeight}></Space>
                <div className={styles.title1}><Text span c={highlightColor} inherit>Design</Text> Process</div>
                <Space h={spaceHeight}></Space>
                <Image p="lg" src="/capstone-project/boxconstraints-solutions.png"></Image>
                <Title order={2} className={styles.title} p="lg">Solution: Machine Vision Automation</Title>
                <Divider h={dividerHeight} color={dividerColor} p="xl"></Divider>
                <Group wrap="nowrap">
                    <Card bg="gray.2">
                        <Image src='/capstone-project/batulaArtboard-9@2x.png'></Image>
                    </Card>
                    <Text className={styles.paragraph}>
                        Count Calcula (TSI Counting) provides a machine vision-powered solution aimed at enhancing the efficiency of inbound item management. Through our web service and light-box, we automate the process of item counting, thereby boosting accuracy and streamlining operations in warehouse inbound processes. Our solution seamlessly integrates machine vision efficiency into existing counting stations, ensuring smooth workflow continuity without any disruption.
                    </Text>
                </Group>

                <Space h={spaceHeight}></Space>
                <Card withBorder shadow="xl">
                    <AspectRatio ratio={16 / 9} >
                        <iframe src="https://www.youtube.com/embed/WOHGemPN1z8" title="Capstone P24" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </AspectRatio>
                </Card>
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
                    <Text className={styles.subtitle}>Our choice:</Text>
                    <Title order={3} className={styles.title}>Ultralytics YOLO v8</Title>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <Grid align="flex-start" justify="center" gutter='xl' className={styles.mediumWidth} >
                        <Grid.Col span={6}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconDashboard size={iconSize}></IconDashboard>
                                </ThemeIcon>
                            </Center>
                            <div className={styles.subtitle}>
                                YOLO v8 is real fast
                            </div>
                            <Text className={styles.paragraph}>
                                Its speed comes from its single-pass neural network. Its region proposal and classification are done in a single pass reducing computational overhead and speeding up the process.
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconCloudNetwork size={iconSize}></IconCloudNetwork>
                                </ThemeIcon>
                            </Center>
                            <div className={styles.subtitle}>
                                Cutting edge
                            </div>
                            <Text className={styles.paragraph}>
                                YOLO is a well-supported project. It has regular releases that improve the network's performance and accuracy. YOLO v8 in conjunction with Anchor boxes, now uses anchor-free detection. More flexible bounding box predictions improve the accuracy of the model.
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
                    <Card withBorder shadow="xl" bg={bgColor}>
                        <Image src="/capstone-project/boxArtboard-3@2x.png"></Image>
                    </Card>

                    <Group gap='xl' align="flex-start" justify="center">
                        <div className={styles.flexCol3}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconSparkles size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Reduce reflections
                            </Text>
                            <Text className={styles.paragraph}>
                                Most of the items are store inside clear plastic packages. Reflections obstruct the image and prevent accurate object detection.
                                The light-box is constructed from frosted acrylic sheets, to reduce the glare that causes reflections.
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconPhotoSensor size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Fixed perspective
                            </Text>
                            <Text className={styles.paragraph}>
                                To improve consistency of model's performance, the scale and perspective of the items need to be fixed.
                                This reduces the ambiguity caused by different perspectives. The height is fixed at <Text span c="cyan" className={styles.subtitle}>30cm</Text>.
                                For smaller items that need to be photographed at closer distance, we have a shelf at <Text span c="cyan" className={styles.subtitle}>15cm</Text>.
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconDimensions size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Small footprint
                            </Text>
                            <Text className={styles.paragraph}>
                                The footprint of the light box is about <Text span c="cyan" className={styles.subtitle}>41 cm by 31 cm</Text>. This makes it easy to deploy at existing counting stations.
                                There is no need to change the warehouse floor-plan or workflow making it easy to deploy.
                            </Text>
                        </div>
                    </Group>
                    <Space h={spaceHeight}></Space>
                    <Stack>
                        <Center>
                            <Title className={styles.title} order={3}>Building Dataset</Title>
                        </Center>
                        <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                        <Text className={styles.paragraph}>
                            Using the light box our client was able to help us take images for the dataset.
                            We took <Text span c='cyan' className={styles.subtitle}>200</Text>  images for each SKU.
                        </Text>
                        <Text className={styles.subtitle}>Dataset pre-processing pipeline</Text>
                        <Image src="/capstone-project/AI-Training.png"></Image>
                    </Stack>
                    <Group gap='xl' align="flex-start" justify="center">
                        <div className={styles.flexCol3}>
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
                        </div>
                        <div className={styles.flexCol3}>
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
                                <Text span c="cyan" className={styles.highlight}>Augmentations used:</Text>
                                <List type="ordered">
                                    <List.Item>Flip Horizontally and Vertically</List.Item>
                                    <List.Item>Rotate 180° Clockwise</List.Item>
                                    <List.Item>Blur</List.Item>
                                    <List.Item>Brightness</List.Item>
                                    <List.Item>Colour Shift</List.Item>
                                </List>
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <ThemeIcon variant="subtle" size={spaceHeight}>
                                    <IconBackground size={iconSize} />
                                </ThemeIcon>
                            </Center>
                            <Text className={styles.subtitle}>
                                Background Class
                            </Text>
                            <Text className={styles.paragraph}>
                                We added new images and selected images from the Daily Items around the World dataset as a null class to improve the accuracy of ignoring background items.
                            </Text>
                        </div>
                    </Group>
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
                    <Group gap='xl' align="flex-start" justify="center">
                        <div className={styles.flexCol3}>
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
                        </div>
                        <div className={styles.flexCol3}>
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
                        </div>
                        <div className={styles.flexCol3}>
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
                        </div>
                    </Group>

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
                        <Image src="/capstone-project/FINAL-DETAILED-ARCHITECTURE.png"></Image>
                    </Card>
                    <Space h={spaceHeight}></Space>
                    <Title className={styles.title} order={3}>Capturing Records</Title>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <div className={styles.mediumWidth}>
                        <Text className={styles.paragraph}>
                            In order to track the AI model's results, each record is identified by a unique pair of SKU and Invoice number.
                        </Text>
                    </div>
                    <Group gap='xl' align="flex-start" justify="center">
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/barcode-scanner.png"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                Barcode Scanner
                            </Text>
                            <Text className={styles.paragraph}>
                                For data entry of SKU, Invoice and Label Quantity. Scanning speeds up the process.
                                We included barcode encoding for: <Text span className={styles.paragraph} style={{ fontStyle: "italic" }}> code 39, code 93, code 128 </Text>
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/Group-9.png"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                AI Scanner
                            </Text>
                            <Text className={styles.paragraph}>
                                Each image is sent to AI API. Each image will have a response the number of items and a annotated image.
                                User is also prompted to use either the top or bottom shelf. And to remove from plastic.
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/submitted-record-1.png"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                Image Storage.
                            </Text>
                            <Text className={styles.paragraph}>
                                The images will be uploaded to the AWS S3 bucket. Image SQL table maps each image a single record in the Records SQL table.
                            </Text>
                        </div>
                    </Group>
                    <Space h={spaceHeight}></Space>
                    <Title className={styles.title} order={3}>Retrieving Records</Title>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <div className={styles.mediumWidth}>
                        <Text className={styles.paragraph}>
                            Records are retrieved based on the submitted search query.
                        </Text>
                    </div>
                    <Group gap='xl' align="flex-start" justify="center">
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/csv-download.jpg"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                Download records as csv
                            </Text>
                            <Text className={styles.paragraph}>
                                All records that match the search query will be downloaded into a single csv file. This table will hold the SKU, Invoice, Label Quantity, Count Quantity, User ID, List of image filenames.
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/zip-download.png"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                Download images
                            </Text>
                            <Text className={styles.paragraph}>
                                All images from the records that match the search query are downloaded as a zip file. Each record has a folder with its images.
                            </Text>
                        </div>
                        <div className={styles.flexCol3}>
                            <Center>
                                <Image className={styles.screenshot} src={"/capstone-project/archive-buttons.png"}></Image>
                            </Center>
                            <Text className={styles.subtitle}>
                                Archive records
                            </Text>
                            <Text className={styles.paragraph}>
                                To reduce the number of records that can be selected, old records can be archived.
                                This archival feature stops the search feature from accessing records from before a given date.
                                This date is can only be set by a Supervisor.
                            </Text>
                        </div>
                    </Group>
                    <Space h={spaceHeight}></Space>
                    <Title order={3} className={styles.title}>Security</Title>
                    <Divider h={dividerHeight} color={dividerColor} className={styles.mediumWidth}></Divider>
                    <Group gap='xl' align="flex-start" justify="space-between">
                        <div className={styles.flexCol2}>
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
                        </div>
                        <div className={styles.flexCol2}>
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
                        </div>
                    </Group >
                    <Space h={spaceHeight}></Space>
                    <Title order={2}>A collaboration between:</Title>
                    <Center bg={bgColor}>
                        <Image fit='scale-down' width={100} height={70} src="/capstone-project/sutd.png"></Image>
                        <ThemeIcon variant="subtle" color="black" size={60}>
                            <IconX size={60} ></IconX>
                        </ThemeIcon>
                        <Image fit='scale-down' width={100} height={70} src="/capstone-project/db.png"></Image>
                    </Center>
                </Stack >
            </Container >
        </>

    )
}

export default CapstonePage