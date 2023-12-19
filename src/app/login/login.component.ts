import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ordersData: any[] = [];
  loading: boolean = true;
  email: string = "";
  password: string = "";
  constructor(private apiService: ApiService,
    private toastr: ToastrService,
    public router: Router,
  ) {

  }

  ngOnInit() {
  }

  signIn() {
    if (this.email == "")
      this.toastr.error("Email is required");
    else if (this.email != "admin@cherans.com")
      this.toastr.error("Invalid email");
    else if (this.password == "")
      this.toastr.error("Password is required");
    else {
      this.apiService.signIn(this.email, this.password).then(res => {
      })
    }
  }
}
