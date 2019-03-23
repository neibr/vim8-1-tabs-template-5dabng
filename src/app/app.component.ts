import {Component} from '@angular/core';
import {Tab} from "./tab/tab/tab.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public tabs: Tab[] = [
        this.createNewTab(1, true),
        this.createNewTab(2),
        this.createNewTab(3)
    ];

    public dec() {
        this.removeTab(0);
        //this.tabs = this.tabs.slice(0, -1);
    }

    public inc() {
        this.tabs.forEach(obj => {
            console.log(obj);
        });

        this.tabs = [...this.tabs, this.createNewTab(this.tabs.length + 1)];
    }

    private createNewTab(index, active = false) {
        return new Tab(
            index,
            'Title of tab ' + index,
            'Content of tab ' + index,
             active
        );
    }

    private removeTab(index) {
        if (index in this.tabs) {
            if (this.tabs[index].active && this.tabs.length) {
                this.tabs[0].active = true;
            }

            this.tabs = this.tabs.slice(index, -1);
        }
    }
}
