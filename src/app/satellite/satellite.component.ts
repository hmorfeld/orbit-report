import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    name = "name";
    type = "type";
    launchDate = "date";
    orbitType = "orbit type";
    operational = false;
   }

  ngOnInit(): void {
  }

}
