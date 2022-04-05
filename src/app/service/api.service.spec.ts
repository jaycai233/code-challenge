import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getDataList and return array of products', async () => {
    const result = await service.getDataList(0, 10).toPromise();
    expect(result.data).toEqual(service.data);
  });

  it('should call getDataById and return product with the ID', () => {
    service.getDataById('1').subscribe(res => {
      expect(res).toEqual(service.data.filter(item => item.id === '1'));
    });
  });

  it('should call updateData and return status 200', () => {
    service
      .updateData('1', {
        name: 'product10',
        price: 12,
        type: 'food',
        active: true
      })
      .subscribe(res => {
        expect(res.status).toEqual(200);
      });
  });

  it('should call addNewData and return the status', () => {
    service
      .addNewData({
        name: 'product10',
        price: 12,
        type: 'food',
        active: true
      })
      .subscribe(res => {
        expect(res.status).toEqual(200);
      });
  });

  it('should call deleteData and return the status', () => {
    service.deleteData('1').subscribe(res => {
      expect(res.status).toEqual(200);
    });
  });
});
