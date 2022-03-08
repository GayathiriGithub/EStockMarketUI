import { Component, OnInit } from '@angular/core';
import {company} from './company';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {AddstockService} from './addstock.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  constructor(private http:HttpClient, private addStockService:AddstockService) 
    { }

  ngOnInit(): void {
  }

  addmodel:company = new company();
  companyarr:Array<company>=[];

  addStock(companyCode:String)
{
  
  this.addStockService.addStock(this.addmodel,companyCode).subscribe(data=>
    {
      let companyIndex = this.companyarr.findIndex(c=>c.companyCode === companyCode);
      console.log(companyIndex);
      this.companyarr.splice(companyIndex,1);
      this.viewAllCompany();
    },
    error=>
    {
      console.log("error");
    }
    
    )
}


viewAllCompany()
{
  this.addStockService.getAllCompany().subscribe(data=>
    {
      console.log(Object.values(data ));
      this.companyarr = Object.values(data );      
    },
    error=>
    {
      console.log(error);
    })
};

}
 