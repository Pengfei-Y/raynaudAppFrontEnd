import { Injectable } from '@angular/core';
export interface User {
    userId: string;
    avatar: string;
    password: string;
    nickName: string;
    userName: string;
    userSignature: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }
    baseurl = 'http://8.142.171.141:8080/school-news/user/img?path='
    user:User = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null
    setUser(u:User){
        console.log(u);
        this.user = u
    }
    getUser(){
        
        return this.user
    }
}
