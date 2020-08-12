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
    public bio = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare lacinia leo vitae auctor. Aliquam elementum
    imperdiet leo sed venenatis.Mauris sed nisl condimentum, efficitur quam sit amet, fermentum ex.Aliquam non lacus id
    tellus auctor ullamcorper quis et ipsum.Praesent mattis tortor in pellentesque tristique.Fusce at mi aliquam, mollis
eros ac, ornare risus.Etiam eu est nec metus malesuada venenatis a sed quam.Nullam at diam ultrices, imperdiet dui
eget, consectetur quam.Quisque id porta enim, et tristique neque.Nam tincidunt accumsan nibh non porttitor.Donec
molestie quam in velit faucibus, in fringilla libero consectetur.Donec suscipit odio eget lectus pulvinar ultricies.
Nam vestibulum vulputate arcu id imperdiet.Morbi volutpat suscipit velit in placerat.Nunc congue mattis velit, et
varius nibh placerat a.Praesent et purus tempor mi volutpat consectetur.';
`;

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
