import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CustomerServivce{
    baseUrl = "http://10.246.93.33:8000/";
    constructor(private http:HttpClient){}

        registerNewCustomer(customer:Customer):Observable<Customer>{
           return this.http.post<Customer>(this.baseUrl+"customers",customer);
        }
        // registerNewCustomer(customer:Customer): Observable<Customer>{
        //     return this.http.post<Customer>(this.baseUrl+"customers",customer);
        // }
    }
