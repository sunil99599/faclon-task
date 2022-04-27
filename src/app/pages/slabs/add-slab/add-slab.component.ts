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
    endSlab: 20,
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

  between(x, min, max) {
    return x >= min && x <= max;
  }

  checkInRange(start, end, rangestart, rangeend) {
    console.log(start, end, rangestart, rangeend);
    let startSlabBetween = this.between(start, rangestart, rangeend);
    let endSlabBetween = this.between(end, rangestart, rangeend);

    if (startSlabBetween || endSlabBetween) {
      return true;
    } else {
      return false;
    }
  }

  onAdd() {
    let error = false;
    let copySlab = _.cloneDeep(this.slabs[this.slabs.length - 1]);
    console.log(copySlab);

    if (copySlab.startSlab === null || copySlab.startSlab === '') {
      this.notify.setError('Start slab field required', '');
      return;
    }
    if (copySlab.endSlab === null || copySlab.endSlab === '') {
      this.notify.setError('End slab field required', '');
      return;
    }

    if (copySlab.startSlab < 0 || copySlab.endSlab > 100) {
      this.notify.setError('Range Should be between 0-100', '');
      return;
    }

    if (copySlab.startSlab > copySlab.endSlab) {
      this.notify.setError(
        'Start slab value should be greater then end slab value',
        ''
      );
      return;
    }

    for (let i = 0; i < this.slabs.length - 1; i++) {
      let currentSlab = this.slabs[i];
      let result = this.checkInRange(
        copySlab.startSlab,
        copySlab.endSlab,
        currentSlab.startSlab,
        currentSlab.endSlab
      );
      if (result) {
        error = true;
        this.notify.setError(
          `Range Should not be between ${currentSlab.startSlab} - ${currentSlab.endSlab}`,
          ''
        );
        break;
      }
    }
    if (!error) {
      copySlab.startSlab = copySlab.endSlab + 1;
      copySlab.endSlab = '';
      $(`#slabStart${this.slabs.length - 1}`).prop('disabled', true);
      $(`#slabEnd${this.slabs.length - 1}`).prop('disabled', true);
      $(`#action${this.slabs.length - 1}`).prop('disabled', true);
      this.slabs.push(copySlab);
    }
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
    let data = {
      ...this.slabData,
      slabs: [...this.slabs],
    };
    this.notify.setSuccess(
      'Your configuration saved successfully !',
      'Check console for the log data'
    );
    // this.slabData = this.defaultSlab;
    // this.slabs = [_.cloneDeep(this.defaultSlab)];
    console.log(data);
  }
}
