import { Component, OnInit } from '@angular/core';
import {company} from './company';
import {CompanyService} from './company.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private searchEventSubscription: Subscription | any;
  public myCtrl : FormGroup | any;
  constructor(private http:HttpClient, private companyService:CompanyService,
    private router: Router) 
    { }


data: {} |any;
cmodel:company = new company();

companymodel:company = new company();
specificcompanymodel:company = new company();
companyarr:Array<company>=[];
  total: number = 0;
  average: number = 0;
  max: number = 0;
  min: number = 0;

  price :Array<number>=[];
  arrayLength: number =0;
  //companymodel.companyTurnOver='';
  ngOnInit(): void
   {
     this.viewAllCompany();
     this.companymodel.companyTurnOver='';
      this.myCtrl = new FormGroup({
      myAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      mycity: new FormControl('', [Validators.required, Validators.maxLength(10)])

      }); 
     
  }


   public myError = (controlName: string, errorName: string) =>{
    return this.myCtrl.controls[controlName].hasError(errorName);
    } 

  public stockMarket= ['NSE','BSE'];
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
getaggregation(cmodel:company){

  this.average=0;
  this.total=0;
  this.min=0;
  this.max=0;

  var frdate: Date = cmodel.fromDate;
  frdate.setDate(frdate.getDate());


  var todate: Date = cmodel.toDate;
  todate.setDate(todate.getDate());
  console.log(frdate);
  console.log(todate);
 var flag :number=0
    for (var c of this.companyarr) {

      let stDate:Date = new Date(c.stockDate);
      stDate.setDate(stDate.getDate());
      console.log(stDate);

      
      if(stDate >= frdate  && stDate <= todate ){
        flag=flag+1;
        console.log("Im inside IF")
        this.price.push(c.price);
      }
      //console.log(c.price)
 }
 if(flag>0 ){
    this.arrayLength = this.price.length;
   this.total = this.price.reduce((a, b) => a + b);
   this.total = this.price.reduce((a: number, b: number) => a + b);
   this.max = this.price.reduce((a: number, b: number) => Math.max(a, b));
  this.min = this.price.reduce((a: number, b: number) => Math.min(a, b));
  this.average = (this.total / this.arrayLength);
 }
 else{
  this.total = 0;
  this.total = 0;
  this.max = 0;
 this.min = 0;
 this.average =0;
 }
}

 addCompanyDetails()
{
  this.companyService.addCompany(this.companymodel).subscribe(data=>
    {
      //this.data = JSON.stringify(data);
      this.companyarr.push(this.data);
    })
}



viewAllCompany()
{
  this.companyService.getAllCompany().subscribe(data=>
    {
      console.log(Object.values(data ));
      this.companyarr = Object.values(data );      
    },
    error=>
    {
      console.log(error);
    })
};

viewSpecificCompany(companyCode:String)
{
  this.companyService.getByCompanyCode(companyCode).subscribe(data=>
    {
      console.log(Object.values(data ));
     // this.specificcompanymodel = data;  
     this.companyarr=[];
      this.companyarr.push(data); 
     
     // this.companyarr = Object.values(data );
   // 
    },
    error=>
    {
      console.log(error);
    })
};

  deleteCompany(companyCode:String)
  {
    this.companyService.deleteCompany(companyCode).subscribe(data=>
      {
        console.log("Company is deleted!",data);
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

  
}
