import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `.boldClass{   
                font-weight:bold;    
                font-size : 30px;    
              }
              .italicsClass{    
                  font-style:italic;    
              }    
              .colorClass{    
                  color:Red;               
              }`
  ]
})
export class AppComponent implements OnInit {

  name = 'Angular Structural / Attribute directive :: Learning......';

  showElement: boolean;
  inpvalue: number;

  radioTitle: string;
  radioItems: Array<string>;
  model = { option: 'Lata' };

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;

  employees: any[] = [{
    code: '1000', name: 'Girish Nandgawe ', gender: 'Male',
    annualSalary: 6500.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1001', name: 'Sukhi lal', gender: 'Male',
    annualSalary: 5500, dateOfBirth: '25/6/1988'
  },
  {
    code: '1002', name: 'Rober', gender: 'Male',
    annualSalary: 5700.95, dateOfBirth: '9/6/1982'
  },
  {
    code: '1003', name: 'Sir Juda', gender: 'Male',
    annualSalary: 5900, dateOfBirth: '12/8/1979'
  },
  {
    code: '1004', name: 'Shakal', gender: 'Female',
    annualSalary: 6500.826, dateOfBirth: '14/10/1980'
  },
  {
    code: '1005', name: 'Kancha', gender: 'Male',
    annualSalary: 6500.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1006', name: 'Mogambo', gender: 'Male',
    annualSalary: 456456.826, dateOfBirth: '11/5/1939'
  },
  {
    code: '1007', name: 'Subedar ', gender: 'Male',
    annualSalary: 456.826, dateOfBirth: '2/6/1909'
  },
  {
    code: '1008', name: 'Dr. Dang', gender: 'Female',
    annualSalary: 46456.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1009', name: 'Kesariya Vilayati', gender: 'Male',
    annualSalary: 45646.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1010', name: 'Bakhtawar sing', gender: 'Male',
    annualSalary: 123123.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1011', name: 'Lajja Shankar Pandey', gender: 'Male',
    annualSalary: 234234546.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1011', name: 'Gokul Pandit', gender: 'Male',
    annualSalary: 2342234.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1012', name: 'Langda Tyagi', gender: 'Male',
    annualSalary: 16500.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1013', name: 'Lotiya Pathan', gender: 'Male',
    annualSalary: 798889.826, dateOfBirth: '12/8/1979'
  },
  {
    code: '1014', name: 'Jageera', gender: 'Male',
    annualSalary: 7890.826, dateOfBirth: '12/8/1979'
  },
  ];

  constructor() {
    this.radioTitle = 'Radio Button in Angular';
    this.radioItems = ['Rafi Sahab', 'Kishore kumar', 'Lata'];
  }


  ngOnInit() {
    this.showElement = true;
    this.inpvalue = 1;
  }

  trackByFn(index, item) {
    return item.code;
  }
  getStyle() {
    return {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };
  }
  applyClasses() {
    return {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
  }
}
