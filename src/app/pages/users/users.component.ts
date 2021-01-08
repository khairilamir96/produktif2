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
  selector: "app-users",
  templateUrl: "users.component.html"
})
export class UsersComponent implements OnInit {

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
     username: "Am",
     email: "am@gmail.com",
     usertype: "Halal Manager",
	 joinedat: "12/2/2020",
	 status: "Active",
   },
   {
     username: "Amir",
     email: "amir@gmail.com",
     usertype: "Halal Auditor",
	 joinedat: "12/3/2020",
	 status: "Active",
   },
   {
     username: "Ali",
     email: "aali@gmail.com",
     usertype: "Halal Manager",
	 joinedat: "22/8/2020",
	 status: "Inactive",
   },
   {
     username: "Abu",
     email: "abu@gmail.com",
     usertype: "Halal Auditor",
	 joinedat: "30/4/2019",
	 status: "Active",
   },
   {
     username: "Wan",
     email: "wan@gmail.com",
     usertype: "Halal Manager",
	 joinedat: "12/2/2020",
	 status: "Inactive",
   },
   {
     username: "Fiq",
     email: "fiq@gmail.com",
     usertype: "Halal Manager",
	 joinedat: "11/5/2020",
	 status: "Active",
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