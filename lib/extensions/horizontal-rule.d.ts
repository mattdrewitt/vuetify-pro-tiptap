import { HorizontalRuleOptions as TiptapHorizontalRuleOptions } from '@tiptap/extension-horizontal-rule';
import { GeneralOptions } from '../type';
export interface HorizontalRuleOptions extends TiptapHorizontalRuleOptions, GeneralOptions<HorizontalRuleOptions> {
}
export declare const HorizontalRule: import('@tiptap/core').Node<HorizontalRuleOptions, any>;
