import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProfileEditContent from '../Features/profile/ProfileEditContent'

function ProfileEdit() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col xl:items-center min-h-screen">
      <NavBar />
      <ProfileEditContent />
      <Footer />
    </div>
  )
}

export default ProfileEdit