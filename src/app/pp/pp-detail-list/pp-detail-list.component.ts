import { Component, OnInit } from '@angular/core';
import { PPDetailService } from 'src/app/shared/ppdetail.service';


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

}
