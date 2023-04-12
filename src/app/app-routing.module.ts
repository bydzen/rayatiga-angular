import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ArticleDetailsService } from './services/article-details.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Rayatiga',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'career',
    component: CareerComponent,
    title: 'Career',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'project',
    component: ProjectComponent,
    title: 'Project',
  },
  {
    path: 'project/:slug',
    component: ProjectsComponent,
    title: 'Projects',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
