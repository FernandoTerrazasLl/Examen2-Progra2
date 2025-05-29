import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interfaz',
  imports: [CommonModule, FormsModule],
  templateUrl: './interfaz.component.html',
  styleUrl: './interfaz.component.css'
})
export class InterfazComponent {
  tablaIdeas: any[][] = [
    ['Título', 'Descripción', 'Categoría', 'Estado']
  ];
  categorias: string[] = ['Tecnología', 'Salud', 'Educación', 'Medio Ambiente', 'Finanzas', 'Entretenimiento'];
  estados: string[] = ['Borrador', 'Validando', 'Descartada'];

  mostrarFormulario: boolean = false;
  mostrarTabla: boolean = true;

  titulo: string = '';
  descripcion: string = '';
  categoria: string = '';
  estado: string = '';

  indiceParaEditar: number = -1;

  CrearIdea() {
    this.limpiarFormulario();
    this.indiceParaEditar = -1;
    this.mostrarFormulario = true;
    this.mostrarTabla = false;
  }
  GuardarIdea() {
    if (this.titulo && this.descripcion && this.categoria && this.estado) {
      const nuevaIdea = [
        this.titulo,
        this.descripcion,
        this.categoria,
        this.estado
      ];

      if (this.indiceParaEditar === -1) {
        this.tablaIdeas.push(nuevaIdea);
      } else {
        this.tablaIdeas[this.indiceParaEditar] = nuevaIdea;
      }

      this.limpiarFormulario();
      this.mostrarFormulario = false;
      this.mostrarTabla = true;
    }
  }

  EliminarIdea(titulo: string) {
    for(let i = 1; i < this.tablaIdeas.length; i++) {
      if (this.tablaIdeas[i][0] === titulo) {
        this.tablaIdeas.splice(i, 1);
        break;
      }
    }
  }

  EditarIdea(titulo: string) {
    for (let i = 1; i < this.tablaIdeas.length; i++) {
      if (this.tablaIdeas[i][0] === titulo) {
        this.titulo = this.tablaIdeas[i][0];
        this.descripcion = this.tablaIdeas[i][1];
        this.categoria = this.tablaIdeas[i][2];
        this.estado = this.tablaIdeas[i][3];
        this.indiceParaEditar = i;
        break;
      }
    }
    this.mostrarFormulario = true;
    this.mostrarTabla = false;
  }

  CancelarFormulario() {
    this.limpiarFormulario();
    this.mostrarFormulario = false;
    this.mostrarTabla = true;
  }

  limpiarFormulario() {
    this.titulo = '';
    this.descripcion = '';
    this.categoria = '';
    this.estado = '';
    this.indiceParaEditar = -1;
  }
}

