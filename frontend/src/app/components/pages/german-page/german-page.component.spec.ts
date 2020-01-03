import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanPageComponent } from './german-page.component';

describe('GermanPageComponent', () => {
	let component: GermanPageComponent;
	let fixture: ComponentFixture<GermanPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ GermanPageComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(GermanPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
