import { ListsStore } from "./lists.store";
import { createList, List } from "./list.model";
import { Injectable } from "@angular/core";
import { VISIBILITY_FILTER } from "../filter/filter.model";
import { ID } from "@datorama/akita";

@Injectable({providedIn:"root"})

export class ListsService {
  constructor(private listsStore: ListsStore){}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.listsStore.update({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: List) {
    this.listsStore.update(id, { completed });
  }

  add(title: string) {
    const list = createList(title);
    this.listsStore.add(list);
  }

  delete(id: string) {
    this.listsStore.remove(id);
  }
}