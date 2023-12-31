import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { List } from "./state/list.model";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-list',
    template: `
    <div class="flex align-center sb">
     <div class="flex">
      <label>
        <input type="checkbox" [formControl]="control"/>
        <span></span>
      </label>
      {{list.title}}
    </div>
    <a class="btn waves-effect waves-light red btn-small btn-floating">
      <i class="material-icons" (click)="delete.emit(list.id)">delete_forever</i>
    </a>
   </div>
  `, 
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListComponent implements OnInit{
    @Input() list: List;
    @Output() complete = new EventEmitter<List>();
    @Output() delete = new EventEmitter<string>
    
    control: FormControl;

    ngOnInit() {
        this.control = new FormControl(this.list.completed)
        this.control.valueChanges.subscribe((completed: boolean) =>{
            this.complete.emit({...this.list, completed})
        } )
    }
}