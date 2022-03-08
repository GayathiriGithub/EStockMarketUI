import { Injectable } from '@angular/core';
import { company } from './company';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatestockService {

  private apiUpdate:string ='http://localhost:8083/api/v1.0/market/stock/put';
  private apiGet:string =`http://localhost:8083/api/v1.0/market/company/getAll`;

  constructor(private http:HttpClient) { }



  updateCompany(companymodel:company,companyCode:String): Observable<company>
   {

     return this.http.put<company>(`${this.apiUpdate}/${companyCode}`,companymodel); 
     
   }


   getAllCompany():Observable<Array<company>>
   {
     return this.http.get<Array<company>>(this.apiGet);

   }
}
