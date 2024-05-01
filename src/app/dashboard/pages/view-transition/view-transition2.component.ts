import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View transition  2"></app-title>

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="pic"
        width="200"
        height="200"
        style="view-transition-name: hero1"
      />

      <div
        class=" fixed bottom-16 right-10  bg-indigo-400  w-40 h-40 rounded-md"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent {}
