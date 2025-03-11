export interface InputProps {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    value?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
}