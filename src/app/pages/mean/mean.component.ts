import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatIconModule],
    styleUrl: './mean.component.css',
    templateUrl: './mean.component.html'
})
export class MeanComponent { }