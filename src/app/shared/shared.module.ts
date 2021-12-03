import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { PagingComponent } from './components/paging/paging.component';



@NgModule({
  declarations: [
    CounterComponent,
    PagingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CounterComponent,
    PagingComponent
  ],
})
export class SharedModule { }
