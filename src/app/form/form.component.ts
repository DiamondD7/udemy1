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

    constructor(public service:PaymentDetailService, private fetchService:TableComponent){

    }

    ngOnInit(): void {
    }

    onSubmit(form:NgForm){
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


    resetForm(form:NgForm){
        form.form.reset();
        this.service.formData = new PaymentDetail();
    }

}