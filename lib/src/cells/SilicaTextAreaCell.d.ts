import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import { VanillaRendererProps } from '../index';
export declare const SilicaTextAreaCell: (props: CellProps & VanillaRendererProps) => JSX.Element;
/**
 * Tester for a multi-line string control.
 * @type {RankedTester}
 */
export declare const textAreaCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
