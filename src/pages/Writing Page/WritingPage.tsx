import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IWritingPageArticle } from "./Interfaces/IWritingPage";
import { Text, Title } from "@mantine/core";

function WritingPage(): JSX.Element {

    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [article, setArticle] = useState<string[]>([])
    const { filename } = useParams();

    function getFile(filename: string): null {
        console.log(filename);
        fetch(filename)
            .then(async response => {
                const details = await response.json();
                const typedDetails = details as IWritingPageArticle;
                setArticle(typedDetails.paragraphs);
                setIsLoaded(true)
            })
            .catch(error => {
                console.error(error);
            });
        return null
    }

    useEffect(() => {
        if (filename != undefined)
            getFile("./" + filename + ".json");
    }, [filename])

    if (isLoaded) {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <Title>Hello</Title>
            {
                article.map((value, index) => (
                    <Text ta='justify' key={index}>{value}</Text>
                ))
            }

        </>
    )
}

export default WritingPage;