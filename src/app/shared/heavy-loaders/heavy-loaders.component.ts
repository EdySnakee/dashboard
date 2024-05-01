import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Component
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Cargado');
  }
}
