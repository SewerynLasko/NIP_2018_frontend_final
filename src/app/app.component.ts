import { Component, OnInit } from '@angular/core';
import { BlogPost } from './models/blogPost';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  ngOnInit() {}
}
