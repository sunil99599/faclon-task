import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {}

  onLogout() {
    this.tokenService.onLogout();
  }

  public onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
