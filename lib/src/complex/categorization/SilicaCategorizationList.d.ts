import { Categorization, Category } from '@jsonforms/core';
export interface CategorizationProps {
    categorization: Categorization;
    selectedCategory: Category;
    depth: number;
    onSelect: any;
    subcategoriesClassName: string;
    groupClassName: string;
}
export declare const SilicaCategorizationList: ({ categorization, selectedCategory, depth, onSelect, subcategoriesClassName, groupClassName }: CategorizationProps) => JSX.Element;
