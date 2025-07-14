import React from 'react';

interface ShowProps {
  when: unknown;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}
export default function Show({ when: cond, fallback, children }: ShowProps) {
  return cond ? <>{children}</> : fallback;
}
