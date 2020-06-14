import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularFrontWebAPP';

  constructor(public securityService:KeycloakSecurityService, private router:Router){
}
  ngOnInit(): void {
    
  }

onLogout(){
  this.securityService.kc.logout();
  this.router.navigate(['']);
}

onLogin(){
  this.securityService.kc.login();
}

onChangePassword(){
  this.securityService.kc.accountManagement();
}

isAppManager(){
  return this.securityService.kc.hasRealmRole('app-manager');
}
  
}
