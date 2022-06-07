import { RankedTester } from '@jsonforms/core';
export interface WithClassname {
    className?: string;
}
/**
 * Additional renderer props specific to vanilla renderers.
 */
export interface VanillaRendererProps extends WithClassname {
    classNames?: {
        [className: string]: string;
    };
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
export declare const silicaRenderers: {
    tester: RankedTester;
    renderer: any;
}[];
export declare const silicaCells: {
    tester: RankedTester;
    cell: any;
}[];
