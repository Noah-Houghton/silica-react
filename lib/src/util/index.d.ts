import { JsonFormsState, OwnPropsOfCell, OwnPropsOfControl, OwnPropsOfRenderer, RendererProps, StatePropsOfCell, StatePropsOfControl } from '@jsonforms/core';
import { VanillaRendererProps } from '../index';
import { ComponentType } from 'react';
/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps existing mapStateToProps function
 * @returns {VanillaControlStateProps} vanilla-specific control props
 */
export declare const addVanillaControlProps: <P extends StatePropsOfControl>(mapStateToProps: (s: JsonFormsState, p: OwnPropsOfControl) => P) => (state: JsonFormsState, ownProps: OwnPropsOfControl) => StatePropsOfControl & VanillaRendererProps;
export declare const withVanillaControlProps: (Component: ComponentType<any>) => (props: any) => JSX.Element;
/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps an existing mapStateToProps function for retrieving layout props
 * @returns {VanillaLayoutProps} vanilla specific layout props
 */
export declare const addVanillaLayoutProps: (mapStateToProps: (s: JsonFormsState, p: OwnPropsOfRenderer) => RendererProps) => (state: JsonFormsState, ownProps: OwnPropsOfRenderer) => RendererProps & VanillaRendererProps;
export declare const addVanillaCellProps: (mapStateToCellsProps: (s: JsonFormsState, p: OwnPropsOfCell) => StatePropsOfCell) => (state: JsonFormsState, ownProps: OwnPropsOfCell) => StatePropsOfCell & VanillaRendererProps;
export declare const withVanillaCellProps: (Component: ComponentType<any>) => (props: any) => JSX.Element;
export declare const withVanillaEnumCellProps: (Component: ComponentType<any>) => (props: any) => JSX.Element;
export declare const withVanillaBooleanCellProps: (Component: ComponentType<any>) => (props: any) => JSX.Element;
