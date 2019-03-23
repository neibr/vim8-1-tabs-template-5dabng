import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabTitleComponent } from './tab/tab-title/tab-title.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';

@NgModule({
  declarations: [TabComponent, TabsComponent, TabTitleComponent, TabContentComponent],
  imports: [
    CommonModule
  ]
})
export class TabModule { }
