import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private param: ActivatedRoute) {}
  getArticleSlug: any;
  ngOnInit(): void {
    this.getArticleSlug = this.param.snapshot.paramMap.get('articleSlug');
    console.log(this.getArticleSlug, 'getArticle');
  }
}
