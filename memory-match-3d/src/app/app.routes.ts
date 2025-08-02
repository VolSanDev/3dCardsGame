import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { Result } from './pages/result/result';

export const routes: Routes = [
    {
        path: '', component: Home,
    }, 
    {
        path: 'game', component: Game,
    },
    {
        path: 'result', component: Result,
    }, 
    {
        path: '**', redirectTo: ''
    }
];
