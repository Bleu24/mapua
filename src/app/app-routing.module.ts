import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { CoursesComponent } from './academic/courses/courses.component';
import { FacultyComponent } from './academic/faculty/faculty.component';
import { ResearchComponent } from './academic/research/research.component';

const routes: Routes = [
  {path:'', component:MainBodyComponent},
  {path:'courses', component:CoursesComponent},
  {path:'faculty', component:FacultyComponent},
  {path:'research', component:ResearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
