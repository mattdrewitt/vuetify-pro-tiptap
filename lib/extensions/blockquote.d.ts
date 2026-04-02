import { BlockquoteOptions as TiptapBlockquoteOptions } from '@tiptap/extension-blockquote';
import { GeneralOptions } from '../type';
export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions<BlockquoteOptions> {
}
export declare const Blockquote: import('@tiptap/core').Node<BlockquoteOptions, any>;
