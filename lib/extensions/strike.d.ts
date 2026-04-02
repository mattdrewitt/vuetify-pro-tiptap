import { StrikeOptions as TiptapStrikeOptions } from '@tiptap/extension-strike';
import { GeneralOptions } from '../type';
export interface StrikeOptions extends TiptapStrikeOptions, GeneralOptions<StrikeOptions> {
}
export declare const Strike: import('@tiptap/core').Mark<StrikeOptions, any>;
