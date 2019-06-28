import {Component, ViewEncapsulation} from '@angular/core';
import {baseItemList, BaseItem, CompletedItem, tier1ItemList, tier2ItemList, tier3ItemList} from './item-defs';
import {MatButtonToggleChange} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  baseItems: BaseItem[];
  tiers: CompletedItem[][];
  selectedItems: string[];

  constructor() {
    this.baseItems = baseItemList;
    this.tiers = [];
    this.tiers[0] = tier1ItemList;
    this.tiers[1] = tier2ItemList;
    this.tiers[2] = tier3ItemList;
    this.selectedItems = [];
  }

  baseItemChange(ev: MatButtonToggleChange) {
    this.selectedItems = ev.value;
  }

  itemSelected(item: BaseItem): boolean {
    return this.selectedItems.includes(item.id);
  }

  hasAtLeastOneComponent(item: CompletedItem): boolean {
    return this.itemSelected(item.in1) || this.itemSelected(item.in2);
  }
}
