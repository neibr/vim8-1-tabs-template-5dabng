import {Component, Input} from '@angular/core';
import {Tab} from "../tab/tab.model";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
    @Input() tabs: Tab[] = [];

    constructor() {
        this.tabs.push(this.createNewTab(true));
        this.tabs.push(this.createNewTab());
        this.tabs.push(this.createNewTab());
    }

    private dec() {
        this.removeTabByIndex(0);
    }

    private inc() {
        this.tabs.forEach(obj => {
            console.log(obj);
        });

        this.tabs = [...this.tabs, this.createNewTab(!this.tabs.length)];
    }

    private createNewTab(active = false) {
        let index = this.tabs.length;

        return new Tab(
            index,
            active
        );
    }

    private removeTabByIndex(index) {
        if (!(index in this.tabs)) {
            return;
        }

        let tabs = this.tabs;
        let isTabActive = this.tabs[index].active;

        tabs.splice(index, 1);

        if (isTabActive && tabs.length) {
            tabs[0].active = true;
        }

        this.tabs = tabs;
    }

    private removeTabEventHandler(tab) {
        this.removeTabByIndex(this.tabs.indexOf(tab));
    }

}
