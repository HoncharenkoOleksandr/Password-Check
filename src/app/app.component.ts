import { Component } from '@angular/core';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PasswordInputComponent],
})
export class AppComponent {}
