import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"book-details",
templateUrl:"./book-details.component.html"
})
export class BookDetailsComponent implements OnInit {

    constructor(private bookService:BookService, private route:ActivatedRoute){}
    book:Book;
    ngOnInit():void{
        this.route.paramMap.subscribe((map)=>{
    let bookId = map.get("bookId");
        console.log(bookId);
        this.bookService.findBookById(bookId).subscribe((data)=>{
            this.book=data;
        })
    });

}
    
}