import React from 'react';
import { Shield, Lock, Zap, Users, Heart, Globe, Award, ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About KYCnot.me Gift Cards</h1>
        <p className="text-xl text-day-300 max-w-3xl mx-auto">
          We're on a mission to provide privacy-respecting gift card services in a world where financial surveillance has become the norm.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="mb-20">
        <div className="bg-night-800 border border-night-600 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-day-300 leading-relaxed mb-6">
              We believe that privacy is a fundamental human right, not a privilege. Our mission is to empower individuals with the freedom to make purchases without surveillance, tracking, or identity verification.
            </p>
            <p className="text-xl text-day-300 leading-relaxed">
              By providing a simple way to purchase gift cards with cryptocurrency, we're building a bridge between the privacy-focused crypto economy and everyday commerce, making financial privacy accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Shield className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-day-400">
              We never collect more data than absolutely necessary. No names, no IDs, no verification procedures.
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Lock className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
            <p className="text-day-400">
              We implement robust security measures to protect your data and transactions from unauthorized access.
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Zap className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Efficiency</h3>
            <p className="text-day-400">
              Fast delivery, instant confirmations with Lightning Network, and a seamless user experience.
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Users className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Inclusivity</h3>
            <p className="text-day-400">
              Financial services should be available to everyone, regardless of their background, location, or status.
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Heart className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
            <p className="text-day-400">
              Clear communication about our processes, fees, and policies. No hidden charges or surprise terms.
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <Globe className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Borderless</h3>
            <p className="text-day-400">
              We serve customers globally, breaking down geographical barriers to privacy-focused services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">The Team Behind KYCnot.me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="w-24 h-24 bg-night-700 rounded-full mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-500/30 to-blue-500/30"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">Alex Rivers</h3>
            <p className="text-green-500 mb-3">Founder & Lead Developer</p>
            <p className="text-day-400 mb-4">
              Privacy advocate with 10+ years of experience in cryptography and blockchain development.
            </p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="w-24 h-24 bg-night-700 rounded-full mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-green-500/30"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">Mia Chen</h3>
            <p className="text-green-500 mb-3">Operations & Partnerships</p>
            <p className="text-day-400 mb-4">
              Former fintech executive who left the traditional system to build truly private financial services.
            </p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="w-24 h-24 bg-night-700 rounded-full mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 to-red-500/30"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">David Kowalski</h3>
            <p className="text-green-500 mb-3">Security & Infrastructure</p>
            <p className="text-day-400 mb-4">
              Cybersecurity expert specializing in privacy-enhancing technologies and secure infrastructure.
            </p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-day-500 hover:text-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-night-600 pl-8 ml-4 md:ml-8 space-y-12">
          <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-green-500 -ml-[9px]"></div>
          
          <div>
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold text-white mb-2">2021 - The Beginning</h3>
            <p className="text-day-400">
              KYCnot.me was born from a simple idea: create a directory of services that respect user privacy by not requiring identity verification. The original site focused on listing crypto exchanges, VPNs, and other privacy-focused services.
            </p>
          </div>
          
          <div>
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold text-white mb-2">2022 - Growing the Community</h3>
            <p className="text-day-400">
              As surveillance and KYC requirements increased globally, our community grew. We expanded our listings and began building relationships with privacy-focused service providers, establishing KYCnot.me as a trusted resource.
            </p>
          </div>
          
          <div>
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold text-white mb-2">2023 - Expanding Our Vision</h3>
            <p className="text-day-400">
              We identified a critical gap in the market: while privacy-focused financial services existed, everyday commerce remained difficult without surveillance. We began developing our gift card service to bridge this gap.
            </p>
          </div>
          
          <div>
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold text-white mb-2">2024 - KYCnot.me Gift Cards Launch</h3>
            <p className="text-day-400">
              We launched our dedicated gift card platform, allowing users to purchase gift cards from hundreds of retailers using cryptocurrency, with no KYC requirements. The service quickly gained popularity among privacy advocates and everyday users alike.
            </p>
          </div>
          
          <div>
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Today & Beyond</h3>
            <p className="text-day-400">
              We continue to expand our gift card offerings, improve our platform, and advocate for privacy rights. Our vision is to create a comprehensive ecosystem of privacy-respecting services that make everyday life possible without surveillance.
            </p>
          </div>
          
          <div className="absolute bottom-0 left-0 w-4 h-4 rounded-full bg-green-500 -ml-[9px]"></div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-night-800 to-night-900 border border-night-600 rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white mb-6">Our Privacy Commitment</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-day-300 mb-4">
              Privacy isn't just a feature of our service—it's the foundation of everything we do. We believe that surveillance capitalism has gone too far, and we're building alternatives that respect human dignity and autonomy.
            </p>
            <p className="text-day-300 mb-4">
              Our commitment to privacy includes:
            </p>
            <ul className="space-y-2 text-day-300 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Minimal data collection: We only collect what's absolutely necessary to provide our service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>No KYC requirements: We don't ask for your name, ID, or any other personal information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Cryptocurrency payments: We accept Bitcoin, Lightning Network, and Monero for enhanced privacy.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>No third-party trackers: Our website doesn't use analytics or advertising trackers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Transparent policies: We're clear about what data we collect and how we use it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Tor-friendly: Our service is accessible via Tor for additional anonymity.</span>
              </li>
            </ul>
            <p className="text-day-300">
              We regularly audit our practices and systems to ensure we're living up to these commitments. Privacy isn't just what we sell—it's who we are.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Platform Statistics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">500+</div>
            <p className="text-day-400">Gift Cards Available</p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">50k+</div>
            <p className="text-day-400">Satisfied Customers</p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">99.8%</div>
            <p className="text-day-400">Successful Deliveries</p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">3+</div>
            <p className="text-day-400">Years of Operation</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-night-800 border border-night-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <div className="w-12 h-12 bg-night-700 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-500/30 to-blue-500/30"></div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium">CryptoPrivacyFan</h4>
                <div className="flex text-yellow-500">
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                </div>
              </div>
            </div>
            <p className="text-day-400 italic">
              "I've been using KYCnot.me Gift Cards for over a year now, and it's been a game-changer for my privacy. Fast delivery, great selection, and the Lightning Network payments are almost instant. Highly recommended!"
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <div className="w-12 h-12 bg-night-700 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30"></div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium">PrivacyMatters</h4>
                <div className="flex text-yellow-500">
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                </div>
              </div>
            </div>
            <p className="text-day-400 italic">
              "As someone who values privacy, finding KYCnot.me was a breath of fresh air. I can shop at my favorite stores without giving up my personal information. The cashback in Bitcoin is a nice bonus too!"
            </p>
          </div>
          
          <div className="bg-night-800 border border-night-600 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <div className="w-12 h-12 bg-night-700 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 to-orange-500/30"></div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium">BitcoinMaximalist</h4>
                <div className="flex text-yellow-500">
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4" />
                  <Award className="h-4 w-4 opacity-40" />
                </div>
              </div>
            </div>
            <p className="text-day-400 italic">
              "The service is excellent, and I appreciate the commitment to privacy. I've used several gift card services, but this is the only one that truly respects user privacy. Support team is responsive and helpful too."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 border border-green-500/30 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop with Privacy?</h2>
          <p className="text-xl text-day-300 mb-8 max-w-2xl mx-auto">
            Join thousands of privacy-conscious shoppers who use our gift cards to make everyday purchases without surveillance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('popstate'));
              }}
            >
              Browse Gift Cards
            </a>
            <a 
              href="/faq"
              className="px-6 py-3 bg-night-800 hover:bg-night-700 text-day-300 hover:text-white border border-night-600 rounded-lg font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/faq');
                window.dispatchEvent(new Event('popstate'));
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://www.kycnot.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-night-800 border border-night-600 rounded-lg hover:border-green-500/50 transition-colors duration-300"
          >
            <div className="mr-4">
              <Globe className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">KYCnot.me Directory</h3>
              <p className="text-day-400 text-sm">Browse our comprehensive directory of privacy-respecting services</p>
            </div>
            <ExternalLink className="h-4 w-4 text-day-500" />
          </a>
          
          <a 
            href="https://blog.kycnot.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-night-800 border border-night-600 rounded-lg hover:border-green-500/50 transition-colors duration-300"
          >
            <div className="mr-4">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Privacy Blog</h3>
              <p className="text-day-400 text-sm">Articles and guides on privacy, cryptocurrency, and financial freedom</p>
            </div>
            <ExternalLink className="h-4 w-4 text-day-500" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
