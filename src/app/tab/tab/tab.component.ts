import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tab} from "./tab.model";

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
    @Output() removeTabEvent = new EventEmitter()
    @Input() tab: Tab;

    ngOnInit() {
    }

    removeTab(tab) {
        console.log(tab);
        this.removeTabEvent.emit(tab);
    }
}
