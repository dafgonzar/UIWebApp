import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(private service:SharedService) { }

  BookList:any=[];

  ModalTitle: string="";

  ActivateAddEditEditComp:boolean=false;

  book:any;

  ngOnInit(): void {
    this.refreshEditList();
  }
  addClick(){
    this.book={
      BookId:0,
      BookTitle:"",
      BookYear:"",
      BookGender:"",
      BookPages:"",
      BookEditorialId:"",
      BookAuthorId:""
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditEditComp=true;
  }

  editClick(item: any){
    this.book=item;
    this.ModalTitle="Edit Book";
    this.ActivateAddEditEditComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteBook(item.BookId).subscribe(data=>{
        alert(data.toString());
        this.refreshEditList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEditComp=false;
    this.refreshEditList();
  }

  refreshEditList(){
    this.service.getBookList().subscribe(data=>{
      this.BookList=data;
    }

    )
  }


}
