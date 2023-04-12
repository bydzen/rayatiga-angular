import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailsService {
  constructor() {}

  articleDetails = [
    {
      articleSlug: 'apache2-benchmark',
      articleTitle: 'Apache2 Benchmark.',
      articleNavTitle: 'Apache2 Benchmark',
      articleLink: 'https://github.com/rayatiga/apache2-benchmark',
    },
    {
      articleSlug: 'php-ini-configuration',
      articleTitle: 'PHP ini Configuration.',
      articleNavTitle: 'PHP ini Configuration',
      articleLink: 'https://github.com/rayatiga/php-ini-configuration',
    },
    {
      articleSlug: 'wordpress-installer',
      articleTitle: 'WordPress Installer.',
      articleNavTitle: 'WordPress Installer',
      articleLink: 'https://github.com/rayatiga/wordpress-installer',
    },
  ];
}
