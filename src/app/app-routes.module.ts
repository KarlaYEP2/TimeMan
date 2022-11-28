import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./select-page/main-page/main-page.component";
import {DataListComponent} from "./select-page/main-page/data-list/data-list.component";
import {NgModule} from "@angular/core";
import {SelectPageComponent} from "./select-page/select-page.component";

const appRoutes: Routes = [
  {path: '', component: SelectPageComponent},
  {path: ':name', component: MainPageComponent},
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
