import {Component, OnInit} from '@angular/core';
import { PaymentDetailService } from '../service/service.services';

@Component({
    selector:'table-app',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.css']
})

export class TableComponent implements OnInit{

    data:any[];

    constructor(public service:PaymentDetailService){

    }
    ngOnInit() {
        this.fetchAllData();
    }

    deleteData(id:number){
        this.service.deletePaymentDetail(id).subscribe(
            (res) => {
                this.fetchAllData();
            },
            (err) => {
                console.log(err);
            }
        )
        
    }


    fetchAllData(){
        this.service.refreshList().subscribe((data:any) => {
            this.data = data;
        })
    }
}