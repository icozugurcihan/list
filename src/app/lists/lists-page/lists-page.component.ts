import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { VISIBILITY_FILTER, initialFilters } from "../filter/filter.model";
import { ListsQuery } from "../state/lists.query";
import { ListsService } from "../state/lists.service";
import { List } from '../state/list.model';
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-lists-page',
    templateUrl: './lists-page.component.html'
})

 export class ListsPageComponent implements OnInit {
      lists$: Observable<List[]>;
      activeFilter$: Observable<VISIBILITY_FILTER>;
      filters = initialFilters;
 
      constructor(private listsQuery: ListsQuery,
         private listsService: ListsService) {

        }

   ngOnInit(){
     this.lists$ = this.listsQuery.selectVisibleLists$;
     this.activeFilter$ = this.listsQuery.selectVisibilityFilter$;
   }

   add(input: HTMLInputElement){
    this.listsService.add(input.value);
    input.value = '';
 }

 complete(list: List){
    this.listsService.complete(list);
 }

 delete(id: string){
    this.listsService.delete(id);
 }

 changeFilter(filter:VISIBILITY_FILTER){
    this.listsService.updateFilter(filter);
 }
}