import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  @Input() totalMoney: number;

  ngOnInit() {
    console.log('OnInit cua FooterComponent');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit cua FooterComponent');
  }
}
