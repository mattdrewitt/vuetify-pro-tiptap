import { HeadingOptions as TiptapHeadingOptions } from '@tiptap/extension-heading';
import { GeneralOptions } from '../type';
export interface HeadingOptions extends TiptapHeadingOptions, GeneralOptions<HeadingOptions> {
}
export declare const Heading: import('@tiptap/core').Node<HeadingOptions, any>;
