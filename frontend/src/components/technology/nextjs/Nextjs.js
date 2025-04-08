// app/page.js
'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Nextjs() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Latest Tech News & Innovations
              </h1>
              <p className="text-xl mb-6">
                Stay updated with cutting-edge technology news, reviews, and insights from industry experts.
              </p>
              <div className="flex space-x-4">
                <Link href="/subscribe" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Subscribe Now
                </Link>
                <Link href="/technology" className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Explore News
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/api/placeholder/600/480" 
                  alt="Latest Technology" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Articles</h2>
            <Link href="/articles" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="relative h-48 w-full">
                  <Image 
                    src={article.imageSrc} 
                    alt={article.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{article.category}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-800 line-clamp-2">{article.title}</h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="relative h-10 w-10 rounded-full bg-gray-200">
                        <Image 
                          src={article.author.avatar} 
                          alt={article.author.name} 
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                      <div className="flex space-x-1 text-xs text-gray-500">
                        <time dateTime={article.publishDate}>{article.publishDate}</time>
                        <span>•</span>
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Explore By Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/category/${category.slug}`}
                className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition duration-300 group"
              >
                <div className="relative h-12 w-12 mx-auto mb-4">
                  <Image 
                    src={category.iconSrc} 
                    alt={category.name} 
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{category.articleCount} Articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Tech Trends</h2>
          <p className="text-lg mb-8 text-blue-100">
            Get the latest technology news and insights delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-blue-200">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
              View All News →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <div key={news.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="md:w-1/3">
                  <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden">
                    <Image 
                      src={news.imageSrc} 
                      alt={news.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{news.category}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-800">{news.title}</h3>
                  <p className="mt-3 text-gray-600">{news.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full bg-gray-200">
                        <Image 
                          src={news.author.avatar} 
                          alt={news.author.name} 
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{news.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{news.publishDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Sample data (in real implementation, this would come from an API or database)
const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing various sectors from healthcare to finance and beyond.",
    imageSrc: "/api/placeholder/400/300",
    category: "Artificial Intelligence",
    author: {
      name: "Alex Johnson",
      avatar: "/api/placeholder/80/80"
    },
    publishDate: "Apr 2, 2025",
    readTime: 8
  },
  {
    id: 2,
    title: "5G Technology: The New Era of Connectivity and Its Impact",
    excerpt: "Discover how 5G networks are changing the way we connect and communicate with unprecedented speeds and reliability.",
    imageSrc: "/api/placeholder/400/300",
    category: "Networking",
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/80/80"
    },
    publishDate: "Apr 1, 2025",
    readTime: 6
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    excerpt: "Learn about how blockchain technology is finding applications beyond digital currencies in supply chain, healthcare, and more.",
    imageSrc: "/api/placeholder/400/300",
    category: "Blockchain",
    author: {
      name: "Michael Rivera",
      avatar: "/api/placeholder/80/80"
    },
    publishDate: "Mar 30, 2025",
    readTime: 7
  }
];

const categories = [
  {
    id: 1,
    name: "Artificial Intelligence",
    slug: "ai",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 42
  },
  {
    id: 2,
    name: "Cybersecurity",
    slug: "cybersecurity",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 38
  },
  {
    id: 3,
    name: "Cloud Computing",
    slug: "cloud-computing",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 31
  },
  {
    id: 4,
    name: "Blockchain",
    slug: "blockchain",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 27
  },
  {
    id: 5,
    name: "Mobile Technology",
    slug: "mobile",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 45
  },
  {
    id: 6,
    name: "IoT Devices",
    slug: "iot",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 24
  },
  {
    id: 7,
    name: "Virtual Reality",
    slug: "vr",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 18
  },
  {
    id: 8,
    name: "Data Science",
    slug: "data-science",
    iconSrc: "/api/placeholder/48/48",
    articleCount: 33
  }
];

const latestNews = [
  {
    id: 1,
    title: "Apple Announces Revolutionary New Chip Architecture for Next-Gen Devices",
    excerpt: "The tech giant reveals their breakthrough semiconductor design that promises to double performance while cutting power consumption in half.",
    imageSrc: "/api/placeholder/300/200",
    category: "Hardware",
    author: {
      name: "David Kim",
      avatar: "/api/placeholder/60/60"
    },
    publishDate: "Apr 5, 2025"
  },
  {
    id: 2,
    title: "EU Passes Landmark Digital Privacy Legislation with Global Implications",
    excerpt: "New comprehensive data protection framework will change how tech companies handle user information across international markets.",
    imageSrc: "/api/placeholder/300/200",
    category: "Policy",
    author: {
      name: "Elena Petrova",
      avatar: "/api/placeholder/60/60"
    },
    publishDate: "Apr 4, 2025"
  },
  {
    id: 3,
    title: "Quantum Computing Breakthrough Solves Previously Impossible Problem",
    excerpt: "Researchers demonstrate quantum advantage with a 500-qubit system that completed calculations that would take conventional supercomputers millennia.",
    imageSrc: "/api/placeholder/300/200",
    category: "Quantum Computing",
    author: {
      name: "Robert Chang",
      avatar: "/api/placeholder/60/60"
    },
    publishDate: "Apr 3, 2025"
  },
  {
    id: 4,
    title: "Microsoft and Google Partner on Open-Source AI Development Framework",
    excerpt: "Tech rivals join forces to create a standardized platform for building and training artificial intelligence models with enhanced safety protocols.",
    imageSrc: "/api/placeholder/300/200",
    category: "Artificial Intelligence",
    author: {
      name: "Jasmine Williams",
      avatar: "/api/placeholder/60/60"
    },
    publishDate: "Apr 2, 2025"
  }
];