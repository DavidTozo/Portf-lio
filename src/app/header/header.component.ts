import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(){
    let link = document.createElement("a");
    link.download = "Curriculo_David_Tozo";
    link.href = "/assets/Curriculo_David_Tozo.pdf";
    link.click();
  }

}
