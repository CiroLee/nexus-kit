import { type TemplateCoverProps } from '@/components/business/TemplateCover';

export const templatesConfig: (TemplateCoverProps & { id: string })[] = [
  {
    id: 'nexus-starter',
    type: 'admin',
    title: 'Nexus Starter',
    content: 'Nexus-Starter is a modern admin template project built with Nexus-Kit and Vite.',
    href: 'https://nexus-starter.netlify.app/',
    cover: {
      light: '/images/cover/nexus-admin-light.png',
      dark: '/images/cover/nexus-admin-dark.png',
    },
  },
];
