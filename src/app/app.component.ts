import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro']
  defaultValue = this.subscriptions[1]
  @ViewChild('f', { static: false }) subscriptionForm: NgForm;

  ngOnInit() {
    console.log('defValue', this.defaultValue)
  }

  onSubmit() {
    console.log("Form was submited. Value: ", this.subscriptionForm)
  }

}
