import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  displayedColumns: string[] = [
    'titre',
    'description',
    'lien',
    'statut',
    'create-by',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(null);

  dataFilter: any = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: MockService, public dialog: MatDialog) {
    this.getAllUser();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllUser() {
    this.api.getAllUsers().subscribe((resp) => {
      this.dataSource.data = resp;
    });
  }

  handleDeleteUser(id: number) {
    this.openDialogDelete(id);
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue;
  }

  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deteleUser(id).subscribe((resp) => {
          console.log(id);
        });
      }
    });
  }
}
