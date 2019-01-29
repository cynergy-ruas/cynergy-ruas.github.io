import { Component, OnInit } from '@angular/core';

// import Quotes Service
import { QuotesService } from '../../services/quotes.service';

// Quote Model
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: Quote;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    // let quote = this.quotesService.getRandomQuote();
    // console.log(quote);
    this.quotesService.getRandomQuote()
      .then(data => {
        console.log(data);
        this.quote.text = data.text;
        this.quote.author = data.author;
        console.log(this.quote);
      });
  }

}
