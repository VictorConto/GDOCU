import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal-cargar-documento",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: "./modal-cargar-documento.component.html",
})
export class ModalCargarDocumentoComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public ngbActiveModal: NgbActiveModal,
  ) {
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      codigo: [null, Validators.required],
      version: [null, Validators.required],
      modulo: [null, Validators.required],
      subModulo: [null, Validators.required],
      descripcion: [null, Validators.required],
      estado: [null, Validators.required],
      archivo: [null, Validators.required],
    });
  }

  cargarDocumento(event: any) {
    const file = event.target.files[0];
    this.form.get("archivo")?.setValue(file);
  }

  subirDocumento() {
    this.ngbActiveModal.close(this.form.value);
  }

  cerrarModal() {
    this.ngbActiveModal.close();
  }
}
