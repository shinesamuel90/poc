import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorModel } from 'src/app/models/IVendorModel';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  public vendorsList=[];
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendorService.getVendorsList().subscribe(data => {
      this.vendorsList = data;
      console.log("",data);
    });
    console.log("test data fetched ::",this.vendorsList);
  }

}
