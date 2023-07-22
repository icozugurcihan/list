import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ListsModule } from "./lists/lists.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from '../environments/environment';
import { RouterModule } from "@angular/router";


@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    ListsModule,
    AppRoutingModule,
    RouterModule, 
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule{}