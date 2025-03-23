import { Type } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeanComponent } from './pages/mean/mean.component';

const createRoute = <T>(component: Readonly<Type<T>>, path: string): Route => {
    return {
        component: component as Type<T>,
        path
    };
};

export const createRoutes = (): Routes => {
    const home: Readonly<Route> = createRoute(HomeComponent, '');
    const mean: Readonly<Route> = createRoute(MeanComponent, 'stack');
    return [home, mean];
};
