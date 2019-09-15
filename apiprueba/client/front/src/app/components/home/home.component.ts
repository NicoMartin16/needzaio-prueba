import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario: Usuario;
  public tipodocumentos: string[] = ['Militar', 'Temporal'];
  public status: string;
  constructor(private _dataService: DataService) {
    this.usuario = new Usuario(
      '',
      '',
      false,
      new Date(),
      false,
      {
        document: '',
        place: '',
        date: new Date()
      },
      {
        address: '',
        city: '',
        phone: '',
        celphone: '',
        emergencyname: '',
        emergencyphone: ''
      }
    );
  }
  ngOnInit() {}
  onSaveUsuario(form){
    this._dataService.guardarUsuarios(this.usuario).subscribe(
      response => {
        this.status = "success";
        form.reset();
        alert("Se ha registrado los datos correctamente");
      },
      err => {
        this.status = "failed";
      }
    );

  }
  changeValue(document: string){

    console.log(document);
    switch (document) {
      case "Militar":
        this.usuario.isMilitar = true;
        this.usuario.isTemporal = false;
        break;
      case "Temporal":
        this.usuario.isMilitar = false;
        this.usuario.isTemporal = true;
        break
      default:
        break;
    }
  }


}
