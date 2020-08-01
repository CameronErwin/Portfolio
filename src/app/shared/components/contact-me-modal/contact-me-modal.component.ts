import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EmailService } from 'app/@core/services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me-modal',
  templateUrl: './contact-me-modal.component.html',
  styleUrls: ['./contact-me-modal.component.scss'],
})
export class ContactMeModalComponent implements OnInit, OnDestroy {

  public contactForm: FormGroup;
  public subjectFocus: boolean = false;
  public messageFocus: boolean = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private emailService: EmailService,
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      subject: [
        '',
        [
          Validators.required,
        ],
      ],
      message: [
        '',
        [
          Validators.required,
        ],
      ],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  dismiss(): void {
    this.modal.dismiss();
  }

  send(): void {
    this.emailService.sendContactEmail(this.contactForm.value)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      // toast?
      this.modal.close();
    });
  }

}
