import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersComponent } from '@shared/heavy-loaders/heavy-loaders.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent {}
