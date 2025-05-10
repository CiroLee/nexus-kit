export const defaultCode = `import Blockquote from "@/components/ui/Blockquote";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <Blockquote cite="—— Thomas Edison">
      I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
    </Blockquote>
  )
}`;

export const colorsCode = `import Blockquote from "@/components/ui/Blockquote";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <div className="space-y-4">
      <Blockquote colors="primary" cite="—— Thomas Edison">
        I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
      </Blockquote>
      <Blockquote colors="neutral" cite="—— Thomas Edison">
        I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
      </Blockquote>
      <Blockquote colors="secondary" cite="—— Thomas Edison">
        I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
      </Blockquote>
      <Blockquote colors="warning" cite="—— Thomas Edison">
        I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
      </Blockquote>
      <Blockquote colors="danger" cite="—— Thomas Edison">
        I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
      </Blockquote>
    </div>
  )
}`;
