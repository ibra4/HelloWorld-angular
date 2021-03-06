import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UsersModule } from './users/users.module';
import { BlogComponent } from './blog/blog.component';
import { PriceDirectiveDirective } from './directives/priceDirective/price-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    BlogComponent,
    PriceDirectiveDirective
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
