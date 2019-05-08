import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './customer';
import { Router } from '@angular/router';
import { CustomerServivce } from './customer.service';

@Component({
    templateUrl:"./customer-registration.component.html",
    selector:"customer-registration"
})
export class CustomerRegistrationComponent implements OnInit{

    customer:Customer;

    constructor(private customerService:CustomerServivce){}
    private router:Router

    ngOnInit(){
        this.customer=new Customer();
        this.customer.address=new Address();
    }

    registerNewCustomer(){
        console.log(this.customer);
        this.customerService.registerNewCustomer(this.customer).subscribe((data)=>{
            console.log("success");
            if(data != null){
                alert("Registration is Successful");
                this.router.navigate(["/login"]);
            }
        })
    }

}