import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// import Quotes Service
import { QuotesService } from '../../services/quotes.service';

// Quote Model
import { Quote } from '../../models/quote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('videoPlayer') videoplayer: any;

  quote: Quote = new Quote();

  constructor(
    @Inject(DOCUMENT) private document: any,
    private quotesService: QuotesService,
    private router: Router,
    ) { }

  ngOnInit() {
    // Get a Random Quote from the Database
    this.quotesService.getRandomQuote()
      .then(data => {
        this.quote = new Quote(data.text, data.author);
      });
  }

  ngAfterViewInit(): void {
    this.videoplayer.load();

    this.videoplayer.nativeElement.pause();

    setTimeout(() => {
      this.videoplayer.nativeElement.play();
    }, 2000);
  }

  register() {
    // this.router.navigate(['/register']);
    this.document.location.href = 'https://goo.gl/forms/sKRxoNUuK5TLDS163';
  }

}
