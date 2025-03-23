import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { loadLucidIcons } from './icons/icons';

interface Service {
    readonly registry: Readonly<MatIconRegistry>;
    readonly sanitizer: Readonly<DomSanitizer>;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ContactComponent,
        MatSidenavModule,
        MenuComponent,
        RouterOutlet,
        ToolbarComponent
    ],
    selector: 'app-root',
    styleUrl: './app.component.css',
    templateUrl: './app.component.html',
})
export class AppComponent {
    private service: Readonly<Service> = {
        registry: inject(MatIconRegistry),
        sanitizer: inject(DomSanitizer)
    };

    constructor() {
        loadLucidIcons(this.service.registry, this.service.sanitizer);
    }
}
