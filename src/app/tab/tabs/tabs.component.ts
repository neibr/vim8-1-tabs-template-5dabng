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
        this.tabs.push(this.createTab(true));
        this.tabs.push(this.createTab());
        this.tabs.push(this.createTab());
    }

    private dec() {
        this.removeTabByIndex(0);
    }

    private inc() {
        this.tabs = [...this.tabs, this.createTab(!this.tabs.length)];
    }

    private createTab(active: boolean = false): Tab {
        return new Tab(
            this.tabs.length,
            active
        );
    }

    private removeTabByIndex(index: number) {
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

    private removeTabEventHandler(tab: Tab) {
        this.removeTabByIndex(this.tabs.indexOf(tab));
    }
}
