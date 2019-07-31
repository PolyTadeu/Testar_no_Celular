import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras);
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
