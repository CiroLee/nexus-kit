export const defaultCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://dub.sh/mUoRWra" className="h-70 w-50" alt="demo image" />
  )
}`;

export const roundedCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://dub.sh/mUoRWra" className="h-70 w-50" alt="demo image" />
  )
}`;

export const aspectRatioCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://dub.sh/mUoRWra" className="w-50" aspectRatio={16 / 9} alt="demo image" />
  )
}`;

export const fitCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://dub.sh/mUoRWra" className="h-40 w-80 rounded border border-red-400" fit="contain" alt="demo image" />
  )
}`;
