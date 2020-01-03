import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';
import { RomanianPageComponent } from './components/pages/romanian-page/romanian-page.component';
import { GermanPageComponent } from './components/pages/german-page/german-page.component';
import { FinnishPageComponent } from './components/pages/finnish-page/finnish-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ListDetailModalComponent } from './components/list-detail-modal/list-detail-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';

@NgModule({
	declarations: [
		AppComponent,
		ListDetailComponent,
		RomanianPageComponent,
		GermanPageComponent,
		FinnishPageComponent,
		UserDetailComponent,
		ListDetailModalComponent,
		WelcomePageComponent
	],
	imports: [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), AppRoutingModule ],
	providers: [ AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
