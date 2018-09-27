import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {


  profile_options:string = 'my_profile';

  constructor() { }

  ngOnInit() {
  }

}
