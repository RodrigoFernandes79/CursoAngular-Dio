import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { error404Component } from './404/error404.component';
import { CourseListComponent } from './course-list/course-list.component';
import { InfoComponent } from './course-list/info/info.component';



const routes: Routes = [
  {
    path:'', redirectTo:'courses', pathMatch:'full'
    },
    {
    path:'courses', component:CourseListComponent
    },
   
    {
      path:'info/:id', component:InfoComponent
    },
    {
      path:'**', component:error404Component
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
