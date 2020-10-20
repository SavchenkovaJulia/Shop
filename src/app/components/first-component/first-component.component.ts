import { Component, OnInit } from '@angular/core';

enum Category {
  DOC = 'DOC',
  DO = 'DO',
  VDT = 'VDT',
  VDM = 'VDM'
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.less']
})
export class FirstComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: any;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Puech Redon Pét-Nat 2019';
    this.description = 'Cyril Cuche has been working his family estate organically and biodynamically for over a decade, taking advantage of the lands great biodiversity, including a mix of wild forest, grains, and vineyards.';
    this.price = 350;
    this.isAvailable = false;
    this.category = Category.DOC;
  }

}
