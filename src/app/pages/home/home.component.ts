import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatIconModule],
    styleUrl: './home.component.css',
    templateUrl: './home.component.html',
})
export class HomeComponent {
}