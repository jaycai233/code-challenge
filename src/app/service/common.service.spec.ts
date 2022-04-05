import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialog
} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MatSnackBarModule],
      providers: [
        CommonService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('open mat dialog ', () => {
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({
      afterClosed: of({}),
      close: null
    });
    dialogRefSpyObj.componentInstance = { body: '' };
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(
      dialogRefSpyObj
    );
    service.openConfirmDialog('test');
    expect(dialogSpy).toHaveBeenCalled();
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });

  it('open snackbar ', () => {
    const spy = spyOn(service, 'openSnackBar');
    service.openSnackBar('Hello', 'ok');
    expect(spy).toHaveBeenCalled();
  });
});
