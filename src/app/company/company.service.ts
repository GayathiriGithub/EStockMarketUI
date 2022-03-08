import { Injectable } from '@angular/core';
import { company } from './company';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

 

  constructor(private http:HttpClient)
   { }

   books: company[] |any;

   private apiGet:string =`http://localhost:8083/api/v1.0/market/company/getAll`;
   private apiPost:string =`http://localhost:8083/api/v1.0/market/company/register`;
   private apiDel:string ='http://localhost:8083/api/v1.0/market/company/delete';
   private apiGetByCode:string ='http://localhost:8083/api/v1.0/market/company/info';

   addCompany(companymodel:company):Observable<company>
   {
     console.log(companymodel);
     return this.http.post<company>(this.apiPost,companymodel);
      
   }



   getByCompanyCode(companyCode:String):Observable<company>
   {
     return this.http.get<company>(`${this.apiGetByCode}/${companyCode}`);

   }

   deleteCompany(companyCode:String): Observable<company>
   {
     return this.http.delete<company>(`${this.apiDel}/${companyCode}`);
      
     
   }

   getAllCompany():Observable<Array<company>>
   {
     return this.http.get<Array<company>>(this.apiGet);

   }
}
