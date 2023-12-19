import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/services/api.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  searchTerm: string = "";
  ordersData: any[] = [];
  loading: boolean = true;
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.getorders();
  }

  getorders() {
    this.spinner.show();
    this.apiService.getorders().then(res => {
      this.spinner.hide();
      if (res.status)
        this.ordersData = res.data;
      else this.toastr.error(res.data);
      this.loading = false;
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

  clear(table: Table) {
    table.clear();
  }

  signout() {
    this.apiService.signout().then(res => {
    })
  }

}
