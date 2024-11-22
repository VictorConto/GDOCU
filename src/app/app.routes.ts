import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/gestionar-documentos", pathMatch: "full" },
  {
    path: "gestionar-documentos",
    loadComponent: () =>
      import("./views/gestionar-documentos/gestionar-documentos.component").then(
        (com) => com.GestionarDocumentosComponent,
      ),
  },
];
