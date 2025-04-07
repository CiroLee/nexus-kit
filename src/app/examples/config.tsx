export const examplesConfig = [
  {
    id: 'auth',
    cover: <Authentication />,
    title: 'Authentication',
    account: 2,
    href: '/examples/auth',
    children: [
      {
        title: 'Create Account 01',
        name: 'create-account-01',
      },
      {
        title: 'Create Account 02',
        name: 'create-account-02',
      },
    ],
  },
];
function Authentication({ className }: { className?: string }) {
  return (
    <svg width="356" height="244" viewBox="0 0 356 244" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="192" width="356" height="52" rx="8" fill="#2B7FFF" />
      <rect x="12" y="204" width="332" height="28" rx="4" fill="#6EA5F9" />
      <rect width="356" height="80" rx="8" fill="var(--example-skeleton-bg)" />
      <rect x="12" y="12" width="246" height="20" rx="4" fill="var(--example-skeleton-item)" />
      <rect x="12" y="44" width="324" height="20" rx="4" fill="var(--example-skeleton-item)" />
      <rect y="98" width="356" height="80" rx="8" fill="var(--example-skeleton-bg)" />
      <rect x="12" y="110" width="246" height="20" rx="4" fill="var(--example-skeleton-item)" />
      <rect x="12" y="142" width="324" height="20" rx="4" fill="var(--example-skeleton-item)" />
    </svg>
  );
}
