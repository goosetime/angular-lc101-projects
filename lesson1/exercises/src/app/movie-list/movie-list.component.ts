import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Texas Chainsaw Massacre', 'Pulp Fiction', 'Reservoir Dogs', 'Sadako vs Kayako', 'No Country for Old Men', 'Once Upon a Time in Hollywood', 'Attack of the Killer Tomatoes', "Don't Look Up", "Jacob's Ladder", 'Constatine', 'The Big Lebowski', 'Fight Club'];

   constructor() { }

   ngOnInit() {
   }

}
