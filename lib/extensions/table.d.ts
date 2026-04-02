import { TableCellOptions, TableHeaderOptions, TableRowOptions, TableOptions as TiptapTableOptions } from '@tiptap/extension-table';
import { GeneralOptions } from '../type';
/**
 * Represents the interface for table options, extending TiptapTableOptions and GeneralOptions.
 */
export interface TableOptions extends TiptapTableOptions, GeneralOptions<TableOptions> {
    /** options for table rows */
    tableRow?: Partial<TableRowOptions>;
    /** options for table headers */
    tableHeader?: Partial<TableHeaderOptions>;
    /** options for table cells */
    tableCell?: Partial<TableCellOptions>;
}
export declare const Table: import('@tiptap/core').Node<TableOptions, any>;
