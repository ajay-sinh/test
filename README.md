# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



1)create simple UI and maitain one observable of behaviour subject type that will maintain all crud operations 
steps:
i)app.module.ts import the reactive form and material dependencies for form validation and Matdilog 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { HomeComponent } from './home/home.component';
import { CreateformComponent } from './createform/createform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
ii) create the 2 components and one service for the view and operations that need to be performs like createform is create for the adding and updating the product details and home component is our main dashbord and the main view we have created
iii)app-routing.modules.ts in this we have created one default routing which will load the HomeComponent.ts  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

iv)app.component.html to show the accutal view and to run the our routes added the bellow line
<router-outlet></router-outlet>
v) home.component.html
<div class="mainPage">
    <div class="navBar">
        <p> Daily Drinks</p>
    </div>
    <div class="btnOfcrete">
        <div class="btnHolder">
            <span class="button" (click)="openAddProductPopup()">Create Entry</span>
        </div>
    </div>
    <div class="productList">
        <div class="tableProducts">
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>price</th>
                    <th>description</th>
                    <th>quantity</th>
                    <th>Actions</th>

                </tr>
                <tr *ngFor="let record of tableData$.value;let i = index">
                    <td>{{record?.product_name}}</td>
                    <td>{{record?.price |currency:"INR":"symbol"}}</td>
                    <td>{{record?.description}}</td>
                    <td>{{record?.quantity}}</td>
                    <th class="actionAlg">
                        <span class="cardAction cp">
                            <i class="fa fa-trash-o" (click)="deleteProduct(i)" aria-hidden="true"></i>
                            <i class="fa fa-pencil" (click)="updateProduct(record,i)" aria-hidden="true"></i>
                        </span>
                    </th>
            </table>
        </div>
    </div>
</div>

vi)home.component.scss

.navBar p {
    font-size: 2rem;
    margin-top: 3rem;
    margin-left: 2rem;
  }
  .productList {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
  }
  .tableProducts table {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
    margin: 0 auto;
    overflow: scroll;
    margin-bottom: 3rem;
  }
  .tableProducts td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  .actions {
    display: flex;
    flex-direction: column;
  }
  .cardAction {
      width: 100px;
  }
  .cardAction i{
    margin-left:6px ;
    margin-right: 6px;
  }
  .cp i{
      cursor: pointer;
  }
  .actionAlg{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
.btnOfcrete{
    height: 50px;
    text-align: end;
    margin-right: 6rem;
    cursor: pointer;
}

.btn{
    border: 1px solid black;
    padding: 10px;
}
.button {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    font-size: 1rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0cf;
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken(#0cf, 15%);
      transition: all .3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
 
 vii) home.component.ts
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


viii) createform.component.html

<div class="mainHolder">
    <div class="formDiv">
        <div class="titleFont">Enter Product Info  <i (click)="close()" class="fa fa-window-close" aria-hidden="true"></i>
        </div>
        <form class="FormClass" [formGroup]="productDetails" (ngSubmit)="onSubmit()">
            <div class="field padding-bottom--24 algFx">
                <p>Product Name <span class="req"> * required</span> </p>
                <input type="text" name="email" formControlName="product_name" required />
                <div  *ngIf="productDetails.get('product_name')?.invalid && productDetails.get('product_name')?.touched"
                    class="alert alert-danger">
                    Product Name is required.
                </div>
            </div>
            <div class="field padding-bottom--24 algFx">
                <p>Price  <span class="req"> * required</span></p>
                <input type="number" name="email" formControlName="price" />
                <div *ngIf="productDetails.get('price')?.invalid &&productDetails.get('price')?.touched"
                    class="alert alert-danger">
                    Price is required.
                </div>
            </div>
            <div class="field padding-bottom--24 algFx">
                <p>Quantity  <span class="req"> * required</span></p>
                <input type="text" name="email" formControlName="quantity" />
                <div *ngIf="productDetails.get('quantity')?.invalid && productDetails.get('quantity')?.touched"
                    class="alert alert-danger">
                    Quantity is required.
                </div>
            </div>
            <div class="field padding-bottom--24 algFx">
                <p>Discretion  <span class="req"> * optional</span></p>
                <textarea id="w3review" formControlName="description" name="w3review" rows="4" cols="50">
                </textarea>
            </div>
            <div class="btnHolder" *ngIf="!record">
                <span> <button href="#" class="button" [disabled]="productDetails.invalid"
                        (click)="onSubmit()">Submit</button></span>
            </div>
            <div class="btnHolder" *ngIf="record">
                <span> <button href="#" class="button" [disabled]="productDetails.invalid"
                        (click)="onUpdate()">update</button></span>
            </div>
        </form>
    </div>
</div>
ix)  createform.component.scss
.navBar p {
    font-size: 2rem;
    margin-left: 2rem;
  }
  .formDiv{
      width: 90%;
      margin: 0 auto;
  }
  .FormClass{
      margin-top: 30px;
  }
  .FormClass span{
   margin-right: 20px;
  }
.req{
  color: rgb(238, 107, 107);
}
  .field input {
    font-size: 16px;
    line-height: 12px;
    padding: 4px 8px;
    margin-bottom: 10px;
    min-height:30px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}
.algFx{
    display: flex;
    flex-direction: column;   
}
.algFx p{
 margin-top: 10px;
}
.button {
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    font-size: 1rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0cf;
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken(#0cf, 15%);
      transition: all .3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
  
  .btnHolder{
 width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 100px;
  }
  .btnHolder button{
   border: none;
  }
  .titleFont{
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
  }

  .alert-danger{
    margin-top: 5px;
    margin-right: 10px;
  color: rgb(224, 52, 52);

  }
  .titleFont i{
 cursor: pointer;
 font-size: 2rem;
  }

  x)createform.component.ts

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

xi)data.servic.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  TableRecord$ = new BehaviorSubject([
    {
      product_name: 'paneer',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum isng industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'yogut',
      price: 150,
      description:
        'Lorem Ipsum is simply dummy text of the printing and en the industry',
      quantity: 1,
    },
    {
      product_name: 'Fermented milk ',
      price: 300,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Cheese',
      price: 20,
      description:
        'Lorem Ipsum is simply dummy text of the pritry. Lorem Ipsum has been the industry',
      quantity: 22,
    },
    {
      product_name: 'Casein',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 5500,
      description:
        'Lorem Ipsum is simply dummy text of the pLorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Custard',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 55,
      description:
        'Lorem Ipsum is simply dummy text of the printi',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Custard',
      price: 33,
      description:
        'Lorem Ipsum is simply dummy text of the printihas been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and sum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 444,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typeset been the industry',
      quantity: 2,
    },
    {
      product_name: 'Cream',
      price: 44,
      description:
        'Lorem Ipsum is simply dummy text of thetry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 33,
      description:
        'Lorem Ipsum is simply dummand typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
  ]);
  constructor() {

  }
}

