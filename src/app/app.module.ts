import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, BlogPostListComponent, BlogPostComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, TableModule, ButtonModule, FormsModule, InputTextModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
