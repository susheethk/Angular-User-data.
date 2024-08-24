import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { PageoneComponent } from "./pageone/pageone.component";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent, PageoneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Userdata';
}
