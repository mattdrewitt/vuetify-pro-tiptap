import { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block';
import { GeneralOptions } from '../type';
export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {
}
export declare const CodeBlock: import('@tiptap/core').Node<CodeBlockOptions, any>;
