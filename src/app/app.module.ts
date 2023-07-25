import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NavbarComponent } from './component/navbar/navbar.component'
import { FooterComponent } from './component/footer/footer.component'
import { AppRoutingModule } from './app-routing.module'

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

import { SecurityContext } from '@angular/core'
import { MarkdownModule } from 'ngx-markdown'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    CareerComponent,
    ContactComponent,
    ProjectComponent,
    PageNotFoundComponent,
    HostingComponent,
    HostingAboutComponent,
    HostingContactComponent,
    HostingPricingComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
