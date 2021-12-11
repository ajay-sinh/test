import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {
  productDetails: FormGroup
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateformComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public record: any) {
    this.productDetails = this.fb.group({
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      description: [],
      quantity: ['', Validators.required],
    })
    if (record) {
      this.productDetails.patchValue(record)
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dataService.TableRecord$.value.push(this.productDetails.value)
    this.productDetails.reset()
    this.dialogRef.close()
  }
  onUpdate() {
    this.dataService.TableRecord$.value[this.record.index]=this.productDetails.value
    this.productDetails.reset()
    this.dialogRef.close()
  
  }
  close(){
    this.dialogRef.close()
  }
}


