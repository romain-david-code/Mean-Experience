import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule],
    selector: 'app-toolbar',
    styleUrl: './toolbar.component.css',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    public mainLabel: InputSignal<string> = input.required();

    public menuClick: OutputEmitterRef<void> = output();

    protected handleMenuClick = (): void => {
        this.menuClick.emit();
    };
}