import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { NotificationService } from 'src/app/helpers/notification.service';
declare var $: any;
@Component({
  selector: 'app-add-slab',
  templateUrl: './add-slab.component.html',
  styleUrls: ['./add-slab.component.css'],
})
export class AddSlabComponent implements OnInit, AfterViewInit {
  defaultSlab: any = {
    startSlab: 1,
    endSlab: 2,
    action: 'on',
  };
  defaultSlabData = {
    title: null,
    datetime: moment().format('YYYY-MM-DDThh:mm'),
  };
  slabs = [_.cloneDeep(this.defaultSlab)];
  slabData = this.defaultSlabData;

  formValid = false;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private tokenService: TokenService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Add Slab');
  }

  ngAfterViewInit(): void {}

  onAdd(i) {
    let copySlab = _.cloneDeep(this.slabs[i]);
    this.slabs.push(copySlab);
  }

  onRemove(i) {
    if (i >= 1) {
      console.log('yes', i);
      this.slabs.splice(i, 1);
    } else {
      this.notify.setError(
        'Cannot remove ! There should be atleast one slab present',
        ''
      );
    }
  }
  onSubmit() {
    this.formValid = false;
    const { title, datetime } = this.slabData;
    if (title === '' || !title || !datetime) {
      return this.notify.setError(
        'Title or Date and time are required',
        'Fields required'
      );
    }

    for (let i = 0; i < this.slabs.length; i++) {
      let element = this.slabs[i];
      if (
        !element.startSlab ||
        element.startSlab < 1 ||
        element.startSlab > 99
      ) {
        this.notify.setError(
          'Slab start range should be between 1-99 !',
          'At S.No - ' + (i + 1)
        );
        break;
      }
      if (!element.endSlab || element.endSlab < 2 || element.endSlab > 100) {
        this.notify.setError(
          'Slab ending range should be between 2-100 !',
          'At S.No - ' + (i + 1)
        );
        break;
      }
      if (!element.action) {
        this.notify.setError(
          'Set the action to ON or OFF !',
          'At S.No - ' + (i + 1)
        );
        break;
      }
    }
    this.formValid = true;
    let data = {
      ...this.slabData,
      slabs: [...this.slabs],
    };
    this.notify.setSuccess(
      'Your configuration saved successfully !',
      'Check console for the log data'
    );
    this.slabData = this.defaultSlab;
    this.slabs = [_.cloneDeep(this.defaultSlab)];
    console.log(data);
  }
}
