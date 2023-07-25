import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './home/about/about.component'
import { BlogComponent } from './home/blog/blog.component'
import { CareerComponent } from './home/career/career.component'
import { ContactComponent } from './home/contact/contact.component'
import { ProjectComponent } from './home/project/project.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component'
import { HostingComponent } from './hosting/hosting.component'
import { HostingAboutComponent } from './hosting/hosting-about/hosting-about.component'
import { HostingContactComponent } from './hosting/hosting-contact/hosting-contact.component'
import { HostingPricingComponent } from './hosting/hosting-pricing/hosting-pricing.component'
import { ArticleComponent } from './home/blog/article/article.component'

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Rayatiga' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'blog', component: BlogComponent, title: 'Blog' },
  { path: 'career', component: CareerComponent, title: 'Career' },
  { path: 'project', component: ProjectComponent, title: 'Project' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },

  { path: 'hosting', component: HostingComponent, title: 'Hosting' },
  { path: 'hosting/about', component: HostingAboutComponent, title: 'About Hosting' },
  { path: 'hosting/contact', component: HostingContactComponent, title: 'Contact Hosting' },
  { path: 'hosting/pricing', component: HostingPricingComponent, title: 'Pricing Hosting' },

  { path: 'article/:article', component: ArticleComponent },
  
  { path: '**', component: PageNotFoundComponent, title: '404 Not Found' },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
