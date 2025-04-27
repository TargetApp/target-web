import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { TargetRoutingModule } from './target-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountAccessComponent } from './components/auth/account-access/account-access.component';
import { AccessComponent } from './components/auth/access/access.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ValidateLoginComponent } from './components/auth/validate-login/validate-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PictureAnalysisComponent } from './pages/picture/picture-analysis/picture-analysis.component';
import { PictureResultComponent } from './pages/picture/picture-result/picture-result.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileRegistrationComponent } from './components/auth/profile-registration/profile-registration.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import localePt from '@angular/common/locales/pt';
import { ReportsComponent } from './pages/reports/reports.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AccessComponent,
    AccountAccessComponent,
    DashboardComponent,
    LoginComponent,
    ValidateLoginComponent,
    PictureAnalysisComponent,
    PictureResultComponent,
    ContactComponent,
    ProfileRegistrationComponent,
    AnalysisComponent,
    ReportsComponent,
  ],
  imports: [
      CommonModule,
      ButtonModule,
      TargetRoutingModule,
      CommonModule,
      RouterModule,
      ToastModule,
      MessageModule,
      MessagesModule,
      BrowserAnimationsModule,
      AccordionModule,
      AppRoutingModule,
      AutoCompleteModule,
      AvatarGroupModule,
      AvatarModule,
      BadgeModule,
      BreadcrumbModule,
      ButtonModule,
      CalendarModule,
      ChartModule,
      CarouselModule,
      CascadeSelectModule,
      ChartModule,
      CheckboxModule,
      ChipModule,
      ChipsModule,
      ColorPickerModule,
      ConfirmDialogModule,
      ConfirmPopupModule,
      ContextMenuModule,
      DataViewModule,
      DialogModule,
      DividerModule,
      DropdownModule,
      FieldsetModule,
      FileUploadModule,
      FormsModule,
      GalleriaModule,
      HttpClientModule,
      InputSwitchModule,
      KnobModule,
      ListboxModule,
      MegaMenuModule,
      MenubarModule,
      MenuModule,
      MultiSelectModule,
      OverlayPanelModule,
      PaginatorModule,
      PanelMenuModule,
      PanelModule,
      PasswordModule,
      ProgressBarModule,
      RadioButtonModule,
      RatingModule,
      ReactiveFormsModule,
      RippleModule,
      ScrollPanelModule,
      ScrollTopModule,
      SelectButtonModule,
      SidebarModule,
      SkeletonModule,
      SliderModule,
      ImageModule,
      SplitButtonModule,
      SplitterModule,
      StepsModule,
      TableModule,
      TabMenuModule,
      TabViewModule,
      TagModule,
      InputTextareaModule,
      TieredMenuModule,
      ToggleButtonModule,
      ToolbarModule,
      TooltipModule,
      TreeModule,
      TreeTableModule,
      ProgressSpinnerModule
  ],
  exports: [
      AccountAccessComponent,
      PictureAnalysisComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    DatePipe,
    CurrencyPipe
  ]
})
export class TargetModule { }
