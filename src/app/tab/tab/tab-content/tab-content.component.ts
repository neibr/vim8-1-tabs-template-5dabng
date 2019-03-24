import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'tab-content',
    templateUrl: './tab-content.component.html',
    styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
    @Input() index: string;

    constructor() {
    }

    ngOnInit() {
    }

}
