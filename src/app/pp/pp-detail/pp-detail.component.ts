import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { PPDetailService } from 'src/app/shared/ppdetail.service';

@Component({
  selector: 'app-pp-detail',
  templateUrl: './pp-detail.component.html',
  styleUrls: ['./pp-detail.component.css']
})
export class PpDetailComponent implements OnInit {


  constructor(private objservice:PPDetailService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {  
  if(form!=null)
  {form.form.reset();}
  else{
    this.objservice.formData={PId:0,PHolderName:"",PPNumber:"",PPExp:"",PPOCode:""}
  }}
  onSubmit(form:NgForm)
  {
    if(this.objservice.formData.PId==0)
    this.insertRecord(form);
    else this.updateRecord(form);

  }
  insertRecord(form:NgForm)
  {
    this.objservice.postPPDetails().subscribe(res=>
      {this.resetForm(form);
      this.objservice.refreshList();
    alert('Record Inserted Successfully');
  },
  err=>{alert('Error'+err);})
  }
  updateRecord(form:NgForm)
  {
    this.objservice.putPPDetails().subscribe(res=>
      {this.resetForm(form);
      this.objservice.refreshList();
    alert('Record updated Successfully');},
    err=>{alert('Error'+err);})
  }
  }

