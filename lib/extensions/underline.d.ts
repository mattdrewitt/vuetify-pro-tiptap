import { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline';
import { GeneralOptions } from '../type';
export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {
}
export declare const Underline: import('@tiptap/core').Mark<UnderlineOptions, any>;
