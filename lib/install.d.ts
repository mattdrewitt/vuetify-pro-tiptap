import { Extensions } from '@tiptap/core';
import { Plugin } from 'vue';
export interface InstallationOptions {
    lang?: string;
    fallbackLang?: string;
    markdownTheme?: string;
    components?: Record<string, any>;
    extensions?: Extensions;
}
export declare function createVuetifyProTipTap(opts: InstallationOptions): Plugin;
