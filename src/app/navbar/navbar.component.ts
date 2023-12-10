import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public token: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.router.navigate(['/login']);
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  

}
