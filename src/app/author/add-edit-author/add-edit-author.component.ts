import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.css']
})
export class AddEditAuthorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() author:any;
  AuthorId:string ="";
  AuthorFullName:string ="";
  AuthorDateBirth:string = "";
  AuthorCity:string ="";
  AuthorEmail:string ="";

  ngOnInit(): void {
    this.AuthorId=this.author.AuthorId;
    this.AuthorFullName=this.author.AuthorFullName;
    this.AuthorDateBirth=this.author.AuthorDateBirth;
    this.AuthorCity=this.author.AuthorCity;
    this.AuthorEmail=this.author.AuthorEmail;
  }

  addAuthor(){
    var val = {AuthorId:this.AuthorId,
              AuthorFullName:this.AuthorFullName,
              AuthorDateBirth:this.AuthorDateBirth,
              AuthorCity:this.AuthorCity,
              AuthorEmail:this.AuthorEmail
            };
    this.service.addAuthor(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAuthor(){
    var val = {AuthorId:this.AuthorId,
              AuthorFullName:this.AuthorFullName,
              AuthorDateBirth:this.AuthorDateBirth,
              AuthorCity:this.AuthorCity,
              AuthorEmail:this.AuthorEmail
            };
    this.service.updateAuthor(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
