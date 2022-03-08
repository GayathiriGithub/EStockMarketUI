import { Component, OnInit } from '@angular/core';
import {company} from './company';
import {UpdatestockService} from './updatestock.service'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.css']
})
export class UpdatestockComponent implements OnInit {

  constructor(private http:HttpClient, private updateStockService:UpdatestockService,
    private router: Router) 
   { }

  ngOnInit(): void {
  }

  companyarr:Array<company>=[];
  updatemodel:company = new company();


  updateCompany(companyCode:String)
  {
    this.updateStockService.updateCompany(this.updatemodel,companyCode).subscribe(data=>
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
  this.updateStockService.getAllCompany().subscribe(data=>
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