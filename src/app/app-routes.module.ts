import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {DataListComponent} from "./main-page/data-list/data-list.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'list', component: DataListComponent},
    {path: '**', component: MainPageComponent},
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {



}
