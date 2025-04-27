export const defaultCode = `import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
     <Highlight query="emphasize">
       Using the Highlight component to emphasize content
     </Highlight>
  )
}
`;

export const multipleCode = `import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
     <Highlight query={['component', 'emphasize']}>
       Using the Highlight component to emphasize content
     </Highlight>
  )
}
`;

export const customCode = `import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
    <Highlight query="emphasize" highLightClass="italic bg-primary">
      Using the Highlight component to emphasize content
    </Highlight>
  )
}
`;
