import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import { VanillaRendererProps } from '../index';
export declare const SilicaDateTimeCell: (props: CellProps & VanillaRendererProps) => JSX.Element;
/**
 * Default tester for datetime controls.
 * @type {RankedTester}
 */
export declare const dateTimeCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
