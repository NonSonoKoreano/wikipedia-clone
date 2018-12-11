import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  contenutoPagina = "<h3>Ciao</h3><p>Lorem Ipsum</p>"

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  getURL(title) {
    return encodeURI(`https://it.wikipedia.org/w/api.php?action=parse&page=${title}&format=json&origin=*`)
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const title = params['title']
      const url = this.getURL(title)
      this.http.get(url)
        .subscribe((response: any) => {
          this.contenutoPagina = response.parse.text['*']
        })
    })    
  }

}