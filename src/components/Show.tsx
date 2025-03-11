import React from 'react';

interface ShowProps {
  if: unknown;
  else?: React.ReactNode;
  children: React.ReactNode;
}
export default function Show({ if: cond, else: elseContent, children }: ShowProps) {
  return cond ? <>{children}</> : elseContent;
}
