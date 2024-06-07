import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpService } from '../service/http.service';
import * as echarts from 'echarts';
// import moment from 'moment';
import moment from 'moment-timezone';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {
    constructor(private http: HttpService) { }
    ionViewDidEnter() {
        const attackDate = moment().utc().format('YYYY-MM-DD')
        this.http.getRecordsLast7({ participantId: localStorage.getItem('participantId'), attackDate })
            .subscribe((res:any)=>{
                const records = Object.values(res.data)
                let data = [];
                for(let i=0;i<7;i++){
                    const d = moment().utc().subtract(6-i, 'days').format('M-DD');
                    data.push(d);
                }
                var myChart = echarts.init(document.getElementById('main'));
                
                myChart.setOption({
                    title: {
                        text: 'the daily number of records'
                    },
                    tooltip: {},
                    xAxis: {
                        data
                    },
                    yAxis: {},
                    series: [
                        {
                            name: 'count',
                            type: 'bar',
                            data: records
                        }
                    ]
                });
            })
    }
}
