export type SignupFormState = {
  errors?: {
    fullName?: string[];
    email?: string[];
    password?: string[];
    general?: string[];
  };
  success?: boolean;
};

export type TaskState = {
    errors?: {
      Name?: string[];
      description?: string[];
      created?: string[];
      dueDate?: string[];
      general?: string[];
    };
    success?: boolean;
  };
  