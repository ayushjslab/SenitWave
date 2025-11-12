import Sidebar from '@/components/custom/sidebar'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-20 flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to EchoMark</h1>
        <p className="text-gray-600">
          Hover over the sidebar on the left to expand it and explore your options.
        </p>
      </main>
    </div>
  )
}