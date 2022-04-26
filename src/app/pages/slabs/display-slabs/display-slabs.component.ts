import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-slabs',
  templateUrl: './display-slabs.component.html',
  styleUrls: ['./display-slabs.component.css'],
})
export class DisplaySlabsComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Display Slabs');
  }
}
