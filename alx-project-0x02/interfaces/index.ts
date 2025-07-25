// Interfaces for the application

export interface CardProps {
  title: string;
  content: string;
}

// PostModal Props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

// Button props 
export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick: () => void;
}

// Post Props
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// User Props
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}