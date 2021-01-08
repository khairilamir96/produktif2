import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-pre",
  templateUrl: "pre.component.html"
})
export class PreComponent implements OnInit {

   //modal
 dismissible = true;

 defaultModal: BsModalRef;
 default = {
   keyboard: true,
   class: "modal-dialog-centered"
 };

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      smes: "Olitek Sdn Bhd",
      category: "Manufacturers",
      product: "Drink",
      country: "Malaysia",
      datesubmit: "12/02/2020",
      officer: "Ali",
      status: "Unassigned",
    },
    {
      smes: "Arachem Sdn Bhd",
      category: "Distributors",
      product: "Beverage",
      country: "Malaysia",
      datesubmit: "12/03/2020",
      officer: "Abu",
      status: "Assigned",
    },
    {
      smes: "CodeSoft Technology Sdn Bhd",
      category: "Suppliers",
      product: "Snack",
      country: "Malaysia",
      datesubmit: "12/04/2020",
      officer: "Ahmad",
      status: "Assigned",
    },
    {
      smes: "Fuka Packaging Sdn Bhd",
      category: "Suppliers",
      product: "Burger",
      country: "Malaysia",
      datesubmit: "21/08/2020",
      officer: "Amir",
      status: "Assigned",
    },
    {
      smes: "Sanae Food Sdn Bhd",
      category: "Suppliers",
      product: "Fast Food",
      country: "Malaysia",
      datesubmit: "4/12/2020",
      officer: "Am",
      status: "Unassigned",
    },
    {
      smes: "Flavorista (M) Sdn Bhd",
      category: "Suppliers",
      product: "Drink",
      country: "Malaysia",
      datesubmit: "15/9/2020",
      officer: "Amir",
      status: "Assigned",
    }
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  //modal
 openDefaultModal(modalDefault: TemplateRef<any>) {
  this.defaultModal = this.modalService.show(modalDefault, this.default);
}

ngOnInit() {}
}
