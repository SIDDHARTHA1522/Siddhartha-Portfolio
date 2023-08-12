import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CerificatesComponent } from './cerificates/cerificates.component';
import { SkillComponent } from './skill/skill.component';
import { AchademicComponent } from './achademic/achademic.component';


const appRoute : Routes = [

  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'academy', component: AchademicComponent},
  {path:'project', component:ProjectsComponent },
  {path:'skill', component: SkillComponent},
  {path:'exprience', component: ExperienceComponent},
  {path:'certificate', component: CerificatesComponent},
  {path: '', component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    CerificatesComponent,
    SkillComponent,
    AchademicComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
