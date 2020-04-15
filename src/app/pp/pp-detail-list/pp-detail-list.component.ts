import { Component, OnInit } from '@angular/core';
import { PPDetailService } from 'src/app/shared/ppdetail.service';
import { PPDetail } from 'src/app/shared/ppdetail';


@Component({
  selector: 'app-pp-detail-list',
  templateUrl: './pp-detail-list.component.html',
  styleUrls: ['./pp-detail-list.component.css']
})
export class PpDetailListComponent implements OnInit {

  constructor(public objservice:PPDetailService) { }

  ngOnInit() {
    this.objservice.refreshList();
  }
  updateform(pp:PPDetail)
  {
    this.objservice.formData=Object.assign({},pp);
  }
  onDelete(id)
  {
    if(confirm("Are you Sure to delete this record"))
    {
      this.objservice.deleteDetails(id).subscribe(res=>this.objservice.refreshList(),err=>{err});
    }
  
  }
}
