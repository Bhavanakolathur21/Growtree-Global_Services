import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(private router: Router) {

  }
  Home() {
    this.router.navigate(['/dashboard']);
  }
}
