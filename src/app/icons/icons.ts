import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import ICONS from './icons.json';

type Name = keyof typeof ICONS;

type Svg = typeof ICONS[Name];

const getNames = (): Name[] => {
    return Object.keys(ICONS) as Name[];
};

const getIcon = (name: Name): Svg => {
    return ICONS[name];
};

const sanitizeBy = (sanitizer: Readonly<DomSanitizer>): (name: Name) => SafeHtml => {
    const sanitize: (name: Name) => SafeHtml = (name: Name): SafeHtml => {
        const svg: Svg = getIcon(name);
        return sanitizer.bypassSecurityTrustHtml(svg);
    };
    return sanitize;
};

const loadWith = (registry: Readonly<MatIconRegistry>, sanitize: (name: Name) => SafeHtml): (name: Name) => void => {
    const load: (name: Name) => void = (name: Name): void => {
        const icon: Readonly<SafeHtml> = sanitize(name);
        registry.addSvgIconLiteral(name, icon);
    };
    return load;
};

export const loadLucidIcons = (registry: Readonly<MatIconRegistry>, sanitizer: Readonly<DomSanitizer>): void => {
    const sanitize: (name: Name) => SafeHtml = sanitizeBy(sanitizer);
    const load: (name: Name) => void = loadWith(registry, sanitize);
    getNames().forEach(load);
};