import { Component, OnInit, Input } from '@angular/core';
import { TagContentType } from '@angular/compiler';

@Component({
  selector: 'au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  selected = false;

  constructor() { }

  ngOnInit() {
  }

}
