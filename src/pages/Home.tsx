import { useEffect } from 'react';
import { useAuth } from '../Provider/AuthProvider'
import { useNavigate } from 'react-router-dom';
import CallToAction from '../components/CallToAction'
import CategoriesLink from '../components/CategoriesLink'

import HeroSection from '../components/HeroSection'
import RecentPostWithProviders from '../components/RecentPostWithProviders'
import AuthorProvider from '../Provider/AuthorProvider'

const Home = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  console.log("user", user)
  useEffect(() => {
    if (!user) {
      const email = localStorage.getItem("emailForSignIn")
      console.log("email", email)
      if (email) {
        navigate("email-verify")
      }
    }
  }, [])



  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <HeroSection />

      {/* Recent Posts */}
      <RecentPostWithProviders />
      {/* Categories Section */}
      <CategoriesLink />
      {/* Call to Action / Footer */}
      <AuthorProvider>
        <CallToAction />
      </AuthorProvider>

    </div>
  );
}

export default Home
