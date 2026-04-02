import { CodeOptions as TiptapCodeOptions } from '@tiptap/extension-code';
import { GeneralOptions } from '../type';
export interface CodeOptions extends TiptapCodeOptions, GeneralOptions<CodeOptions> {
}
export declare const Code: import('@tiptap/core').Mark<CodeOptions, any>;
