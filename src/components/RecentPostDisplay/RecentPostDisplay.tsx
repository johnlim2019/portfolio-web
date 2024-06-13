import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import "../../assets/buttons.css";
import "../../assets/containers.css";
import "../../assets/titles.css";
import { ICardList, IPostCard, IRecentPostDisplayProps } from './Interfaces/IPostCard';
import PostCard from './PostCard';
import "./PostCard.css";



function RecentPostDisplay(props: IRecentPostDisplayProps): JSX.Element {

    const [data, setData] = useState<IPostCard[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    function loadData(): null {
        fetch(props.jsonFile)
            .then(async response => {
                const details = await response.json();
                // console.log(details);
                const typedDetails = details as unknown as ICardList;
                setData(typedDetails.items);
                setIsLoaded(true)
            })
            .catch(error => {
                console.error(error);
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
                        <PostCard key={index} title={value.title} date={value.date} image={value.image} paragraph={value.paragraph}></PostCard>
                    ))

                }

            </div >
        </>
    )
}

export default RecentPostDisplay
