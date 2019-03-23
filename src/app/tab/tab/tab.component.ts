import {Component, Input, OnInit} from '@angular/core';
import {Tab} from "./tab.model";

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
    @Input() tab: Tab;

    ngOnInit() {
    }
}
