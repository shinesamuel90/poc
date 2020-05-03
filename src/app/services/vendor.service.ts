import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendorModel } from '../models/IVendorModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private _url = "/assets/data/mockVendorData.json";

  constructor(private http: HttpClient) { }
  getVendorsList(): Observable<VendorModel[]> {
    return this.http.get<VendorModel[]>(this._url);
  }
}
