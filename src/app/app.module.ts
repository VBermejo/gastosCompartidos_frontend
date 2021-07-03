import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpenseGroupsComponent } from './expense-groups/expense-groups.component';
import { ExpenseGroupComponent } from './expense-groups/expense-group/expense-group.component';
import { PaymentComponent } from './expense-groups/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseGroupsComponent,
    ExpenseGroupComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,    
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
