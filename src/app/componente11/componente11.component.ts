import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // Objeto de formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Vetor
  vetor:Pessoa[] = [];

  // Armazenar índice da pessoa selecionada
  indice:number = -1;

  // Função de cadastro
  cadastrar() {

    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visualização via console
    console.table(this.vetor);

  }

  // Função de seleção
  selecionar(indice:number) {

    // Atribuir o índice da pessoa
    this.indice = indice;

    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    // Visibilidade dos botões
    this.btnCadastrar = false;

  }
}
