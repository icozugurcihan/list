import { guid } from "@datorama/akita";

export interface List{
    id: string ,
    title:string,
    completed: boolean
}

export function createList(title: string){
    return{
        id: guid(),
        title,
        completed: false
    } as List;
}