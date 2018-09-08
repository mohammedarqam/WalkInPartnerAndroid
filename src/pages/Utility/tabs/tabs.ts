import { Component } from '@angular/core';
import { DashboardPage } from '../../Dashboard/dashboard/dashboard';
import { MenuPage } from '../../Menu/menu/menu';
import { OrdersPage } from '../../Orders/orders/orders';
import { CustomersPage } from '../../Customers/customers/customers';
import { MorePage } from '../../More/more/more';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = MenuPage;
  tab3Root = OrdersPage;
  tab4Root = CustomersPage;
  tab5Root = MorePage;

  constructor() {

  }
}
