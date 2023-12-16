import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: "root"
})
export class ApiActionService {
    baseURI = environment.apiUrl;

    constructor() {
        axios.defaults.baseURL = this.baseURI;
    }

    getApi = async (url: string, params?: any) => {
        const config = {
            params: params,
            headers: {
                //Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data }: { data: any } = await axios.get(url, config);
            return data;
        } catch (error) {
            return { error: error };
        }
    };

    postApi = async (url: string, req: any, params?: any) => {
        const config = {
            ...params,
            headers: {
                //Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data }: { data: any } = await axios.post(url, req, config);
            return data;
        } catch (error) {
            return { error: error };
        }
    };

    patchApi = async (url: string, req: any, params?: any) => {
        const config = {
            ...params,
            headers: {
                //Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data } = await axios.patch(url, req, config);
            return data;
        } catch (error) {
            return { error: error };
        }
    };

    putApi = async (url: string, req: any, params?: any) => {
        const config = {
            ...params,
            headers: {
                //Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data } = await axios.put(url, req, config);
            return data;
        } catch (error) {
            return { error: error };
        }
    };

    deleteApi = async (url: string, params?: any) => {
        const config = {
            data: params,
            headers: {
                //Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data } = await axios.delete(url, config);
            return data;
        } catch (error) {
            return { error: error };
        }
    };
}
