import { TestBed } from '@angular/core/testing';

import { ArticleDetailsService } from './article-details.service';

describe('ArticleDetailsService', () => {
  let service: ArticleDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
