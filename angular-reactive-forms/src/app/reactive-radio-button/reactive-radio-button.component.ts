import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-reactive-radio-button',
    templateUrl: './reactive-radio-button.component.html',
    styleUrls: ['./reactive-radio-button.component.css']
}) 
export class ReactiveRadioButtonComponent implements OnInit {
    form = new FormGroup({
        group1: new FormControl('2'),
		usrname: new FormControl('', Validators.required)
    });

    constructor() {}
	
    ngOnInit() {}
    doSomething(vol: number) {
        switch (vol) {
            case 1:
				this.form.patchValue({usrname: 'one'});
				this.form.get('usrname').setValidators([Validators.required, Validators.minLength(10)]);
                break;
            case 2:
				this.form.patchValue({usrname: 'two'});
				this.form.get('usrname').setValidators([Validators.required, Validators.minLength(10)]);
                break;
            case 3:
				this.form.patchValue({usrname: 'three'});
				this.form.get('usrname').setValidators([Validators.required, Validators.minLength(10)]);
                break;
            case 4:
				this.form.patchValue({usrname: 'four'});
				this.form.get('usrname').setValidators([Validators.required, Validators.minLength(10)]);
                break;
            case 5:
				this.form.patchValue({usrname: 'five'});
				this.form.get('usrname').setValidators([Validators.required, Validators.minLength(10)]);
				break;
        }
    }
	
	onClick(){
		  if (this.form.valid) {
			console.log('call newsearch and remove non numeric');
		  } else {
			  this.form.get('usrname').markAsTouched({});
		  }
	}
	
}
