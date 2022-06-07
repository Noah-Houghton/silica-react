import { Category, JsonSchema } from '@jsonforms/core';
export interface CategoryProps {
    category: Category;
    schema: JsonSchema;
    path: string;
}
export declare const SilicaSingleCategory: ({ category, schema, path }: CategoryProps) => JSX.Element;
