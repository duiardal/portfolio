import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(public authService: AuthService) { }

  logout() {
  	this.authService.logout();
  }

  ngOnInit() {
  }

}
