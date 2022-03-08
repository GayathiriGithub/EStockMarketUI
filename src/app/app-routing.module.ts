import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddstockComponent } from './addstock/addstock.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { CompanyComponent } from './company/company.component';
const routes: Routes = [
{path:'',component:CompanyComponent},
{path:'addstock',component:AddstockComponent},
{path:'updatestock',component:UpdatestockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
