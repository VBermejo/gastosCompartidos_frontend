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
import { PayGroupService } from './service/pay-group.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BalanceComponent } from './expense-groups/balance/balance.component';
import { DebtsComponent } from './expense-groups/debts/debts.component';
import { BalanceService } from './service/balance.service';
import { DebtsService } from './service/debts.service';
import { AddMemberComponent } from './expense-groups/add-member/add-member.component';
import { AddPaymentComponent } from './expense-groups/add-payment/add-payment.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/groups', pathMatch: 'full' },
  { path: 'groups', component: ExpenseGroupsComponent },
  { path: 'group/:id/addMember', component: AddMemberComponent },
  // { path: 'directivas', component: DirectivaComponent },
  // { path: 'clientes', component: ClientesComponent },
  // { path: 'clientes/page/:page', component: ClientesComponent },
  // { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  // { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  // { path: 'login', component: LoginComponent },
  // { path: 'facturas/:id', component: DetalleFacturaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER' } },
  // { path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent, 
    HeaderComponent,
    FooterComponent,
    ExpenseGroupsComponent,
    ExpenseGroupComponent,
    PaymentComponent,
    BalanceComponent,
    DebtsComponent,
    AddPaymentComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,    
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [PayGroupService, BalanceService, DebtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
