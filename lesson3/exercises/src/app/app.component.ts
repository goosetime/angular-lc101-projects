import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeoffStatus: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeoffStatus = false;
    }
 }

 handleLanding(rocket) {
  let result = window.confirm('Are you sure the shuttle is ready to land');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle has landed.';
     rocket.style.bottom = '0px';
     rocket.style.left = '0px';
     this.takeoffStatus = true;
  }
}

handleAborting(rocket) {
  let result = window.confirm('Are you sure you want to abort the flight?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission aborted.';
     rocket.style.bottom = '0px';
     rocket.style.left = '0px';
     this.takeoffStatus = true;

  }
}

moveRocket(rocket, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocket.style.left) + 10 + 'px';
    rocket.style.left = movement;
    this.width = this.width + 10000;
  }
  else if (direction === 'left') {
    let movement = parseInt(rocket.style.left) - 10 + 'px';
    rocket.style.left = movement;
    this.width = this.width - 10000;
  }
  else if (direction === 'up') {
    let movement = parseInt(rocket.style.bottom) + 10 + 'px';
    rocket.style.bottom = movement;
    this.height = this.height + 10000;
  }
  else if (direction === 'down') {
    let movement = parseInt(rocket.style.bottom) - 10 + 'px';
    rocket.style.bottom = movement;
    this.height = this.height - 10000;
  }
}

}
