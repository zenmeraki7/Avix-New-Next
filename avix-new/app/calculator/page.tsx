import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'EMI Calculator – AVIX Financial Solutions',
  description:
    'Quickly calculate your monthly EMIs for personal, home, or business loans. Plan your finances smarter with our free, easy-to-use EMI calculator.',
  alternates: { canonical: '/calculator' },
};

import EMICalculator from '@/components/Calculator/Calculator';
function page() {
  return (
    <div>
<EMICalculator/>
    </div>
  )
}

export default page