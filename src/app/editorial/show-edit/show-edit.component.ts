import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  EditorialList:any=[];

  ModalTitle: string="";

  ActivateAddEditEditComp:boolean=false;

  edit:any;

  ngOnInit(): void {
    this.refreshEditList();
  }
  addClick(){
    this.edit={
      EditorialId:0,
      EditorialName:"",
      EditorialAdress:"",
      EditorialPhone:"",
      EditorialEmail:"",
      EditorialMaxBook:""
    }
    this.ModalTitle="Add Editorial";
    this.ActivateAddEditEditComp=true;
  }

  editClick(item: any){
    this.edit=item;
    this.ModalTitle="Edit Editorial";
    this.ActivateAddEditEditComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteEditorial(item.EditorialId).subscribe(data=>{
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
    this.service.getEditList().subscribe(data=>{
      this.EditorialList=data;
    }

    )
  }

}
