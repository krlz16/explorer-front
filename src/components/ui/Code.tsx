import Card from '@/components/ui/Card'

type props = {
  code: string | undefined
  height?: string
}
function Code({ code, height }: props) {
  return (
    <Card pd="p3" className={`bg-gray-600 rounded-xl px-4 py-1 break-all overflow-y-auto ${height ? height : 'max-h-16'}`}>
      <pre className="overflow-auto">
        <code className={`text-sm`}>{code}</code>
      </pre>
    </Card>
  )
}

export default Code
