import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EmailService } from 'app/@core/services/email.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me-modal',
  templateUrl: './contact-me-modal.component.html',
  styleUrls: ['./contact-me-modal.component.scss'],
})
export class ContactMeModalComponent implements OnInit, OnDestroy {

  public contactForm: FormGroup;
  public emailFocus: boolean = false;
  public subjectFocus: boolean = false;
  public messageFocus: boolean = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private emailService: EmailService,
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
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

  get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  get subject(): AbstractControl {
    return this.contactForm.get('subject');
  }

  get message(): AbstractControl {
    return this.contactForm.get('message');
  }

  dismiss(): void {
    this.modal.dismiss();
  }

  send(): void {
    this.emailService.sendContactEmail(this.contactForm.value)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.toastr.success('', 'E-mail sent!');
      this.modal.close();
    });
  }

}
