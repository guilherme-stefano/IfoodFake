
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { HttpProvider } from "../../providers/http/http";

export abstract class ProviderBase<T> {

    constructor(
        public url:string,
        public http: HttpProvider ){

        }
    
    get(): Promise<HttpResultModel>{
        return this.http.get(this.url);
    }

    getById(uid: string): Promise<HttpResultModel>{
        return this.http.get(`${this.url}/${uid}`);
    }

    post(model: T): Promise<HttpResultModel>{
        return this.http.post(this.url, model)
    }

    put(uid: string, model: T): Promise<HttpResultModel>{
        return this.http.put(`${this.url}/${uid}`, model);
    }

    delete(uid: string): Promise<HttpResultModel>{
        return this.http.delete(`${this.url}/${uid}`);
    }
}