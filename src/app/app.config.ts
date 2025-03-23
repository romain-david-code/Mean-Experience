import { ApplicationConfig, EnvironmentProviders, InjectionToken, provideExperimentalZonelessChangeDetection, Provider } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, TooltipPosition } from '@angular/material/tooltip';
import { provideRouter, Routes, ViewTransitionsFeature, withViewTransitions } from '@angular/router';
import { createRoutes } from './app.routes';

const createRouter = (): EnvironmentProviders => {
    const routes: Readonly<Routes> = createRoutes();
    const viewTransition: Readonly<ViewTransitionsFeature> = withViewTransitions();
    return provideRouter([...routes], viewTransition);
};

const createTooltip = (): Provider => {
    const provide: Readonly<InjectionToken<MatTooltipDefaultOptions>> = MAT_TOOLTIP_DEFAULT_OPTIONS;
    const position: TooltipPosition = 'after';
    const showDelay: number = 500;
    const useValue: Readonly<Partial<MatTooltipDefaultOptions>> = {
        position,
        showDelay
    };
    return {
        provide,
        useValue
    };
};

const createProviders = (): (EnvironmentProviders | Provider)[] => {
    const zoneless: Readonly<EnvironmentProviders> = provideExperimentalZonelessChangeDetection();
    const router: Readonly<EnvironmentProviders> = createRouter();
    const tooltip: Readonly<Provider> = createTooltip();
    return [router, tooltip as Provider, zoneless];
};

export const createConfig = (): ApplicationConfig => {
    const providers: Readonly<(EnvironmentProviders | Provider)[]> = createProviders();
    return { providers: providers as (EnvironmentProviders | Provider)[] };
};