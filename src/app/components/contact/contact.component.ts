import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule, MatIconModule, MatTooltipModule, RouterModule],
    selector: 'app-contact',
    styleUrl: './contact.component.css',
    templateUrl: './contact.component.html',
})
export class ContactComponent {
}