import { Container, Divider, Image, Space, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import "../../assets/containers.css";
import "../../assets/titles.css";
import TopBar from "../../components/TopBar/TopBar";
import { TopBarEnum } from "../../enum/TopBarEnum";
import { IWritingPageArticle } from "./Interfaces/IWritingPage";
import { useLocation, useParams } from "react-router-dom";
import { IPostCard } from "../../components/RecentPostDisplay/Interfaces/IPostCard";

function WritingPage(): JSX.Element {

    const filename = useParams();
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [article, setArticle] = useState<string[]>([]);
    const [citations, setCitations] = useState<string[]>([]);
    const [props, setProps] = useState<IPostCard>();
    const [articleTitle, setArticleTitle] = useState<string>("");

    function getFile(filename: string): null {
        console.log(filename);
        fetch(filename)
            .then(response => {
                console.log(response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then(details => {
                const typedDetails = details as IWritingPageArticle;
                setArticle(typedDetails.paragraphs);
                setCitations(typedDetails.citations);
                setArticleTitle(typedDetails.title);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error(error);
                setIsLoaded(true);
            });

        return null
    }

    useEffect(() => {
        // console.log(filename)
        if (filename != undefined)
            getFile("/" + filename.slug + ".json");
    }, [filename])

    useEffect(() => {
        // console.log(location.state);
        setProps(location.state.props)
    }, [location])

    if (!isLoaded) {
        return (
            <>
                <p>Loading ...</p>
            </>
        )
    }

    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Container className="responsiveContainer">
                <Stack>
                    <Image src={props?.image}></Image>
                    <Title className="homeTitleText2">{articleTitle}</Title>
                    <Title className='homeTitleText3'>{props?.date}</Title>
                    <Divider color="white"></Divider>
                    {
                        article.map((value, index) => (
                            <div key={index}>
                                <Text ta='justify' key={index}>{value}</Text>
                                <Space h='1em'></Space>
                            </div>
                        ))
                    }
                    <Title className='homeTitleText3'>Bibliography</Title>
                    <Divider color="white"></Divider>
                    {
                        citations.map((value, index) => (
                            <div key={index}>
                                <Text ta='justify' key={index}>{value}</Text>
                                <Space h='1em'></Space>
                            </div>
                        ))
                    }
                </Stack>

            </Container >


        </>
    )
}

export default WritingPage;