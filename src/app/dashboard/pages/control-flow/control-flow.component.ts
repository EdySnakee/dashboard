import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frames = signal(['Angular', 'Vue', 'Svelte', 'Quick']);
  public frames2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
