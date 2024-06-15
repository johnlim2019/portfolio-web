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
    slugPrefix: string
}

export interface ICardList {
    items: IPostCard[]
}
