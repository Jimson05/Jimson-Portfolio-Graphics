export type NavigationTab = 'work' | 'logofolio' | 'branding' | 'ui-ux' | 'print-and-packaging' | 'about';

export interface LogoMark {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  color: string;
  symbolType: 'svg' | 'custom';
  description: string;
  gridSpec: string;
  ratio: string;
  tags: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'branding' | 'logo' | 'uiux' | 'packaging';
  year: string;
  clientSector: string;
  discipline: string;
  typography: string;
  description: string;
  heroImage: string;
  secondaryImage?: string;
  additionalImages?: string[];
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
  featured?: boolean;
}
