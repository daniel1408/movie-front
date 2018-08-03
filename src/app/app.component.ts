import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-front';

  ngOnInit(): void {
    $('.sidebar-dropdown > a').click(function () {
      $('.sidebar-submenu').slideUp(200);
      if ($(this).parent().hasClass('active')) {
          $('.sidebar-dropdown').removeClass('active');
          $(this).parent().removeClass('active');
      } else {
          $('.sidebar-dropdown').removeClass('active');
          $(this).next('.sidebar-submenu').slideDown(200);
          $(this).parent().addClass('active');
      }

  });

  $('#toggle-sidebar').click(function () {
      $('.page-wrapper').toggleClass('toggled');
  });

  }
}
