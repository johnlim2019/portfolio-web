export interface IPostCard {
    title: string,
    image: string,
    date: string,
    paragraph: string
}

export interface IProps {
    jsonFile: string
}

export interface ICardList {
    items: IPostCard[]
}
