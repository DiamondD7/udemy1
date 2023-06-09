import {Component, OnInit} from '@angular/core';

import { PaymentDetailService } from '../service/service.services';
import {NgForm} from '@angular/forms';
import { PaymentDetail } from '../service/service.model';
import { TableComponent } from '../table/table.component';

@Component({
    selector:'form-apps',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.css']
})

export class FormComponent implements OnInit{


    showPassword:boolean = false;
    constructor(public service:PaymentDetailService, private fetchService:TableComponent){

    }

    ngOnInit(): void {
    }

    onSubmit(form:NgForm){
        if(this.service.formData.paymentDetailId == 0){
            this.onPostEvent(form);
        }else{
            this.onPutEvent(form);
        }
    }


    onPostEvent(form:NgForm){
        this.service.postPaymentDetail().subscribe(
            res => {
                this.service.refreshList();
                this.fetchService.fetchAllData();
                this.resetForm(form);
            },
            err => {
                console.log(err);
            }
            
        )
    }

    onPutEvent(form:NgForm){
        this.service.putPaymentDetail(this.service.formData.paymentDetailId).subscribe(
            res => {
                this.resetForm(form);
                this.service.refreshList();
            },
            err => {
                console.log(err);
            }
        )
    }

    onShowPasswordClick(){
        if(this.showPassword == true){
            this.showPassword = false;
        }else{
            this.showPassword = true;
        }
    }

    resetForm(form:NgForm){
        form.form.reset();
        this.service.formData = new PaymentDetail();
    }

}