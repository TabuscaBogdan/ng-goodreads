import { Component, OnInit } from '@angular/core';
import { Book } from './shared/book';
import { BookService } from './services/book.service'
import { Search } from './shared/search'
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-badreads';
  gpl: boolean = true;
  searchTitle: string = "";
  books: Array<Book> = []

  doSearch(event: {searchTerm : string}) :void {
    this.searchTitle = event.searchTerm;
  }
  constructor(private bookService: BookService) {}

  ngOnInit()
  {
    this.bookService.fetchBook().subscribe((books) => {this.books = books})
  }
}
