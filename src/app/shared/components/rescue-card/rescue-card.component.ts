import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { RescueService } from 'src/app/services/rescue.service';
import { EditRescueComponent } from 'src/app/user/rescue/edit-rescue/edit-rescue.component';

@Component({
  selector: 'app-rescue-card',
  templateUrl: './rescue-card.component.html',
  styleUrls: ['./rescue-card.component.less'],
  providers: [DialogService, MessageService]

})
export class RescueCardComponent {

  @Input() pet: any;

  ref: DynamicDialogRef;

  constructor(
    private router: Router,
    private rescueService: RescueService,
    public dialogService: DialogService,
  ) { }

  ngOnInit() {
    if (this.pet.images.length == 0) {
      this.pet.images = ["https://firebasestorage.googleapis.com/v0/b/advance-totem-350103.appspot.com/o/General%2Ferror_img.jpg?alt=media&token=9a5285d5-8aae-421f-ad9f-e794f2524b31"]
    }
  }

  routeToRescueDetail() {
    this.rescueService.setStorageRescuePost(this.pet)
    this.router.navigate([`rescue/rescue-detail/${this.pet.rescuePostID}`])
  }

  updateRescueDetail() {
    this.ref = this.dialogService.open(EditRescueComponent, {
      data: this.pet,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    })

  }

  getSeverity(status: string) {
    switch (status) {
      case 'COMPLETED':
        return 'success';
      case 'WAITING':
        return 'info';
      case 'PROCESSING':
        return 'warning';
      default:
        return 'danger';
    }
  }

  getStatus(status: string) {
    switch (status) {
      case 'COMPLETED':
        return 'Giải cứu thành công bởi: ' + this.pet.rescuer.shelterName;
      case 'WAITING':
        return 'Đang chờ giải cứu';
      case 'PROCESSING':
        return 'Đang được giải cứu bởi: ' + this.pet.rescuer.shelterName;
      default:
        return 'Giải cứu không thành công';
    }
  }

}
