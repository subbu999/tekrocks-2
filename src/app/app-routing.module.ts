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
import { MobileAppComponent } from './components/solutions/mobile-app/mobile-app.component';
import { ErpComponent } from './components/solutions/erp/erp.component';
import { CloudComputingComponent } from './components/solutions/cloud-computing/cloud-computing.component';
import { SoftwareTestingComponent } from './components/solutions/software-testing/software-testing.component';
import { StaffAugmentationComponent } from './components/solutions/staff-augmentation/staff-augmentation.component';
import { ContractStaffingComponent } from './components/solutions/staff-augmentation/contract-staffing/contract-staffing.component';
import { ContractToHireStaffingComponent } from './components/solutions/staff-augmentation/contract-to-hire-staffing/contract-to-hire-staffing.component';
import { PermanentStaffingComponent } from './components/solutions/staff-augmentation/permanent-staffing/permanent-staffing.component';
import { OffshoreStaffingComponent } from './components/solutions/staff-augmentation/offshore-staffing/offshore-staffing.component';

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
  {
    path: 'solutions', children: [
      { path: '', component: SolutionsComponent },
      { path: 'erp', component: ErpComponent },
      { path: 'mobile-app', component: MobileAppComponent },
      { path: 'cloud-computing', component: CloudComputingComponent },
      { path: 'software-testing', component: SoftwareTestingComponent },
      {
        path: 'staff-augmentation', children: [
          { path: '', component: StaffAugmentationComponent },
          { path: 'contract-staffing', component: ContractStaffingComponent },
          { path: 'contract-to-hire-staffing', component: ContractToHireStaffingComponent },
          { path: 'permanent-hiring', component: PermanentStaffingComponent },
          { path: 'offshore-staffing', component: OffshoreStaffingComponent }
        ]
      },
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
