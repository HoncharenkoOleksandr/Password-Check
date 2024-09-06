import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const MINIMUM_LENGTH = 8;

enum PASSWORD_STRANGTH {
  STRONG = 'strong',
  MEDIUM = 'medium',
  EASY = 'easy',
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class PasswordInputComponent {
  public password: string = '';
  public strength: string = '';
  public isLessThenMinLenghth = false;

  public checkPasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return PASSWORD_STRANGTH.STRONG;
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return PASSWORD_STRANGTH.MEDIUM;
    } else {
      return PASSWORD_STRANGTH.EASY;
    }
  }

  public onPasswordInput(): void {
    this.strength = this.checkPasswordStrength(this.password);
    if (this.password?.length < MINIMUM_LENGTH) {
      this.isLessThenMinLenghth = true;
    } else {
      this.isLessThenMinLenghth = false;
    }
  }
}
