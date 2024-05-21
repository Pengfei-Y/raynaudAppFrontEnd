import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons";
import { addCircleOutline } from "ionicons/icons";
import moment from 'moment';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page {
    // "inside"/"outside
    constructor(private http: HttpService, private toastController: ToastController) {
        addIcons({ addCircleOutline })
    }
    records = [
        {
            "attackId": "e3c5c205-5662-4a71-af00-d64428f27620",
            "participantId": "ae30d024-8eb3-4424-b232-d9fd9c853ce4",
            "attackDate": "2024-05-17T11:20:50",
            "location": "outside"
        }
    ]
    user = JSON.parse(localStorage.getItem('user')||'');
    isModalOpen = false;
    selectRecord:any = {};
    setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
    }
    edit(data:any){
        this.setOpen(true)
        this.selectRecord = { ...data, attackDate: data.attackDate.replace(' ','T') };
    }
    add(){
        this.selectRecord = {};
        this.setOpen(true)
    }
    post(){
        const attackDate = moment(this.selectRecord.attackDate).format('yyyy-M-DD HH:mm');
        if (this.selectRecord.attackId){
            this.http.editAttack({ ...this.selectRecord, participantId: localStorage.getItem('participantId'), attackDate })
                .subscribe( async (res)=>{
                    const toast = await this.toastController.create({
                        message: 'edit successfully',
                        duration: 1500,
                        position: 'top',
                        color: 'success'
                    })
                    await toast.present();
                    this.setOpen(false)
                    this.getRecords();
                    this.selectRecord = {};
                })
        }else{
            this.http.addAttack({ ...this.selectRecord, participantId: localStorage.getItem('participantId'), attackDate })
                .subscribe( async (res)=>{
                    const toast = await this.toastController.create({
                        message: 'add successfully',
                        duration: 1500,
                        position: 'top',
                        color: 'success'
                    })
                    await toast.present();
                    this.setOpen(false)
                    this.getRecords();
                    this.selectRecord = {};
                })
        }
    }
    ngOnInit() {
        this.getRecords();
    }
    getRecords() {
        const attackDate = moment().format('yyyy-M-DD')
        this.http.getRecords({ participantId: localStorage.getItem('participantId'), attackDate })
            .subscribe((res: any) => {
                console.log(res);
                this.records = res.data
            })
    }
}
