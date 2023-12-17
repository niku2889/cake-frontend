import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {
  selectedOrderId: any;
  orderData: any;
  todaysDate = new Date();
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(para => {
      if (para['orderNo']) {
        this.selectedOrderId = para['orderNo'];
        this.checkpayment();
      }
    });
  }


  ngOnInit(): void {
  }

  checkpayment() {
    this.spinner.show();
    this.apiService.checkpayment(this.selectedOrderId).then(res => {
      this.spinner.hide();
      if (res.status)
        this.orderData = res.data;
      else this.toastr.error(res.data);
    })
  }

  getDate(date: any) {
    return new Date(date * 1000).toUTCString() || null;
  }

  getPickupDate(data: any) {
    return data ? data.dropdown.options.filter((a: any) => a.value == data.dropdown.value)[0].label : "";
  }

  getPickupTime(data: any) {
    return data ? data.dropdown.options.filter((a: any) => a.value == data.dropdown.value)[0].label : "";
  }
}
