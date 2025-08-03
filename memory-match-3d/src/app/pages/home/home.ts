import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  {

  constructor(
    private router: Router,
  ) {}

  public startGame(): void {
    this.router.navigate(['/game']);
  }

}
