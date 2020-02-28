import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Book } from '../shared/book'
import { ObservableInput, throwError } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse)
  { if(error.error instanceof ErrorEvent)
    {
      console.log("An error has occured $(error.error.message)");
    }
    else
    {console.error("Backend returned an error code ${error.status}")}
    return throwError(error.error);
    
  }


  fetchBook() {
    {
      return this.http.get<Book[]>('/books', httpOptions)
        .pipe(
          retry(3),
          catchError(this.handleError)
        )
    }
  }
}
