import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'glisser-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    public form: FormGroup;
    public editForm: string;
    public userName: string;
    public userSurname: string;
    public userBio: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        console.log('modal data', data);
        if (data.name) {
            this.userName = data.name;
        }
        if (data.surname) {
            this.userSurname = data.surname;
        }
        if (data.bio) {
            this.userBio = data.bio;
        }
        this.editForm = data.edit;
    }

    public ngOnInit(): void {
        this.form = this.fb.group({
            userName: [this.userName, []],
            userSurname: [this.userSurname, []],
            userBio: [this.userBio, []]
        });
    }

    public save(): void {
        this.dialogRef.close(this.form.value);
    }

    public close(): void {
        this.dialogRef.close();
    }
}
