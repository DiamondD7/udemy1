import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { PaymentDetail } from "./service.model";

@Injectable({
    providedIn:'root'
})

export class PaymentDetailService{

    constructor(private http:HttpClient){

    }

    readonly baseURL = 'https://localhost:7172/api/PaymentDetail'

    formData:PaymentDetail = new PaymentDetail();

    objLists: PaymentDetail[];

    postPaymentDetail(){
        return this.http.post(this.baseURL, this.formData)
    }

    deletePaymentDetail(id:number){
        return this.http.delete(`${this.baseURL}/${id}`)
    }


    refreshList(){
        return this.http.get(this.baseURL);
    }
}