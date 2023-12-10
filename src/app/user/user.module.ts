import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { UserRoutingModule } from './user-routing.module';
import { RequestAccountComponent } from './request-account/request-account.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PetCardComponent } from '../shared/components/pet-card/pet-card.component';
import { PetAdoptionComponent } from './pet-adoption/pet-adoption.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { AvatarModule } from 'primeng/avatar';
import { GalleriaModule } from 'primeng/galleria';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BankingComponent } from './pet-detail/banking/banking.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPageComponent } from './user-page/user-page.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { DonateComponent } from './donate/donate.component';
import { FundBankingComponent } from './donate/fund-banking/fund-banking.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { RescueComponent } from './rescue/rescue.component';
import { RescueDetailComponent } from './rescue-detail/rescue-detail.component';
import { AddRescueComponent } from './rescue/add-rescue/add-rescue.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EditRescueComponent } from './rescue/edit-rescue/edit-rescue.component';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    LandingComponent,
    RequestAccountComponent,
    PetAdoptionComponent,
    PetDetailComponent,
    BankingComponent,
    ProfileComponent,
    UserPageComponent,
    DonateComponent,
    FundBankingComponent,
    RescueComponent,
    RescueDetailComponent,
    AddRescueComponent,
    EditRescueComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    UserRoutingModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    DividerModule,
    PaginatorModule,
    DataViewModule,
    RadioButtonModule,
    BreadcrumbModule,
    AvatarModule,
    GalleriaModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    InputTextareaModule,
    TooltipModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    SkeletonModule
  ],
  providers: [MessageService, ConfirmationService],

})
export class UserModule { }
