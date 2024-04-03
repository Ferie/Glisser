import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'glisser-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
    public name = 'Riccardo';
    public surname = 'Andreatta';
    public bio = `I am an experienced and results-driven Technology Leader/Software
Development Manager with a proven track record in managing and mentoring development teams.
Adept at introducing innovative technologies to enhance performance and efficiency.
Skilled in front-end technologies, technical architecture, and agile methodologies.

My early background is in SEO and back-end development, but it switched very quickly into
front-end development where I spent over a decade working with different companies
related to diverse industry sectors.`;

    constructor(
        private dialog: MatDialog,
        private cdRef: ChangeDetectorRef
    ) { }

    public editContent(value: string): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.panelClass = 'glisser-modal';
        dialogConfig.width = '60%';
        dialogConfig.data = {
            name: this.name,
            surname: this.surname,
            bio: this.bio,
            edit: value
        };

        // this.dialog.open(ModalComponent, dialogConfig);

        const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                console.log('Dialog output:', data);
                this.name = data.userName;
                this.surname = data.userSurname;
                this.bio = data.userBio;
                this.cdRef.detectChanges();
            }
        });
    }
}
