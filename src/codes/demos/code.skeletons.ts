export const defaultCode = `import { SkeletonText } from "@/components/ui/Skeleton";

export default function Page() {
  return (
    <SkeletonText className="max-w-100" />
  )
}
`;

export const variantCode = `import { SkeletonText } from "@/components/ui/Skeleton";

export default function Page() {
  return (
    <SkeletonText variant="shimmer" className="max-w-100" />
  )
}
`;

export const combineCode = `import { SkeletonText, SkeletonBlock, SkeletonCircle } from "@/components/ui/Skeleton";

export default function Page() {
  return (
    <div className="flex gap-4">
      <SkeletonCircle />
      <div className="w-100 space-y-3">
        <SkeletonText />
        <SkeletonText className="w-[80%]" />
        <SkeletonBlock />
      </div>
    </div>
  )
}`;
