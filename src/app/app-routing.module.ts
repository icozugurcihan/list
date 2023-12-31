import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsPageComponent } from './lists/lists-page/lists-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lists'
    },
    {
        path: 'lists',
        component: ListsPageComponent,
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }