import { Component, OnInit } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  satellites: Satellite[];
  constructor() { }

  ngOnInit(): void {
  }

}
