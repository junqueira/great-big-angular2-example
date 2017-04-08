import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { MessageRouting } from './message.routing';
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'


import {AgGridModule} from 'ag-grid-angular/main'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-material.css'


import { MessageComponent } from './message.component'

import { ROUTES } from './message.routes'

@NgModule({
  declarations: [
    MessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessageRouting,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AgGridModule.withComponents([])
  ]
})
export class MessageModule {
  constructor() { }
}
