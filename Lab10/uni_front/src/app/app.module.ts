import { AppModule } from './app.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  // 👈 міндетті
    FormsModule
  ],
  ...
})
export class AppModule { }
