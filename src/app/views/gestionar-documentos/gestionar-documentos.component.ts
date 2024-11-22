import { Component } from "@angular/core";
import { NgbModal, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { ModalCargarDocumentoComponent } from "../../components/modal-cargar-documento/modal-cargar-documento.component";

interface Documento {
  id: number;
  nombre: string;
  codigo: string;
  version: string;
  modulo: string;
  subModulo: string;
  descripcion: string;
  estado: string;
  archivo: File;
}

@Component({
  selector: "app-gestionar-documentos",
  standalone: true,
  imports: [NgbTooltip],
  templateUrl: "./gestionar-documentos.component.html",
})
export class GestionarDocumentosComponent {
  documentosCargados: Documento[] = [];

  constructor(private ngbModal: NgbModal) {}

  cargarDocumento() {
    const modal = this.ngbModal.open(ModalCargarDocumentoComponent, {
      backdrop: "static",
      centered: true,
      size: "lg",
    });
    modal.componentInstance.data = { crearItem: true };
    modal.closed.subscribe((result) => {
      if (result) {
        this.documentosCargados.push({ ...result, id: Math.round(Math.random() * 999999) });
      }
    });
  }

  descargarDocumento(item: Documento) {
    const file = new Blob([item.archivo], { type: item.archivo.type });
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(file);
    downloadLink.download = item.archivo.name;
    downloadLink.click();
  }

  eliminarDocumento(item: Documento) {
    const index = this.documentosCargados.findIndex((x) => x.id === item.id);
    this.documentosCargados.splice(index, 1);
  }
}
