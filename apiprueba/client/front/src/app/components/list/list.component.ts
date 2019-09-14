import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public usuarios: Usuario[];
  constructor(private _dataService: DataService) {
   }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this._dataService.getUsuarios().subscribe(
      response => {
        this.usuarios = response;
        console.log(this.usuarios);
      },
      err => {
        console.log(err);
      }
    )
  }

}
