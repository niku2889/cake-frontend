import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiActionService } from "./apiaction.service";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(
        public router: Router,
        private httpClient: HttpClient,
        private apiActionService: ApiActionService,
        private toastr: ToastrService,
    ) { }

    async checkout(totalPrice: number, items: any[]) {
        return await this.apiActionService.postApi("checkout", {
            "totalPrice": totalPrice,
            "items": items
        });
    }

    async checkpayment(orderNo: string) {
        return await this.apiActionService.postApi("checkpayment", {
            "orderNo": orderNo
        });
    }

    async getorders() {
        return await this.apiActionService.getApi("getorders");
    }

    async signIn(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.router.navigateByUrl('/orders')
            })
            .catch((error) => {
                this.toastr.error(error.message);
            });
    }

    async signout() {
        const auth = getAuth();
        auth.signOut();
        this.router.navigateByUrl('')
    }

    isLoggedIn() {
        return getAuth().currentUser != null ? true : false;
    }


}