/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import { RankedTester } from '@jsonforms/core';

import {
  SilicaBooleanCell,
  booleanCellTester,
  SilicaDateCell,
  dateCellTester,
  dateTimeCellTester,
  SilicaEnumCell,
  enumCellTester,
  SilicaIntegerCell,
  integerCellTester,
  SilicaNumberCell,
  numberCellTester,
  SilicaSliderCell,
  sliderCellTester,
  SilicaTextAreaCell,
  textAreaCellTester,
  SilicaTextCell,
  textCellTester,
  SilicaTimeCell,
  timeCellTester
} from './cells';

import { SilicaInputControl, inputControlTester, SilicaRadioGroupControl, radioGroupControlTester, OneOfSilicaRadioGroupControl, oneOfSilicaRadioGroupControlTester,  } from './controls';

import {
  SilicaArrayControl,
  arrayControlTester,
  SilicaCategorization,
  categorizationTester,
  SilicaLabelRenderer,
  labelRendererTester,
  SilicaTableArrayControl,
  tableArrayControlTester
} from './complex';

import {
  SilicaGroupLayout,
  groupTester,
  SilicaHorizontalLayout,
  horizontalLayoutTester,
  SilicaVerticalLayout,
  verticalLayoutTester
} from './layouts';
import SilicaDateTimeCell from './cells/SilicaDateTimeCell';

export interface WithClassname {
  className?: string;
}

/**
 * Additional renderer props specific to vanilla renderers.
 */
export interface VanillaRendererProps extends WithClassname {
  classNames?: { [className: string]: string };
  /**
   * Returns all classes associated with the given style.
   * @param {string} string the style name
   * @param args any additional args necessary to calculate the classes
   * @returns {string[]} array of class names
   */
  getStyle?(string: string, ...args: any[]): string[];

  /**
   * Returns all classes associated with the given style as a single class name.
   * @param {string} string the style name
   * @param args any additional args necessary to calculate the classes
   * @returns {string[]} array of class names
   */
  getStyleAsClassName?(string: string, ...args: any[]): string;
}

export interface WithChildren {
  children: any;
}

export * from './actions';
export * from './controls';
export * from './complex';
export * from './cells';
export * from './layouts';
export * from './reducers';
export * from './util';
export * from './styles';

export const silicaRenderers: { tester: RankedTester; renderer: any }[] = [
  { tester: inputControlTester, renderer: SilicaInputControl },
  { tester: radioGroupControlTester, renderer: SilicaRadioGroupControl },
  { tester: oneOfSilicaRadioGroupControlTester, renderer: OneOfSilicaRadioGroupControl },
  { tester: arrayControlTester, renderer: SilicaArrayControl },
  { tester: labelRendererTester, renderer: SilicaLabelRenderer },
  { tester: categorizationTester, renderer: SilicaCategorization },
  { tester: tableArrayControlTester, renderer: SilicaTableArrayControl },
  { tester: groupTester, renderer: SilicaGroupLayout },
  { tester: verticalLayoutTester, renderer: SilicaVerticalLayout },
  { tester: horizontalLayoutTester, renderer: SilicaHorizontalLayout }
];

export const silicaCells: { tester: RankedTester; cell: any }[] = [
  { tester: booleanCellTester, cell: SilicaBooleanCell },
  { tester: dateCellTester, cell: SilicaDateCell },
  { tester: dateTimeCellTester, cell: SilicaDateTimeCell },
  { tester: enumCellTester, cell: SilicaEnumCell },
  { tester: integerCellTester, cell: SilicaIntegerCell },
  { tester: numberCellTester, cell: SilicaNumberCell },
  { tester: sliderCellTester, cell: SilicaSliderCell },
  { tester: textAreaCellTester, cell: SilicaTextAreaCell },
  { tester: textCellTester, cell: SilicaTextCell },
  { tester: timeCellTester, cell: SilicaTimeCell }
];
