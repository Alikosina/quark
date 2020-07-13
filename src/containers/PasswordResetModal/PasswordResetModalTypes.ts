export interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PasswordResetFormProps {
  onSubmit: (email: string) => void;
}
