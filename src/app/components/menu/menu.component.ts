import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import MENU_GROUPS from './menus.json';

interface Menu {
    readonly icon: string;
    readonly label: string;
    readonly path: string;
}

interface MenuGroup {
    readonly children: Readonly<Menu[]>;
    readonly title: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatIconModule, MatTooltipModule, RouterModule],
    selector: 'app-menu',
    styleUrl: './menu.component.css',
    templateUrl: './menu.component.html',
})
export class MenuComponent {
    protected readonly groups: Readonly<MenuGroup[]> = MENU_GROUPS;
}