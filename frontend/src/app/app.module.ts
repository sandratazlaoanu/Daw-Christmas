import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';
import { ChristmasPageComponent } from './components/pages/christmas-page/christmas-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AddGiftComponent } from './components/add-gift/add-gift.component';

@NgModule({
	declarations: [ AppComponent, ChristmasPageComponent, AddGiftComponent ],
	imports: [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), AppRoutingModule ],
	providers: [ AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
