import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"]
})
export class AlertPage implements OnInit {
  constructor(public AlertCtrl: AlertController) {}

  ngOnInit() {}

  async presentInput() {
    const input = await this.AlertCtrl.create({
      header: "Input",
      subHeader: "Please enter your name",
      inputs: [
        {
          name: "txtName",
          type: "text",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "OK",
          handler: (data) => {
            console.log("Confirm Okay", data);
            this.presentAlertWithParameters('Name', `Your name is ${data.txtName}`);
          }
        }
      ]
    });

    await input.present();
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "OK",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertWithParameters(title, text) {
    const alert = await this.AlertCtrl.create({
      header: title,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }
}
