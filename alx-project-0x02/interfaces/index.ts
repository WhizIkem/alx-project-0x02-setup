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
