import {Component, Input, OnInit} from '@angular/core';
import {Tab} from "../tab/tab.model";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
    @Input() tabs: Tab[] = [];

    public removeTab(index) {
        this.tabs.forEach(obj => {
            console.log(obj);
        });
    }

    ngOnInit() {
    }
}
