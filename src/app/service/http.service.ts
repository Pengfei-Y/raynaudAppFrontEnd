import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }
    url = 'http://8.142.171.141:8088/renault';
    
    // 注册接口
    register(data: any) {
        return this.http.post('/renault/participant/save', data );
    }

    addAttack(data: any){
        return this.http.post('/renault/attack/save', data );
    }
    editAttack(data: any){
        return this.http.post('/renault/attack/edit', data );
    }
    
    getRecords(data: any) {
        return this.http.get('/renault/attack/findByDate', { params: data });
    }

    getRecordsLast7(data: any) {
        return this.http.get('/renault/attack/findSevenDay', { params: data });
    }
}
