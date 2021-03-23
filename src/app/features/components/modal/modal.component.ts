import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public movie;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.movie);
  }

  close() {
    this.modalService.dismissAll();
  }

}
