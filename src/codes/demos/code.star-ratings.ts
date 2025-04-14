export const starCode = `import { Star } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <Star score={0.4} />
  )
}
`;

export const starRatingCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <StarRating rating={3.4} maxStars={5} />
  )
}
`;

export const sizeCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <StarRating size={24} rating={3.4} maxStars={5} />
  )
}
`;

export const customColorsCode = `import { StarRating } from '@/components/ui/StarRating';";

export default function Page() {
  return (
    <StarRating defaultColor="gray" fillColor="red" rating={3.4} maxStars={5} />
  )
}
`;
