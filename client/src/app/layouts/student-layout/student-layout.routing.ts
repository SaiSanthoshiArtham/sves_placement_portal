import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlacementsComponent } from '../../placements/placements.component';
import { InternshipsComponent } from '../../internships/internships.component';
import { CompetitionsComponent } from '../../competitions/competitions.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { StudentProfileComponent } from 'src/app/student-profile/student-profile.component';
import { RegisterStudentComponent } from 'src/app/student-registration/student-registration.component';
import { StudentEditComponent } from 'src/app/student-edit/student-edit.component';
import { UserLoginComponent } from 'src/app/user-login/user-login.component';
import { JobPostsComponent } from 'src/app/job-posts/job-posts.component';
import { ViewCompetitionComponent } from 'src/app/view-competition/view-competition.component';
import { ViewRegisteredCompetitionsComponent } from 'src/app/view-registered-competitions/view-registered-competitions.component';
import { ViewJobPostComponent } from 'src/app/view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from 'src/app/view-applied-jobs/view-applied-jobs.component';
//import { RegisterStudentComponent } from '../../registration/registration.component';

const routes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'placements',     component: PlacementsComponent },
    { path: 'internships',    component: InternshipsComponent },
    { path: 'competitions',   component: CompetitionsComponent },
    { path: 'notifications',  component: NotificationsComponent },
      { 
    path: 'user-profile', 
    component: StudentProfileComponent 
  },
//   { 
//     path: 'student/add', 
//     component: RegisterStudentComponent
//   },
//   { 
//     path: 'student/edit', 
//     component: StudentEditComponent 
//   },

  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  }, 
  {
   path : 'jobposts',
   component : JobPostsComponent 
 },
 {
  path : 'internships',
  component : InternshipsComponent
},
{
  path : 'competitions/:id',
  component : ViewCompetitionComponent
},
{
  path : 'competitions',
  component : CompetitionsComponent
},
{
  path : 'competitions/applied',
  component : ViewRegisteredCompetitionsComponent
},
 {
   path : 'post/:id',
   component : ViewJobPostComponent 
 },
 {
   path : 'jobposts/applied',
   component : ViewAppliedJobsComponent
 },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

  export class StudentLayoutRoutes {}