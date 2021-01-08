import { Component, AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import * as L from 'leaflet';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent implements AfterViewInit {
  private map;
  //modal
 dismissible = true;

 defaultModal: BsModalRef;
 default = {
   keyboard: true,
   class: "modal-dialog-centered"
 };
 //end modal
  

 entries: number = 5;
 selected: any[] = [];
 temp = [];
 activeRow: any;
 rows: any = [
   { 
     location: "Kuala Lumpur", 
     smes: "Olitek Sdn Bhd",
     status: "Closed",
     task: "Pre-Audit",
   },
   { 
     location: "Selangor",
     smes: "Arachem Sdn Bhd",
     status: "In Progress",
     task: "Post-Audit",
   },
   {
     location: "Perak",
     smes: "CodeSoft Technology Sdn Bhd",
     status: "Registered",
     task: "Post-Monitoring",
   },
   {
     location: "Kuala Lumpur",
     smes: "Fuka Packaging Sdn Bhd",
     status: "Closed",
     task: "Pre-Audit",
   },
   {
     location: "Kuala Lumpur",
     smes: "Sanae Food Sdn Bhd",
     status: "Closed",
     task: "Pre-Audit",
   },
   {
     location: "Kuala Lumpur",
     smes: "Flavorista (M) Sdn Bhd",
     status: "Closed",
     task: "Pre-Audit",
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
  ngAfterViewInit(): void {
      this.map = L.map('map', {
        center: [ 39.8282, -98.5795 ],
        zoom: 3
      });
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    }
  //modal
  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
    }
}