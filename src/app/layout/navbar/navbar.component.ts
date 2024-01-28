import { Component } from '@angular/core';
import { ThemeService } from '../../shared/service/theme.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(private router: Router, private themeService: ThemeService) {}

navegarPara(rota: string) {
  this.router.navigate([rota]);
}

toggleTheme(): void {
  this.themeService.toggleTheme();
}
}