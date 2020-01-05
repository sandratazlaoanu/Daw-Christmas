import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasPageComponent } from './christmas-page.component';

describe('ChristmasPageComponent', () => {
	let component: ChristmasPageComponent;
	let fixture: ComponentFixture<ChristmasPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ ChristmasPageComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ChristmasPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
