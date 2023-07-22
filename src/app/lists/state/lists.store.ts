import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { List } from "./list.model";
import { VISIBILITY_FILTER } from '../filter/filter.model'
import { Injectable } from "@angular/core";

export interface ListsState extends EntityState<List, string> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}

const initialState = {
    ui:{ filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'lists' })
export class ListsStore extends EntityStore<ListsState>{
    constructor(){
        super(initialState)
    }
}