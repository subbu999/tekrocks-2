import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { EverifyComponent } from './components/everify/everify.component';
import { SoftwareDevelopmentComponent } from './components/services/software-development/software-development.component';
import { ApplicationDevelopmentComponent } from './components/services/software-development/application-development/application-development.component';
import { ApplicationReDesigningComponent } from './components/services/software-development/application-re-designing/application-re-designing.component';
import { CustomizedWebComponent } from './components/services/software-development/customized-web/customized-web.component';
import { CmsComponent } from './components/services/software-development/cms/cms.component';
import { MobileAppDevelopmentComponent } from './components/services/software-development/mobile-app-development/mobile-app-development.component';
import { TechnologiesComponent } from './components/services/technologies/technologies.component';
import { PhpComponent } from './components/services/technologies/php/php.component';
import { DotNetComponent } from './components/services/technologies/dot-net/dot-net.component';
import { DbaComponent } from './components/services/technologies/dba/dba.component';
import { JavaComponent } from './components/services/technologies/java/java.component';
import { TestingComponent } from './components/services/technologies/testing/testing.component';
import { TrainingComponent } from './components/services/training/training.component';
import { JavaTrainingComponent } from './components/services/training/java-training/java-training.component';
import { PeoplesoftTrainingComponent } from './components/services/training/peoplesoft-training/peoplesoft-training.component';
import { ItStaffingComponent } from './components/services/it-staffing/it-staffing.component';
import { ItConsultingComponent } from './components/services/it-consulting/it-consulting.component';
import { HealthcareComponent } from './components/services/healthcare/healthcare.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'services', children: [
      { path: '', component: ServicesComponent },
      {
        path: 'software-development', children: [
          { path: '', component: SoftwareDevelopmentComponent },
          { path: 'application-development', component: ApplicationDevelopmentComponent },
          { path: 'application-re-designing', component: ApplicationReDesigningComponent },
          { path: 'customized-web', component: CustomizedWebComponent },
          { path: 'cms', component: CmsComponent },
          { path: 'mobile-app-development', component: MobileAppDevelopmentComponent },
        ]
      },
      {
        path: 'technologies', children: [
          { path: '', component: TechnologiesComponent },
          { path: 'php', component: PhpComponent },
          { path: 'dot-net', component: DotNetComponent },
          { path: 'dba', component: DbaComponent },
          { path: 'java', component: JavaComponent },
          { path: 'testing', component: TestingComponent },
        ]
      },
      {
        path: 'training', children: [
          { path: '', component: TrainingComponent },
          { path: 'java', component: JavaTrainingComponent },
          { path: 'peoplesoft', component: PeoplesoftTrainingComponent },
        ]
      },
      { path: 'it-staffing', component: ItStaffingComponent },
      { path: 'it-consulting', component: ItConsultingComponent },
      { path: 'healthcare', component: HealthcareComponent },
    ]
  },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'everify', component: EverifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
