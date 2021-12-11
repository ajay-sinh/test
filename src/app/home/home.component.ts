import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CreateformComponent } from '../createform/createform.component';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData$ = new BehaviorSubject([])
  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {
    this.tableData$ = dataService.TableRecord$
  }

  ngOnInit(): void {
  }
  openAddProductPopup() {
    this.dialog.open(CreateformComponent, {
      height: '80%',
      width: '80%'
    })
  }
  deleteProduct(index) {
    this.dataService.TableRecord$.value.splice(index, 1)
  }
  updateProduct(record, index) {
    const data = {
      ...record,
      index: index
    }
    this.dialog.open(CreateformComponent, {
      height: '80%',
      width: '80%',
      data: data
    })

  }
}
