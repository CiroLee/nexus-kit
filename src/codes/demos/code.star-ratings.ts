export const starCode = `import { Star } from '@/components/ui/StarRating';";

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
    <StarRating defaultColor="gray" fillColor="red" value={3.4} max={5} />
  )
}`;
