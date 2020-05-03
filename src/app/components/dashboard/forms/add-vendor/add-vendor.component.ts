import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/models/IVendorModel';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  public vendorModel: VendorModel = { name: "", email: "", address: "", domain: "", logoUrl: "", merchantKey: "", phone: "",
   planId: 0, themeLogoUrl: "", uniqueKey: "" ,websiteUrl:"",logoImg:"",themeColor:""};

  constructor() { }

  ngOnInit(): void {
  }
  submitAddVendorForm() {
    alert(JSON.stringify(this.vendorModel));
  }
}
