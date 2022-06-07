/// <reference types="react" />
import { ControlProps, ControlState, RankedTester } from '@jsonforms/core';
import { Control } from '@jsonforms/react';
import { VanillaRendererProps } from '../index';
export declare class SilicaInputControl extends Control<ControlProps & VanillaRendererProps, ControlState> {
    render(): JSX.Element;
}
export declare const inputControlTester: RankedTester;
declare const _default: (props: any) => JSX.Element;
export default _default;
