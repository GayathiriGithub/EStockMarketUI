import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {company} from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddstockService {

  constructor(private http:HttpClient) { }

  private apiPostStock:string ='http://localhost:8083/api/v1.0/market/stock/add';
  private apiGet:string =`http://localhost:8083/api/v1.0/market/company/getAll`;
  
  addStock(companymodel:company,companyCode:String):Observable<company>
   {
     //console.log(companymodel);
     //return this.http.post<company>('${this.apiPostStock}/${companyCode}',companymodel);
     return this.http.post<company>(`${this.apiPostStock}/${companyCode}`,companymodel); 

   }

   
   getAllCompany():Observable<Array<company>>
   {
     return this.http.get<Array<company>>(this.apiGet);

   }
}
