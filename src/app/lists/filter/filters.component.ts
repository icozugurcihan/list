import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ListFilter, VISIBILITY_FILTER} from './filter.model';

@Component({
    selector: 'app-lists-filters',
    template: `
    <div class="input-field col s12">
        <select [formControl]="control" class="browser-default">,
            <option **ngFor="let filter of filters;"  [ngValue="filter.value"]>
                {{filter.label}}
            </option>
        </select>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListsFiltersComponent implements OnInit {
    @Input() active: VISIBILITY_FILTER | null;
    @Input() filters: ListFilter[];
    @Output() update = new EventEmitter<VISIBILITY_FILTER>();
  
    control: FormControl;
  
    ngOnInit() {
      this.control = new FormControl(this.active);
  
      this.control.valueChanges.subscribe(c => {
        this.update.emit(c);
      });
    }
}