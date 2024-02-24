import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>change-detection works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent implements OnInit {

  ngOnInit(): void { }

}
