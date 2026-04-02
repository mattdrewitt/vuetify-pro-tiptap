import { FontFamilyOptions as TiptapFontFamilyOptions } from '@tiptap/extension-font-family';
import { FontFamilyProps } from '../constants/define';
import { GeneralOptions } from '../type';
/**
 * Represents the interface for font family options, extending TiptapFontFamilyOptions and GeneralOptions.
 */
export interface FontFamilyOptions extends TiptapFontFamilyOptions, GeneralOptions<FontFamilyOptions> {
    /**
     * List of available font family properties
     *
     * @default DEFAULT_FONT_FAMILY_LIST
     */
    fontFamilies: FontFamilyProps[];
}
export declare const FontFamily: import('@tiptap/core').Extension<FontFamilyOptions, any>;
