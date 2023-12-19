import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ApiActionService } from "./apiaction.service";
@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(
        public router: Router,
        private httpClient: HttpClient,
        private apiActionService: ApiActionService
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
}