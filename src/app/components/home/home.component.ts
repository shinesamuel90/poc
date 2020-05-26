import { Component, OnInit } from '@angular/core';
import { WindowProviderService } from 'src/app/services/window-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hostName: string;
  constructor(private windowService:WindowProviderService) { }

  ngOnInit(): void {
    this.hostName = this.windowService.getHostname();
    alert( this.hostName);
  }



}
