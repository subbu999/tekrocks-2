import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EverifyComponent } from './components/everify/everify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
// material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SoftwareDevelopmentComponent } from './components/services/software-development/software-development.component';
import { ApplicationDevelopmentComponent } from './components/services/software-development/application-development/application-development.component';
import { ApplicationReDesigningComponent } from './components/services/software-development/application-re-designing/application-re-designing.component';
import { CustomizedWebComponent } from './components/services/software-development/customized-web/customized-web.component';
import { CmsComponent } from './components/services/software-development/cms/cms.component';
import { MobileAppDevelopmentComponent } from './components/services/software-development/mobile-app-development/mobile-app-development.component';
import { TechnologiesComponent } from './components/services/technologies/technologies.component';
import { PhpComponent } from './components/services/technologies/php/php.component';
import { DotNetComponent } from './components/services/technologies/dot-net/dot-net.component';
import { JavaComponent } from './components/services/technologies/java/java.component';
import { TestingComponent } from './components/services/technologies/testing/testing.component';
import { DbaComponent } from './components/services/technologies/dba/dba.component';
import { TrainingComponent } from './components/services/training/training.component';
import { JavaTrainingComponent } from './components/services/training/java-training/java-training.component';
import { PeoplesoftTrainingComponent } from './components/services/training/peoplesoft-training/peoplesoft-training.component';
import { ItStaffingComponent } from './components/services/it-staffing/it-staffing.component';
import { ItConsultingComponent } from './components/services/it-consulting/it-consulting.component';
import { HealthcareComponent } from './components/services/healthcare/healthcare.component';
import { ErpComponent } from './components/solutions/erp/erp.component';
import { MobileAppComponent } from './components/solutions/mobile-app/mobile-app.component';
import { CloudComputingComponent } from './components/solutions/cloud-computing/cloud-computing.component';
import { SoftwareTestingComponent } from './components/solutions/software-testing/software-testing.component';
import { StaffAugmentationComponent } from './components/solutions/staff-augmentation/staff-augmentation.component';
import { ContractStaffingComponent } from './components/solutions/staff-augmentation/contract-staffing/contract-staffing.component';
import { ContractToHireStaffingComponent } from './components/solutions/staff-augmentation/contract-to-hire-staffing/contract-to-hire-staffing.component';
import { PermanentStaffingComponent } from './components/solutions/staff-augmentation/permanent-staffing/permanent-staffing.component';
import { OffshoreStaffingComponent } from './components/solutions/staff-augmentation/offshore-staffing/offshore-staffing.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SolutionsComponent,
    CareersComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EverifyComponent,
    SoftwareDevelopmentComponent,
    ApplicationDevelopmentComponent,
    ApplicationReDesigningComponent,
    CustomizedWebComponent,
    CmsComponent,
    MobileAppDevelopmentComponent,
    TechnologiesComponent,
    PhpComponent,
    DotNetComponent,
    JavaComponent,
    TestingComponent,
    DbaComponent,
    TrainingComponent,
    JavaTrainingComponent,
    PeoplesoftTrainingComponent,
    ItStaffingComponent,
    ItConsultingComponent,
    HealthcareComponent,
    ErpComponent,
    MobileAppComponent,
    CloudComputingComponent,
    SoftwareTestingComponent,
    StaffAugmentationComponent,
    ContractStaffingComponent,
    ContractToHireStaffingComponent,
    PermanentStaffingComponent,
    OffshoreStaffingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
