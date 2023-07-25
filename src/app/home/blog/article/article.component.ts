import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  article!: string
  href!: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article')
    this.href = window.location.href
    this.article = './assets/articles/' + articleName + '.md'
  }
}
