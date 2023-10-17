import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBioComponent } from './edit-bio/edit-bio.component';
import { BioComponent } from './bio/bio.component';
const routes: Routes = [
  {path: 'edit-bio', component: EditBioComponent, title: "Edit Bio"},
  {path: 'bio', component: BioComponent, title: "Bio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
