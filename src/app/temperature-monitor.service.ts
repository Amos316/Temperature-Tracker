import { Injectable } from '@angular/core';

@Injectable()

export class TemperatureMonitorService {
  TempRecords: number[] = new Array<number>();

  getTempRecords() { return this.TempRecords }

  constructor() { }

  // addRecord(record: number){
  //   this.TempRecords.push(record);
  // }
}
