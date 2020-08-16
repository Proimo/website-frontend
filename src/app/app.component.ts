import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private http: HttpClient) {
    }

    async ngOnInit() {
        const response = await this.http.get('/api/announcements/').toPromise();
        console.log(response);
    }
}

interface Setting {
    id?: string;
    slug: string;
    value?: string;
    image?: string;
}
