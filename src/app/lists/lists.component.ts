import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import { List } from './state/list.model'

@Component({
    selector: 'app-lists',
    template: `
    <div class="collection with-header">
        <h4 class="collection-header">List:</h4>
        <app-list *ngFor="let list of lists; trackBy: trackByFn"
                  class="collection-item"
                  (delete)="delete.emit($event)"
                  (complete)="complete.emit($event)">
                  [list]="list"></app-list>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListsComponent{
    @Input() lists: List[] | null;
    @Output() complete = new EventEmitter<List>();
    @Output() delete = new EventEmitter<string>;

    trackByFn(index:any , list: any){
        return list.id
    }
}

