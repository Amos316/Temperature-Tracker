import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { TemperatureMonitorService } from 'app/temperature-monitor.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';

@Component({
  selector: 'records',
  providers: [TemperatureMonitorService],
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']

})
export class RecordsComponent implements OnInit {
  tempSvc: TemperatureMonitorService = new TemperatureMonitorService();
  isValid: boolean;
  dynamic: number;
  success: string;
  message: string;
  center: string;

  constructor(private svc: TemperatureMonitorService, config: NgbProgressbarConfig, private formBuilder: FormBuilder) {
    this.createForm();
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }

  inputTemps: FormGroup;
  createForm() {
    this.inputTemps = this.formBuilder.group({
      record: ['', Validators.required],
    })
  }
  submitForm() {
    let data = {
      record: this.inputTemps.value.record
    }

  }
  ngOnInit() {
    this.inputTemps = new FormGroup({
      record: new FormControl('', [Validators.required]),
    })

  }
  onSubmit() {
    var tempInput = this.inputTemps.get('record').value;
    var arrlength = this.svc.TempRecords.length;
    var maxArrLength: number = 8;

    if (arrlength < 8) {
      this.isValid = false;    //keeps Add button active until array length is 8
      this.svc.TempRecords.push(tempInput);
      //changed 'center' type from number to string to add degree symbol and Fahrenheit
      this.center = getMedian(this.svc.TempRecords) + '\u00B0' + 'F';
      this.inputTemps.reset();     // reset form or clears form
      //setting value for progress bar
      this.dynamic = ((arrlength + 1) / maxArrLength) * 100;

      //setting properties for progress bar
      if (this.dynamic == 12.5) {
        this.success = "success";
        this.message = "Entry 1/8";
      } else if (this.dynamic == 25) {
        this.success = "success";
        this.message = "Entry 2/8";
      } else if (this.dynamic == 37.5) {
        this.success = "success";
        this.message = "Entry 3/8"
      } else if (this.dynamic == 50) {
        this.success = "success";
        this.message = "Entry 4/8"
      } else if (this.dynamic == 62.5) {
        this.success = "success";
        this.message = "Entry 5/8"
      } else if (this.dynamic == 75) {
        this.success = "success";
        this.message = "Entry 6/8"
      } else if (this.dynamic == 87.5) {
        this.success = "success";
        this.message = "Entry 7/8"
      } else if (this.dynamic == 100) {
        this.success = "danger";
        this.message = "Entry 8/8"
        this.isValid = true;
        this.inputTemps.reset();
      }
      console.log(this.dynamic);
    }
    let args = this.svc.TempRecords;
    function getMedian(args) {
      if (!args.length) { return 0 };
      let numbers = args.slice(0).sort((a, b) => a - b);
      let middle = Math.floor(numbers.length / 2);
      let isEven = numbers.length % 2 === 0;
      return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
    }
    console.log(this.svc.TempRecords)
    console.log(getMedian(this.svc.TempRecords))
  }


}









