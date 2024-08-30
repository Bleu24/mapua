import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './academic/courses/courses.component';
import { FacultyComponent } from './academic/faculty/faculty.component';
import { ResearchComponent } from './academic/research/research.component';
import { AcademicComponent } from './academic/academic.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    FacultyComponent,
    ResearchComponent,
    AcademicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
