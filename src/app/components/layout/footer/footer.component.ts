import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service : StorageService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){

    this.service.logout();
    this.router.navigateByUrl("login");
  }

}
