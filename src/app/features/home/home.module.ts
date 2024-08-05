import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { EmergencySectionComponent } from './components/emergency-section/emergency-section.component';
import { HomeComponent } from './pages/home.component';
import { SupportOrganizationComponent } from './components/support-organization/support-organization.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
@NgModule({
  declarations: [
    EmergencySectionComponent,
    HomeComponent,
    SupportOrganizationComponent,
    MainFeedComponent,
    PostFormComponent,
    PostComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
