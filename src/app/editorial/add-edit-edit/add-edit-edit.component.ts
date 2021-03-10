import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-edit',
  templateUrl: './add-edit-edit.component.html',
  styleUrls: ['./add-edit-edit.component.css']
})
export class AddEditEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() edit:any;
  EditorialId:string ="";
  EditorialName:string = "";
  EditorialAdress:string ="";
  EditorialPhone:string ="";
  EditorialEmail:string ="";
  EditorialMaxBook:string ="";

  ngOnInit(): void {
    this.EditorialId=this.edit.EditorialId;
    this.EditorialName=this.edit.EditorialName;
    this.EditorialAdress=this.edit.EditorialAdress;
    this.EditorialPhone=this.edit.EditorialPhone;
    this.EditorialEmail=this.edit.EditorialEmail;
    this.EditorialMaxBook=this.edit.EditorialMaxBook;
  }

  addEditorial(){
    var val = {EditorialId:this.EditorialId,
              EditorialName:this.EditorialName,
              EditorialAdress:this.EditorialAdress,
              EditorialPhone:this.EditorialPhone,
              EditorialEmail:this.EditorialEmail,
              EditorialMaxBook:this.EditorialMaxBook
            };
    this.service.addEditorial(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEditorial(){
    var val = {EditorialId:this.EditorialId,
      EditorialName:this.EditorialName,
      EditorialAdress:this.EditorialAdress,
      EditorialPhone:this.EditorialPhone,
      EditorialEmail:this.EditorialEmail,
      EditorialMaxBook:this.EditorialMaxBook
    };
    this.service.updateEditorial(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
