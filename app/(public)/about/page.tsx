import { STORE_CONFIG } from '@/lib/storeConfig'

export default function AboutPage() {
  return (
    <main className="py-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About {STORE_CONFIG.name}</h1>
        
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our History</h2>
              <p>
                It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                below for those interested.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
              <li>Ut labore et dolore magna aliqua</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}