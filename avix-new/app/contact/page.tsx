import React from 'react'
import Contact from '@/components/Contact/Contact'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Contact AVIX Financial Solutions',
  description:
    'Get in touch with AVIX Financial Solutions for expert loan advice, insurance queries, or investment guidance. We’re here to help you 7 days a week.',
  alternates: { canonical: '/contact' },
};

function page() {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default page