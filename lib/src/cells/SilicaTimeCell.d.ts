import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import { VanillaRendererProps } from '../index';
export declare const SilicaTimeCell: (props: CellProps & VanillaRendererProps) => JSX.Element;
/**
 * Default tester for date controls.
 * @type {RankedTester}
 */
export declare const timeCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
