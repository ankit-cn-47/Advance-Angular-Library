import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    tabPanel: DebugElement;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuTabComponent,
        AuTabPanelComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should find only one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

});
