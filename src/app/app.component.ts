import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './user/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gm';

  constructor(public dialog: MatDialog){
    
  }
  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}


