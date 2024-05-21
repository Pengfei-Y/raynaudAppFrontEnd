import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

    constructor(public router: Router,private http: HttpService,private toastController: ToastController,public route: ActivatedRoute) { }
    ngOnInit() {
    }
    username = ''
    async login() {
        function generateUUID() {
            var d = new Date().getTime(); //Timestamp
            var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16; //random number between 0 and 16
                if (d > 0) { //Use timestamp until depleted
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else { //Use microseconds since page-load if supported
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }

        var uuid = generateUUID();
        this.http.register({
            username: this.username,
            deviceUuid: uuid
        }).subscribe(async (res:any) => {
            if(res.code==200){
                localStorage.setItem('user', JSON.stringify({ username: this.username, deviceUuid: uuid }))
                localStorage.setItem('participantId', res.data.participantId)
                const toast = await this.toastController.create({
                      message: 'register successfully',
                      duration: 1500,
                      position: 'top',
                      color: 'success'
                    })
                    await toast.present();
                this.router.navigate(['/'])
            }else{
                const toast = await this.toastController.create({
                      message: res.msg,
                      duration: 1500,
                      position: 'top',
                      color:'danger'
                    })
                    await toast.present();

            }

        })
    }
}
