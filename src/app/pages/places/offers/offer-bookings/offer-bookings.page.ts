import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  
  place: Place;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
  
}
