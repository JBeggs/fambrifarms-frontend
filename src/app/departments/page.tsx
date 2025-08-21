import { DepartmentShowcase } from '@/components/template/DepartmentShowcase';
import { Navigation } from '@/components/template/Navigation';

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center py-12 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Our Departments
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our carefully curated departments, each managed by dedicated experts 
                who ensure the highest quality products for your restaurant.
              </p>
            </div>
            
            {/* Department Showcase */}
            <DepartmentShowcase />
            
            {/* Additional Information */}
            <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🌟 Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Every product in our departments undergoes rigorous quality checks. 
                    We work directly with local farms and trusted suppliers to ensure 
                    you receive only the freshest, highest-quality ingredients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🚚 Reliable Delivery
                  </h3>
                  <p className="text-gray-600">
                    Our efficient delivery system ensures your orders arrive fresh and on time. 
                    We understand the importance of timely delivery for restaurant operations 
                    and have built our logistics around your needs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Explore Our Products?
                </h3>
                <p className="text-gray-600 mb-6">
                  Click on any department above to view our full product catalog
                </p>
                <a
                  href="/products"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-block"
                >
                  Browse All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 