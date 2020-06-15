import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, HostListener} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  contentConfirmed: boolean = true;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.required]
    });
  }

  openDialog() {
    if (this.contentConfirmed) {
      this.dialog.open(PopupComponent);
    }
  }
}
