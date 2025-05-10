import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Copy, Check, Sparkles, Target, Brain, Network, ArrowRight, Lightbulb, Code, Zap } from 'lucide-react';

const PromptMasteryGuide = () => {
  const [activeSection, setActiveSection] = useState('foundation');
  const [copied, setCopied] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sections = {
    foundation: {
      title: "Foundation",
      color: "from-blue-500 to-teal-500",
      icon: <Brain className="w-6 h-6" />,
      description: "Master the fundamentals of effective prompting"
    },
    advanced: {
      title: "Advanced Techniques",
      color: "from-purple-500 to-indigo-500",
      icon: <Zap className="w-6 h-6" />,
      description: "Level up with sophisticated prompting strategies"
    },
    workshop: {
      title: "Creative Workshop",
      color: "from-orange-500 to-red-500",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Hands-on exercises for creative professionals"
    }
  };

  const foundationCards = [
    {
      id: 'framework',
      title: 'The 6-Step Framework',
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Task + Context + Examples + Persona + Format + Tone
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Task', icon: <Target className="w-5 h-5" />, desc: 'Clear, specific action', example: '"Generate a social media post..."' },
              { name: 'Context', icon: <Network className="w-5 h-5" />, desc: 'Background information', example: '"...for a tech startup launch..."' },
              { name: 'Examples', icon: <Code className="w-5 h-5" />, desc: 'Style references', example: '"...following this tone: [sample]..."' },
              { name: 'Persona', icon: <Brain className="w-5 h-5" />, desc: 'Role assignment', example: '"You are a marketing expert..."' },
              { name: 'Format', icon: <div className="w-5 h-5 border-2 border-current" />, desc: 'Output structure', example: '"...as 3 bullet points..."' },
              { name: 'Tone', icon: <Sparkles className="w-5 h-5" />, desc: 'Emotional style', example: '"...with enthusiastic energy"' }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-blue-600">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-1">{item.desc}</p>
                <p className="text-xs text-gray-500 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'quality',
      title: 'The Golden Rule',
      content: (
        <div className="text-center space-y-6">
          <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Quality In = Quality Out
          </div>
          <div className="max-w-md mx-auto text-gray-600">
            The clarity and specificity of your prompt directly determines the quality of AI responses.
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">❌ Vague Prompt</h4>
              <p className="text-sm text-red-700">"Write something about marketing"</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">✅ Specific Prompt</h4>
              <p className="text-sm text-green-700">"Write a 500-word blog post about content marketing strategies for B2B SaaS companies, focusing on LinkedIn and email automation"</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'iteration',
      title: 'Iterative Refinement',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Refinement Cycle</h3>
            <p className="text-gray-600">Prompting is rarely perfect on the first try</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { step: 'Start Simple', color: 'bg-blue-100 text-blue-800' },
              { step: 'Add Context', color: 'bg-purple-100 text-purple-800' },
              { step: 'Test & Evaluate', color: 'bg-green-100 text-green-800' },
              { step: 'Refine & Retry', color: 'bg-orange-100 text-orange-800' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`px-4 py-2 rounded-full ${item.color} font-medium`}>
                  {item.step}
                </div>
                {index < 3 && <ArrowRight className="w-5 h-5 text-gray-400" />}
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Pro Tip:</h4>
            <p className="text-sm text-gray-600">Use iteration markers in prompts like "V1:", "V2:" to track your refinements.</p>
          </div>
        </div>
      )
    }
  ];

  const advancedCards = [
    {
      id: 'chain-thought',
      title: 'Chain of Thought Prompting',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Guide AI through step-by-step reasoning for complex tasks.</p>
          
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2">Structure:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                <p>Define the problem</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                <p>Break into steps</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                <p>Solve each step</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                <p>Combine for answer</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 text-gray-100 rounded-lg font-mono text-sm">
            <p><span className="text-yellow-400">Example:</span></p>
            <p className="mt-2">"Let's solve this step by step:</p>
            <p>1. First, identify the key variables...</p>
            <p>2. Next, apply the relevant formula...</p>
            <p>3. Then, calculate the intermediate result...</p>
            <p>4. Finally, arrive at the conclusion..."</p>
          </div>
        </div>
      )
    },
    {
      id: 'few-shot',
      title: 'Few-Shot Learning',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Provide examples to establish patterns and style.</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded border border-purple-200">
              <h4 className="font-semibold text-sm">Zero-Shot</h4>
              <p className="text-sm text-gray-600">"Translate to French: 'Hello'"</p>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded border border-purple-200">
              <h4 className="font-semibold text-sm">One-Shot</h4>
              <p className="text-sm text-gray-600">"Example: 'Hello' → 'Bonjour'<br/>Translate: 'Goodbye'"</p>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded border border-purple-300">
              <h4 className="font-semibold text-sm">Few-Shot (Best)</h4>
              <p className="text-sm text-gray-600">
                "Examples:<br/>
                'Hello' → 'Bonjour'<br/>
                'Thank you' → 'Merci'<br/>
                'Goodbye' → 'Au revoir'<br/>
                Translate: 'How are you?'"
              </p>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Best For:</h4>
            <div className="flex flex-wrap gap-2">
              {['Pattern Recognition', 'Style Consistency', 'Format Matching', 'Tone Replication'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'meta-prompting',
      title: 'Meta-Prompting',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Use AI to help you create better prompts.</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold mb-2">Technique 1: Prompt Generator</h4>
              <div className="p-3 bg-gray-800 text-gray-100 rounded text-sm font-mono">
                "Create 5 different prompts for generating creative project names for a sustainable fashion startup"
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold mb-2">Technique 2: Prompt Optimizer</h4>
              <div className="p-3 bg-gray-800 text-gray-100 rounded text-sm font-mono">
                "Analyze this prompt and suggest 3 ways to make it more effective: [your prompt]"
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-sm mb-2">💡 Pro Tip:</h4>
            <p className="text-sm text-gray-700">Ask AI to critique your prompts from different perspectives (clarity, specificity, completeness).</p>
          </div>
        </div>
      )
    }
  ];

  const workshopCards = [
    {
      id: 'creative-brief',
      title: 'Creative Brief Generator',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Generate comprehensive creative briefs using structured prompts.</p>
          
          <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-3">Template:</h4>
            <div className="space-y-2 text-sm font-mono text-gray-800">
              <p><span className="text-green-600">Task:</span> Create a creative brief for [project type]</p>
              <p><span className="text-green-600">Context:</span> Client: [name], Industry: [type], Budget: [range]</p>
              <p><span className="text-green-600">Examples:</span> Style similar to [brand references]</p>
              <p><span className="text-green-600">Format:</span> Include objectives, target audience, key messages, deliverables</p>
              <p><span className="text-green-600">Tone:</span> Professional but inspiring</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <span className="text-sm text-gray-600">Copy template to clipboard</span>
            <button 
              onClick={() => copyToClipboard(`Task: Create a creative brief for [project type]
Context: Client: [name], Industry: [type], Budget: [range]
Examples: Style similar to [brand references]
Format: Include objectives, target audience, key messages, deliverables
Tone: Professional but inspiring`)}
              className="p-2 hover:bg-gray-200 rounded transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-600" />}
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'campaign-concepts',
      title: 'Campaign Concept Workshop',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Ideate and develop campaign concepts with systematic prompting.</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <h4 className="font-semibold mb-2">Brainstorming Prompt</h4>
              <div className="text-sm font-mono bg-white p-3 rounded border">
                "Generate 10 creative campaign concepts for [product] targeting [audience]. Each concept should include: theme, tagline, and 1 visual idea. Style: [brand personality]"
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <h4 className="font-semibold mb-2">Refinement Prompt</h4>
              <div className="text-sm font-mono bg-white p-3 rounded border">
                "Take concept #3 and expand it into a full campaign strategy including: 3 touchpoints, content pillars, success metrics, and timeline"
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-sm mb-2">🎯 Exercise:</h4>
            <p className="text-sm text-gray-700">Apply these prompts to a real project. Start broad, then narrow down to your best concept.</p>
          </div>
        </div>
      )
    },
    {
      id: 'brand-voice',
      title: 'Brand Voice Development',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Create consistent brand voice with tone-specific prompting.</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Voice Definition</h4>
              <div className="text-xs font-mono text-gray-700">
                "Analyze these 3 existing texts from [brand] and extract: 5 key voice attributes, typical sentence structure, vocabulary level, and emotional tone"
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Voice Application</h4>
              <div className="text-xs font-mono text-gray-700">
                "Rewrite this message for [brand] using their voice: [tone attributes]. Include: casual contractions, [specific vocabulary], and maintain [emotional approach]"
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Playful', 'Professional', 'Empathetic', 'Bold', 'Minimalist', 'Conversational', 'Technical', 'Inspirational'].map(tone => (
              <span key={tone} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs text-center">
                {tone}
              </span>
            ))}
          </div>
        </div>
      )
    }
  ];

  const currentCards = activeSection === 'foundation' ? foundationCards : 
                       activeSection === 'advanced' ? advancedCards : 
                       workshopCards;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Prompt Engineering Mastery</h1>
                <p className="text-sm text-gray-600">For Creative Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-3 flex items-center gap-2 relative transition-all duration-200 ${
                  activeSection === key 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
                {activeSection === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${sections[activeSection].color} text-white`}>
            <div className="p-1.5 bg-white/20 rounded">
              {sections[activeSection].icon}
            </div>
            <h2 className="text-xl font-semibold">{sections[activeSection].title}</h2>
          </div>
          <p className="text-gray-600 mt-2 ml-16">{sections[activeSection].description}</p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          {currentCards.map(card => (
            <div key={card.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <button
                onClick={() => toggleCard(card.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                {expandedCards[card.id] ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedCards[card.id] && (
                <div className="px-6 pb-6 border-t bg-gradient-to-br from-gray-50 to-white">
                  <div className="pt-4">
                    {card.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-2">Ready to Master Prompting?</h3>
          <p className="text-blue-100 mb-4">Start applying these techniques to your creative projects today</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Practice Daily</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Test & Iterate</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Share with Team</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptMasteryGuide;