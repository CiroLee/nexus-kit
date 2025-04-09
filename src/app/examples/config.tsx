export const examplesConfig = [
  {
    id: 'auth',
    cover: <Authentication />,
    title: 'Authentication',
    description: 'components about auths, such as create account, login',
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
  {
    id: 'profile',
    href: '/examples/profile',
    cover: <Profile />,
    title: 'Profile',
    description: 'components about user profiles',
    account: 2,
    children: [
      {
        title: 'Profile 01',
        name: 'profile-01',
      },
      {
        title: 'Profile 02',
        name: 'profile-02',
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
function Profile() {
  return (
    <svg width="374" height="64" viewBox="0 0 374 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3333 20C17.3333 16.1101 18.8786 12.3796 21.6291 9.62908C24.3796 6.87855 28.1102 5.33331 32 5.33331C35.8898 5.33331 39.6204 6.87855 42.3709 9.62908C45.1214 12.3796 46.6667 16.1101 46.6667 20C46.6667 23.8898 45.1214 27.6203 42.3709 30.3709C39.6204 33.1214 35.8898 34.6666 32 34.6666C28.1102 34.6666 24.3796 33.1214 21.6291 30.3709C18.8786 27.6203 17.3333 23.8898 17.3333 20ZM8 50.6666C8 47.1304 9.40476 43.739 11.9052 41.2386C14.4057 38.7381 17.7971 37.3333 21.3333 37.3333H42.6667C46.2029 37.3333 49.5943 38.7381 52.0948 41.2386C54.5952 43.739 56 47.1304 56 50.6666V58.6666H8V50.6666Z"
        fill="#2B7FFF"
      />
      <rect x="80" y="3" width="176" height="12" rx="2" fill="var(--example-skeleton-item)" />
      <rect x="81" y="23" width="94" height="12" rx="2" fill="var(--example-skeleton-item)" />
      <rect x="81" y="45" width="44" height="16" rx="2" fill="var(--example-skeleton-tag)" />
      <rect x="131" y="45" width="44" height="16" rx="2" fill="var(--example-skeleton-tag)" />
      <rect x="181" y="45" width="44" height="16" rx="2" fill="var(--example-skeleton-tag)" />
      <rect x="286" y="29" width="88" height="32" rx="16" fill="#2B7FFF" />
      <rect x="295" y="39" width="70" height="12" rx="6" fill="#6EA5F9" />
    </svg>
  );
}
