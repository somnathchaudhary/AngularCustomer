import { Injectable } from '@angular/core';
import { PPDetail } from './ppdetail';
import {Http} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class PPDetailService {
  readonly ourapiUrl='https://localhost:44387/api';
formData:PPDetail;
list:PPDetail[];
  constructor(private objhttp:Http) { }
  postPPDetails()
  {
    return this.objhttp.post(this.ourapiUrl+'/PDetails/',this.formData);
  }
  putPPDetails()
  {
    return this.objhttp.post(this.ourapiUrl+'/PDetails/'+this.formData.PId,this.formData);
  }
  deleteDetails()
  {
    return this.objhttp.delete(this.ourapiUrl +'/PDetails/'+this.formData.PId);
  }
  refreshList()
  {
    this.objhttp.get(this.ourapiUrl+'/PDetails/').subscribe(values=>{this.list=values.json() as PPDetail[]});
  }

}
