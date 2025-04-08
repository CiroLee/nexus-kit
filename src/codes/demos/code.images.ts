export const defaultCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://bit.ly/427Ny7S" h={150} alt="playing guitar" />
  )
}
`;
export const fitCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://bit.ly/4jit4yF" fit="cover" w={150} h={200} alt="building" />
  )
}
`;

export const aspectRatioCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://bit.ly/4jit4yF" fit="cover" w={150} aspectRatio={16 / 9} alt="building" />
  )
}
`;

export const nativeWHCode = `import Image from "@/components/ui/Image";

export default function Page() {
  return (
    <Image src="https://bit.ly/4jit4yF" fit="cover" width={622} height={943} w={150} aspectRatio={16 / 9} alt="building" />
  )
}
`;
