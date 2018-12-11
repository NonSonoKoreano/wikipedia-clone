import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  stringaDiRicerca: string;
  resultsList: [];
  constructor(private http: HttpClient) { }

  getUrl(termine){
    return 'https://it.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=' + termine;
  }
  getLink(title) {
    return encodeURI("https://it.wikipedia.org/wiki/" + title)
  }
  search(){
    //chiamata alla api di wikipedia
    if (this.stringaDiRicerca == undefined){
      this.stringaDiRicerca = 'dio';

    }
   
    let url = this.getUrl(this.stringaDiRicerca);
    this.http.get(url)
    .subscribe((response: any) => {
      //cercherà il contenuto di "stringaDiRicerca"

  this.resultsList = response.query.search
    //salverà il risultato in un "resultsList"

  console.log(this.resultsList)
  }

    )
}

  
  getlink(title){
    return encodeURI('https://en.wikipedia.org/wiki/'+ title);
  }
  



  ngOnInit() {
  }

}
