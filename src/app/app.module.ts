import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { WikiComponent } from "./wiki/wiki.component";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, WikiComponent, ArticleComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
