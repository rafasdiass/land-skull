import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/service/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef<HTMLButtonElement>;
  @ViewChild('navbarNav') navbarNav!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private themeService: ThemeService) {}

  navegarPara(rota: string): void {
    this.router.navigate([rota]);
    this.closeNavbar();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleNavbar(): void {
    if (this.navbarToggler && this.navbarNav) {
      this.navbarToggler.nativeElement.classList.toggle('collapsed');
      this.navbarNav.nativeElement.classList.toggle('show');
    }
  }

  closeNavbar(): void {
    if (this.navbarToggler && this.navbarNav) {
      this.navbarToggler.nativeElement.classList.add('collapsed');
      this.navbarNav.nativeElement.classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.navbarToggler && this.navbarNav &&
        !this.navbarToggler.nativeElement.contains(event.target as Node) &&
        !this.navbarNav.nativeElement.contains(event.target as Node)) {
      this.closeNavbar();
    }
  }
}
