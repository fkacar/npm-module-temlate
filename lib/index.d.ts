import { FC } from 'react';
import { InputLabelProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { TextFieldProps } from '../../../../node_modules/@mui/material/TextField/TextField';
export interface IPropsMuiTextField {
    id: string;
    value?: string | any[];
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
    label?: string;
    type?: string;
    InputProps?: TextFieldProps;
    InputLabelProps?: Partial<InputLabelProps>;
    onChange?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    disabled?: boolean;
    className?: string;
    required?: boolean | undefined;
    placeholder?: string;
    sx?: SxProps<any>;
    multiline?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    defaultValue?: any;
}
declare const MuiTextField: FC<TextFieldProps>;
export default MuiTextField;
