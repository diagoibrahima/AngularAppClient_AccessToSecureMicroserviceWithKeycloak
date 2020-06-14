import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../services/suppliers.service';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public suppliers:any;
  public errorMessage: any;
  constructor(private suppliersService:SuppliersService, private secutityService:KeycloakSecurityService) { }

  ngOnInit() {
    if(this.secutityService.kc.authenticated){
      this.suppliersService.getSuppliers()
      .subscribe(data=>{
        this.suppliers=data;
        }, err=>{  
          this.errorMessage=err.error.message;    
    });
}
    

  }

}
