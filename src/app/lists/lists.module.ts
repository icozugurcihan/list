import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ListsComponent } from "./lists.component";
import { ListsFiltersComponent } from "./filter/filters.component";
import { ListComponent } from "./list.component";
import { RouterModule, Routes } from "@angular/router";
import { ListsPageComponent } from "./lists-page/lists-page.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [ListsComponent, ListsFiltersComponent],
    declarations: [ListComponent,ListsComponent,ListsFiltersComponent,ListsPageComponent]
})

export class ListsModule{}