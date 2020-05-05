import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  
  place: Place;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) return;
      
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
  
}
