import Footer from '@/components/Contact'// ফোল্ডার বা ফাইলের সঠিক নাম অনুযায়ী এখানে Footer দিন
import React from 'react'

function ContactPage() {
  return (
    <div className='min-h-screen bg-[#011e32] flex flex-col justify-between'>
      <div className='flex-grow'>
        {/* এখানে আপনার কন্টাক্ট পেজের অন্যান্য কন্টেন্ট বা ফর্ম থাকলে তা যোগ করতে পারেন */}
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage

