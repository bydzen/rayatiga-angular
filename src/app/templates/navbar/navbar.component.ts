import { Component } from '@angular/core';
import { ArticleDetailsService } from 'src/app/services/article-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private service: ArticleDetailsService) {}
  articleData: any;
  ngOnInit(): void {
    this.articleData = this.service.articleDetails;
  }
}
