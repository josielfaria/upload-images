import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as icons from '../../shared/all-icons-material-complete.json';

@Component({
  selector: 'app-change-icon',
  templateUrl: './change-icon.dialog.html',
  styleUrls: ['./change-icon.dialog.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ChangeIconDialog {

  // tslint:disable-next-line: no-string-literal
  listIcons = icons['default'].icons;
  // tslint:disable-next-line: no-string-literal
  categories = icons['default'].categories;

  categoryView = 'all';

  constructor(
    public dialogRef: MatDialogRef<ChangeIconDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { icon: string }
  ) { }

  filterListIcons(category: string): void {
    const filteredIcons = category === 'all'
      ? this.listIcons
      : this.listIcons.filter(icon => icon.categories.indexOf(category) === 0);
    return filteredIcons;
  }

  trackBy(index: string, item): string {
    return item.name;
  }

  close(): void {
    this.dialogRef.close();
  }
}
