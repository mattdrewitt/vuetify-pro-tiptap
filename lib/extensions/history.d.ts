import { UndoRedoOptions } from '@tiptap/extensions';
import { GeneralOptions } from '../type';
export interface HistoryOptions extends UndoRedoOptions, GeneralOptions<HistoryOptions> {
}
export declare const History: import('@tiptap/core').Extension<HistoryOptions, any>;
