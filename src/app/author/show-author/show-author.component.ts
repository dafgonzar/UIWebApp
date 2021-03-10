import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  constructor(private service:SharedService) { }

  AuthorlList:any=[];

  ModalTitle: string="";

  ActivateAddEditEditComp:boolean=false;

  author:any;

  ngOnInit(): void {
    this.refreshEditList();
  }
  addClick(){
    this.author={
      AuthorId:0,
      AuthorFullName:"",
      AuthorDateBirth:"",
      AuthorCity:"",
      AuthorEmail:""
    }
    this.ModalTitle="Add Author";
    this.ActivateAddEditEditComp=true;
  }

  editClick(item: any){
    this.author=item;
    this.ModalTitle="Edit Author";
    this.ActivateAddEditEditComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteAuthor(item.AuthorId).subscribe(data=>{
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
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorlList=data;
    }

    )
  }

}
