import { CommonModule } from '@angular/common';
import { Component, signal, type OnInit } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Change detection" />
    <pre>{{ dataAsSignal() | json }}</pre>
    <pre>{{ dataAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent implements OnInit {
  public dataAsSignal = signal({
    name: 'usando signal',
    age: 20,
  });
  public dataAsProperty = {
    name: 'usando Property',
    age: 33,
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.dataAsSignal.update((value) => ({
        ...value,
        name: 'Cambio dinamico',
      }));
    }, 3000);
  }
}
