import { Editor } from '@tiptap/core';
export declare function clamp(val: number, min: number, max: number): number;
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare const isBoolean: (value: unknown) => value is boolean;
/**
 * Checks if `value` is a function.
 *
 * @param {any} value The value to check.
 * @returns {value is (...args: any[]) => any} Returns `true` if `value` is a function, else `false`.
 *
 * @example
 * isFunction(Array.prototype.slice); // true
 * isFunction(async function () {}); // true
 * isFunction(function* () {}); // true
 * isFunction(Proxy); // true
 * isFunction(Int8Array); // true
 */
export declare function isFunction(value: any): value is (...args: any[]) => any;
export declare function getCssUnitWithDefault(value?: string | number, defaultUnit?: string): string | number | undefined;
/**
 * Checks if the editor has a specific extension method with the given name.
 *
 * @param {Editor} editor - An instance of the editor.
 * @param {string} name - The name of the extension method.
 * @returns {boolean} - Returns true if the specified extension method is present, otherwise returns false.
 */
export declare function hasExtension(editor: Editor, name: string): boolean;
/**
 * Checks if the given extension is enabled and active in the editor.
 *
 * @param {Editor} editor - The editor instance.
 * @param {string} name - The name of the extension.
 * @returns {boolean} Returns true if the extension is enabled and active, otherwise false.
 */
export declare function isExtEnableAndActive(editor: Editor, name: string): boolean;
export { differenceBy, isEqual, omit, throttle } from 'es-toolkit/compat';
