export const defaultCode = `import SignaturePanel from "@/components/ui/SignaturePanel";

export default function Page() {
  return (
    <SignaturePanel className="h-80 overflow-hidden rounded" />
  )
}`;

export const clearAndSaveCode = `import SignaturePanel from "@/components/ui/SignaturePanel";
import { useRef, useState } from "react";

export default function Page() {
  const [isEmptySignature, setIsEmptySignature] = useState(true);
  const signatureMethodRef = useRef<SignaturePanelMethod>(null);
  const handleClear = async () => {
    await signatureMethodRef.current?.clear();
    setIsEmptySignature(true);
  };

  const handleSave = async () => {
    const data = await signatureMethodRef.current?.save();
    if (data) {
      const a = document.createElement('a');
      a.href = data;
      a.download = 'signature.png';
      a.click();
    }
  };
  return (
    <div>
      <SignaturePanel ref={signatureMethodRef} className="h-80 overflow-hidden rounded" onDrawEnd={() => setIsEmptySignature(false)} />
        <div className="mt-4 flex gap-2">
          <Button disabled={isEmptySignature} onClick={handleClear}>
            Clear
          </Button>
          <Button disabled={isEmptySignature} onClick={handleSave}>
            Save
          </Button>
        </div>
    </div>
  )
}`;

export const customCode = `import SignaturePanel from "@/components/ui/SignaturePanel";

export default function Page() {
  return (
    <SignaturePanel panelColor="#d4ecfd" lineColor="red" lineWidth={4} className="h-80 overflow-hidden rounded" />
  )
}`;
