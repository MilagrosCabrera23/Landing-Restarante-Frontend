interface FormError{
    message?: string;
}

export function FormError({ message }: FormError) {
    if (!message) return null;

    return (
        <div className="flex items-center gap-1 animate-in">
        <p className="text-sm text-red-600">
            {message}
        </p>
        </div>
    );
}