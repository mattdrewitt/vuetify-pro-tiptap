import { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic';
import { GeneralOptions } from '../type';
export interface ItalicOptions extends TiptapItalicOptions, GeneralOptions<ItalicOptions> {
}
export declare const Italic: import('@tiptap/core').Mark<ItalicOptions, any>;
