import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTeamComponent } from './create-new-team.component';

describe('CreateNewTeamComponent', () => {
  let component: CreateNewTeamComponent;
  let fixture: ComponentFixture<CreateNewTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
