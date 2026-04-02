import { StyleValue } from 'vue';
import { IconsOptions } from '../../../../constants/icons';
import { ButtonViewReturnComponentProps } from '../../../../type';
export interface ActionMenuButtonItem {
    title: string;
    icon?: keyof IconsOptions;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: StyleValue;
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
