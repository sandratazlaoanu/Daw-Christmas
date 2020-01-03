import { Routes, RouterModule } from '@angular/router';
import { GermanPageComponent } from './components/pages/german-page/german-page.component';
import { RomanianPageComponent } from './components/pages/romanian-page/romanian-page.component';
import { FinnishPageComponent } from './components/pages/finnish-page/finnish-page.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
	{ path: '', component: WelcomePageComponent }, //, canActivate: [AuthGuard] },
	{ path: 'german', component: GermanPageComponent },
	{ path: 'finnish', component: FinnishPageComponent },
	{ path: 'romanian', component: RomanianPageComponent }
];
