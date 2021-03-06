import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  
  places: Place[];
  
  constructor(
    private placesService: PlacesService
  ) { }
    
  ngOnInit() {
    this.places = this.placesService.places;
  }
  
}
