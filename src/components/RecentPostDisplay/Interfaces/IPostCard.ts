export interface IPostCard {
    title: string,
    image: string,
    date: string,
    paragraph: string,
    slug: string
}

export interface IRecentPostDisplayProps {
    jsonFile: string,
    title: string,
    slugPrefix: string,
    numberOfCards: number // set to 0 or -ve to list all elements from jsonFile
}

export interface ICardList {
    items: IPostCard[]
}
