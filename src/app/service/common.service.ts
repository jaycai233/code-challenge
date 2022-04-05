import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  openConfirmDialog(messageValue: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxHeight: '80%',
      data: {
        message: messageValue,
        confirm: ''
      }
    });

    const result = dialogRef.afterClosed().toPromise();
    return result;
  }

  openSnackBar(message: string, action: string = 'ok'): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
