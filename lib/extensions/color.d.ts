import { ColorOptions as TiptapColorOptions } from '@tiptap/extension-color';
import { GeneralOptions } from '../type';
export interface ColorOptions extends TiptapColorOptions, GeneralOptions<ColorOptions> {
}
export declare const Color: import('@tiptap/core').Extension<ColorOptions, any>;
