import { JsonSchema, Layout } from '@jsonforms/core';
export interface RenderChildrenProps {
    layout: Layout;
    schema: JsonSchema;
    className: string;
    path: string;
}
export declare const renderChildren: (layout: Layout, schema: JsonSchema, className: string, path: string, enabled: boolean) => JSX.Element[];
