import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksServices } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// no injectable, use providers
// bootstrapApplication(AppComponent, {
//     providers: [TasksServices],
// }).catch((err) => console.error(err));

export const TasksServiceToken = new InjectionToken<TasksServices>('tasks-service-token');

bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksServices }],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
