import { BoldOptions as TiptapBoldOptions } from '@tiptap/extension-bold';
import { GeneralOptions } from '../type';
export interface BoldOptions extends TiptapBoldOptions, GeneralOptions<BoldOptions> {
}
export declare const Bold: import('@tiptap/core').Mark<BoldOptions, any>;
