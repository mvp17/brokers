import { Injectable } from '@angular/core';
import { ElectricityPredefinedRatesResultDataTable } from '../interfaces/electricity-predefined-rates-result-data-table';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  public results: ElectricityPredefinedRatesResultDataTable[];
  public totalRecords: number;
  public pageNumber: number;
  public pageResults: number;
  public orderBy: string;

  constructor() {
    this.results = [];
    this.totalRecords = 0;
    this.pageNumber = 0;
    this.pageResults = 0;
    this.orderBy = '';
  }
}

export const HEADERS = {
  tableHeader: [
    {
      width: '',
      value: 'RATE',
      windowSize: 0,
      isPrincipal: false,
      isOrdenable: true,
      isFiltrable: true,
      order: '',
      busqueda: '',
      isHidden: false,
      orderName: 'rate',
    },
    {
      width: '',
      value: 'PRODUCT TYPE',
      windowSize: 0,
      isPrincipal: false,
      isOrdenable: true,
      isFiltrable: true,
      order: '',
      busqueda: '',
      isHidden: false,
      orderName: 'productType',
    },
    {
      width: '',
      value: 'SINGLE PRICE',
      windowSize: 0,
      isPrincipal: false,
      isOrdenable: true,
      isFiltrable: true,
      order: '',
      busqueda: '',
      isHidden: false,
      orderName: 'singlePrice',
    },
    {
      width: '',
      value: 'GREEN POWER',
      windowSize: 0,
      isPrincipal: false,
      isOrdenable: true,
      isFiltrable: true,
      order: '',
      busqueda: '',
      isHidden: false,
      orderName: 'greenPower',
    },
    {
      width: '',
      value: '',
      windowSize: 0,
      isPrincipal: false,
      isOrdenable: false,
      isFiltrable: false,
      order: '',
      busqueda: '',
      isHidden: false,
      orderName: '',
      action: 'excel',
    }
  ],
};