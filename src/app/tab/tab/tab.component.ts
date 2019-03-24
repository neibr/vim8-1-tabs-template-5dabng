import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tab} from "./tab.model";

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {
    @Output() removeTabEvent: EventEmitter<Tab> = new EventEmitter();
    @Input() tab: Tab;

    removeTab(tab: Tab) {
        this.removeTabEvent.emit(tab);
    }
}
