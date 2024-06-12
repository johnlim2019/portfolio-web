export enum TopBarEnum {
    WRITINGS = "Writings",
    PROJECTS = "PROJECTS",
    HOME = "HOME",
    GAMES = "GAMES",
    ABOUT = "ABOUT"
}

export function string2CountTopBarEnum(input: string): string {
    switch (input) {
        case TopBarEnum.WRITINGS:
            return TopBarEnum.WRITINGS
        case TopBarEnum.HOME:
            return TopBarEnum.HOME
        case TopBarEnum.PROJECTS:
            return TopBarEnum.PROJECTS
        case TopBarEnum.GAMES:
            return TopBarEnum.GAMES
        case TopBarEnum.ABOUT:
            return TopBarEnum.ABOUT
        default:
            throw new Error("IllegalArgumentError")
    }
}