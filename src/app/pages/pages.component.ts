import { Component, OnInit } from '@angular/core';
import { Page } from '../domain/models/page';
import { ServicePage } from '../domain/services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
