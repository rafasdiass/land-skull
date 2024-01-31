import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'dark' | 'light' = 'light';

  constructor() {
    console.log('ThemeService initialized');
    this.initTheme();
  }

  public initTheme(): void {
    console.log('Initializing theme');
    if (typeof window !== 'undefined') {
      this.loadTheme();
    }
  }

  toggleTheme(): void {
    console.log('Toggling theme from', this.theme);
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    console.log('Theme changed to', this.theme);

    this.applyTheme();
    this.saveTheme();
  }

  private loadTheme(): void {
    console.log('Loading theme');
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.theme = savedTheme as 'dark' | 'light';
      }
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    console.log('Applying theme:', this.theme);
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.classList.remove('dark-theme', 'light-theme');
      body.classList.add(this.theme === 'dark' ? 'dark-theme' : 'light-theme');
    }
  }

  private saveTheme(): void {
    console.log('Saving theme:', this.theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.theme);
    }
  }
}
