import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../../../environment/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
