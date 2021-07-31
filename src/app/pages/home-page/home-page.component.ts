import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeIconDialog } from 'src/app/components/change-icon/change-icon.dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  selectIcon(item = { icon: 'user' }): void {
    const changeIcon = this.dialog.open(ChangeIconDialog, { width: '100%', height: '90%', data: { icon: item.icon } });

    changeIcon.afterClosed().subscribe(result => {
      item.icon = result;
    });
  }
}
