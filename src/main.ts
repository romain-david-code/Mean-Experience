import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createConfig } from './app/app.config';

const config: Readonly<ApplicationConfig> = createConfig();
bootstrapApplication(AppComponent, config).catch(console.error);
