export interface IPostCard {
    title: string,
    image: string,
    date: string,
    paragraph: string
}

export interface IRecentPostDisplayProps {
    jsonFile: string,
    title: string
}

export interface ICardList {
    items: IPostCard[]
}
