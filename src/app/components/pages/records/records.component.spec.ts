import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsComponent } from './records.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { JumbotronComponent } from '../../common/jumbotron/jumbotron.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Button } from 'selenium-webdriver';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RecordsComponent, JumbotronComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;

  });
  afterEach(() => {
    document.body.removeChild(el);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have label ', () => {
    de = fixture.debugElement.query(By.css('label'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Temperature Record: ');
  })

  it('should have input ', () => {
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
    expect(el.attributes).toBeDefined();
  })

  it('should have button ', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
    expect(el.attributes).toBeDefined();
  })

  it('should have Progress Bar ', () => {
    de = fixture.debugElement.query(By.css('ngbProgressBar'));
    el = de.nativeElement;
    expect(el.attributes).toBeDefined();
  })

  it('should have button with Popover feature ', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
    expect(el.textContent).toMatch('Get Median');
  })
});
