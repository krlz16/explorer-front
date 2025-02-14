import { TxIcon } from "@/common/icons";

export default function layout({ children }: { children: React.ReactNode}) {
    return (
      <div>
        <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
          <TxIcon className="w-6 h-6" />
          EAS - Attestations
        </h1>
        { children }
      </div>
    )
  }
  