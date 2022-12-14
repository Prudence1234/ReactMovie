interface Viewer {
    rating: number
}

interface Tomatoes {
    viewer: Viewer
    website: string
}

export interface Movie {
    _id: string 
    poster: string 
    genre: string 
    title: string 
    tomatoes: Tomatoes
    year:number
    directors: string[]
    fullplot: string
    rated:string | number
    elementById: string

}