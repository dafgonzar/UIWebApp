import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() book:any;
  BookId:string ="";
  BookTitle:string = "";
  BookYear:string ="";
  BookGender:string ="";
  BookPages:string ="";
  BookEditorialId:string ="";
  BookAuthorId:string ="";

  EditorialList:any=[];
  AuthorList:any=[];

  ngOnInit(): void {
    this.loadEditorialList();
    this.loadAuthorList();
  }


  loadEditorialList(){
    this.service.getAllEditorialNames().subscribe((data:any)=>{
      this.EditorialList=data;
      this.BookId=this.book.BookId;
      this.BookTitle=this.book.BookTitle;
      this.BookYear=this.book.BookYear;
      this.BookGender=this.book.BookGender;
      this.BookPages=this.book.BookPages;
      this.BookEditorialId=this.book.BookEditorialId;
      this.BookAuthorId=this.book.BookAuthorId;
    });
  }
  loadAuthorList(){
    this.service.getAllAuthorNames().subscribe((data:any)=>{
      this.AuthorList=data;
      this.BookId=this.book.BookId;
      this.BookTitle=this.book.BookTitle;
      this.BookYear=this.book.BookYear;
      this.BookGender=this.book.BookGender;
      this.BookPages=this.book.BookPages;
      this.BookEditorialId=this.book.BookEditorialId;
      this.BookAuthorId=this.book.BookAuthorId;
    });
  }

  addBook(){
    var val = {BookId:this.BookId,
              BookTitle:this.BookTitle,
              BookYear:this.BookYear,
              BookGender:this.BookGender,
              BookPages:this.BookPages,
              BookEditorialId:this.BookEditorialId,
              BookAuthorId:this.BookAuthorId
            };
    this.service.addBook(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBook(){
    var val = {BookId:this.BookId,
              BookTitle:this.BookTitle,
              BookYear:this.BookYear,
              BookGender:this.BookGender,
              BookPages:this.BookPages,
              BookEditorialId:this.BookEditorialId,
              BookAuthorId:this.BookAuthorId
    };
    this.service.updateBook(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
