import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/service/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
   
    this.themeService.initTheme();
  }
}
