export const starCode = `import { Star } from '@/components/ui/StarRating';

export default function Page() {
  return (
    <Star value={0.4} />
  )
}`;

export const starRatingCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <StarRating value={3.4} max={5} />
  )
}`;

export const sizeCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <StarRating size={24} value={3.4} max={5} />
  )
}`;

export const customColorsCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <div className="space-y-4">
      <StarRating
        size={24}
        defaultColor={{ light: 'var(--color-purple-200)', dark: 'var(--color-purple-900)' }}
        fillColor={{ light: 'var(--color-purple-500)', dark: 'var(--color-purple-700)' }}
        value={3.4}
        max={5}
      />
      <StarRating size={24} defaultColor={{ light: '#ffc7d1', dark: '#0d1a3e' }} fillColor={{ light: '#fa1818', dark: '#0d39b1' }} value={3.4} max={5} />
      <StarRating size={24} defaultColor="gray" fillColor="black" value={3.4} max={5} />
    </div>
  )
}`;
