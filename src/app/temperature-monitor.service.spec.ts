import { TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitorService]
    });
  });

  it('should be created', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeTruthy();
  }));
  it('should have array', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service.TempRecords).toEqual([]);
  }))
  it('should have a get array method to return array', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service.getTempRecords).toBeDefined();
  }))

  it('should have a get method to return array', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeDefined();
  }))
    
});
