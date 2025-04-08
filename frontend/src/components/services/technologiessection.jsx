import React from 'react'

function technologiessection() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-6">Technologies</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Leverage the Technical Expertise of A Top Software Development Company to Own Industry Specific Software Solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Front-end</h3>
              <div className="space-y-4">
                <TechItem text="Angular" />
                <TechItem text="ReactJS" />
                <TechItem text="VueJS" />
                <TechItem text="JavaScript" />
                <TechItem text="TypeScript" />
                <TechItem text="NextJS" />
                <TechItem text="NuxtJS" />
                <TechItem text="Tailwind CSS" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Mobile</h3>
              <div className="space-y-4">
                <TechItem text="Swift" />
                <TechItem text="Kotlin" />
                <TechItem text="React Native" />
                <TechItem text="Flutter" />
                <TechItem text="Xamarin" />
                <TechItem text="Unity3D" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Cloud / DevOps</h3>
              <div className="space-y-4">
                <TechItem text="AWS" />
                <TechItem text="Azure" />
                <TechItem text="Google Cloud" />
                <TechItem text="Oracle" />
                <TechItem text="Jenkins" />
                <TechItem text="Maven" />
                <TechItem text="Terraform" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">AI/ML</h3>
              <div className="space-y-4">
                <TechItem text="NLP" />
                <TechItem text="Deep Learning" />
                <TechItem text="Computer Vision" />
                <TechItem text="ChatGPT" />
                <TechItem text="Generative AI" />
                <TechItem text="Chatbot" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    
  )
}

export default technologiessection