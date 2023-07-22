import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { combineLatest } from "rxjs";
import { List } from "./list.model";
import { ListsState, ListsStore} from "./lists.store";
import {  map } from "rxjs/operators";
import {  VISIBILITY_FILTER } from "../filter/filter.model";

@Injectable({
  providedIn:'root'
})
export class ListsQuery extends QueryEntity<ListsState>{
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleLists$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleLists,
  );

  constructor(protected override store: ListsStore){
    super(store);
  }
  private getVisibleLists(filter: any, lists: any): List[]{
    switch (filter){
      case VISIBILITY_FILTER.SHOW_COMPLETED:
          return lists.filter((l: List) =>  l.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
          return lists.filter((l: List) => !l.completed)
      default:
          return lists;
    }
  }
}