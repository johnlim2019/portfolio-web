import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import "../../assets/buttons.css";
import "../../assets/containers.css";
import "../../assets/titles.css";
import { ICardList, IPostCard, IRecentPostDisplayProps } from './Interfaces/IPostCard';
import PostCard from './PostCard';

function RecentPostDisplay(props: IRecentPostDisplayProps): JSX.Element {

    const [data, setData] = useState<IPostCard[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    function loadData(): null {
        fetch(props.jsonFile)
            .then(response => {
                console.log(response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                } else {
                    return response.json();
                }
            }).then(details => {
                // console.log(details);
                const typedDetails = details as ICardList;
                if (props.numberOfCards > 0) {
                    setData(typedDetails.items.slice(0, props.numberOfCards));
                } else {
                    setData(typedDetails.items);
                }
                setIsLoaded(true)
            })
            .catch(error => {
                console.error(error);
                setIsLoaded(true);
            });
        return null;
    }

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isLoaded) {
        return (
            <div className='headerContainer'>
                <Title order={3} fw={100} tt='uppercase' className='homeTitleText2'>{props.title}</Title>
            </div>
        )
    }



    return (
        <>
            <div className='headerContainer'>
                <Title order={3} fw={100} tt='uppercase' className='homeTitleText2'>{props.title}</Title>
            </div>
            <div>
                {
                    data.map((value, index) => (
                        <PostCard key={index} title={value.title} date={value.date} image={value.image} paragraph={value.paragraph} slug={`/${props.slugPrefix}/${value.slug}`}></PostCard>
                    ))
                }

            </div >
        </>
    )
}

export default RecentPostDisplay
