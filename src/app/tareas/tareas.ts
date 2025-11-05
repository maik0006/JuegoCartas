import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  standalone: false,
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {

  tareasproyecto = [
    {name:"Crear carpeta con el nombre de mi proyecto", iscompleted:true},
    {name:"abrir en VSC", iscompleted:true,},
    {name:"Crear proyecto desde la terminal ", iscompleted:false},
    {name:"Crear componentes",iscompleted:true},  
    {name:"llamarlo al archivo app.html",iscompleted:false},
    {name:"Finalmente levantar el servidor",iscompleted:true},
  ];
  
  instructores= ["malaver","esteban","juan","alexis" ];
  aprendices= [
    {nombre: "Sergio", programa:"adso", edad: 17},
    {nombre: "Andres", programa:"cocina", edad: 15},
    {nombre: "Pablo", programa:"depoprtes", edad: 18},
  ];

  toggleCompletion(tarea: any):void{
    tarea.iscompleted = !tarea.iscompleted;
  }

}
