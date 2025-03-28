export interface NavbarRouteProps {
  route: string;
  title: string;
}

export interface NavbarListProps {
  route: string;
  title: string;
  isActive: boolean;
  isScrolled: boolean;
  isOpen: boolean;
}

export interface FormChangeProps {
  field: string;
  value: any;
}