import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
// import { PageoneComponent } from "./pageone/pageone.component";
// import { PagetwoComponent } from "./pagetwo/pagetwo.component";
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Userdata';
}
