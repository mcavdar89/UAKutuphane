export interface FormControlTemplate {
    label?: string;
    key: string;
    value?: any;
    inputType?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    readonly?: boolean;   
    disabled?: boolean; 
}