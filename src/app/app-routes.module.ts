import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./select-page/main-page/main-page.component";
import {DataListComponent} from "./select-page/main-page/data-list/data-list.component";
import {NgModule} from "@angular/core";
import {SelectPageComponent} from "./select-page/select-page.component";

const appRoutes: Routes = [
  {path: 'projects', component: SelectPageComponent},
  {path: 'projects/:name', component: MainPageComponent},
  {path: 'list', component: DataListComponent},
  {path: '**', component: SelectPageComponent},
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
