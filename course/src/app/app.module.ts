import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from './star/star.component';
import { pipeReplace } from './pipes/pipeReplace';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { listenerCount } from 'process';
import { error404Component } from './404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    pipeReplace,
    NavbarComponent,
    error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path:'', redirectTo:'courses', pathMatch:'full'
      },
      {
      path:'courses', component:CourseListComponent
      },
      {
        path:'**', component:error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
