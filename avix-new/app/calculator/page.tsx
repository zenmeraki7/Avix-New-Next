"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  PiggyBank,
  Home,
  Briefcase,
  Phone,
  Download,
  Share2,
} from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(60);

  // Calculate EMI
  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  const calculatorTypes = [
    {
      title: "Personal Loan EMI",
      description: "Calculate EMI for personal loans",
      icon: PiggyBank,
      rate: "10.5% - 24%",
    },
    {
      title: "Home Loan EMI",
      description: "Calculate EMI for home loans",
      icon: Home,
      rate: "8.5% - 12%",
    },
    {
      title: "Business Loan EMI",
      description: "Calculate EMI for business loans",
      icon: Briefcase,
      rate: "12% - 18%",
    },
  ];

  const tips = [
    "Lower loan amount reduces monthly EMI burden",
    "Longer tenure reduces EMI but increases total interest",
    "Higher down payment reduces loan amount and EMI",
    "Compare rates from multiple lenders before deciding",
    "Consider prepayment options to reduce interest burden",
    "Factor in processing fees and other charges",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#1A004D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-16 h-16 text-purple-300 mr-4" />
            <h1 className="text-5xl font-bold">EMI Calculator</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Plan your finances better with our easy-to-use EMI calculator. Get
            instant calculations for all types of loans.
          </p>
        </div>
      </section>

      {/* Calculator Types */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Loan Type
            </h2>
            <p className="text-gray-600">
              Different loan types have different interest rate ranges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {calculatorTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="text-center">
                  <type.icon className="w-12 h-12 text-purple-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="text-lg font-semibold text-purple-800 mb-4">
                    Interest Rate: {type.rate}
                  </div>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Use Calculator
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              EMI Calculator
            </h2>
            <p className="text-gray-600">
              Calculate your Equated Monthly Installment (EMI) for loans with
              our easy-to-use calculator.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Controls */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-purple-700 mr-3" />
                <h3 className="text-2xl font-bold text-purple-900">
                  Loan Details
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                Adjust the sliders to calculate your EMI
              </p>

              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-700 font-medium">
                      Loan Amount
                    </label>
                    <span className="text-purple-700 font-bold text-lg">
                      ₹{loanAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none slider"
                      style={{
                        background: `linear-gradient(to right, #5B2C87 0%, #5B2C87 ${
                          ((loanAmount - 100000) / (10000000 - 100000)) * 100
                        }%, #e5d3ff ${
                          ((loanAmount - 100000) / (10000000 - 100000)) * 100
                        }%, #e5d3ff 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>₹1L</span>
                      <span>₹1Cr</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-700 font-medium">
                      Interest Rate (per annum)
                    </label>
                    <span className="text-purple-700 font-bold text-lg">
                      {interestRate}%
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none slider"
                      style={{
                        background: `linear-gradient(to right, #5B2C87 0%, #5B2C87 ${
                          ((interestRate - 1) / (30 - 1)) * 100
                        }%, #e5d3ff ${
                          ((interestRate - 1) / (30 - 1)) * 100
                        }%, #e5d3ff 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-700 font-medium">
                      Loan Tenure
                    </label>
                    <span className="text-purple-700 font-bold text-lg">
                      {loanTenure} months ({Math.floor(loanTenure / 12)} years)
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="6"
                      max="360"
                      step="6"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none slider"
                      style={{
                        background: `linear-gradient(to right, #5B2C87 0%, #5B2C87 ${
                          ((loanTenure - 6) / (360 - 6)) * 100
                        }%, #e5d3ff ${
                          ((loanTenure - 6) / (360 - 6)) * 100
                        }%, #e5d3ff 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>6 months</span>
                      <span>30 years</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-[#2b0052] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1e003d] transition-colors">
                  <Download size={18} />
                  Download Report
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="bg-gradient-to-b from-[#2b0052] to-[#2b0052] text-white p-8 rounded-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">EMI Breakdown</h3>
                <p className="text-purple-200">Your monthly payment details</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">
                  ₹{emi.toLocaleString("en-IN")}
                </div>
                <div className="text-purple-200">Monthly EMI</div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div
                  className="p-4 rounded-lg text-center"
                  style={{ background: "rgba(139, 69, 164, 0.4)" }}
                >
                  <div className="text-2xl font-bold">
                    ₹{totalInterest.toLocaleString("en-IN")}
                  </div>
                  <div className="text-purple-200 text-sm">Total Interest</div>
                </div>
                <div
                  className="p-4 rounded-lg text-center"
                  style={{ background: "rgba(139, 69, 164, 0.4)" }}
                >
                  <div className="text-2xl font-bold">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </div>
                  <div className="text-purple-200 text-sm">Total Amount</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>Principal Amount:</span>
                  <span className="font-bold">
                    ₹{loanAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Amount:</span>
                  <span className="font-bold">
                    ₹{totalInterest.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between border-t border-purple-500 pt-4">
                  <span>Total Payable:</span>
                  <span className="font-bold">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full bg-purple-800 hover:bg-purple-900 py-3 px-4 rounded-lg transition-colors text-white text-center block"
              >
                Apply for This Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Information */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-purple-900 mb-6">
                EMI Calculation Tips
              </h3>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#2b0052] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#2b0052] to-[#2b0052] text-white p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-4">
                Need Help With Your Calculation?
              </h4>
              <p className="text-purple-200 mb-6">
                Our financial experts can help you understand your EMI
                calculations and find the best loan options.
              </p>

              <div className="space-y-3 text-sm mb-6">
                <p>📞 Call us at: +91 9876543210</p>
                <p>📧 Email: avixfinancialsolutions@gmail.com</p>
                <p>🕒 Mon-Sat: 9 AM - 7 PM</p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" passHref>
                  <button className="w-full bg-white text-purple-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Get Expert Consultation
                  </button>
                </Link>
                <Link
                  href="/loans"
                  className="w-full bg-purple-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-900 transition-colors text-center block"
                >
                  View All Loan Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How EMI is Calculated */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Understanding EMI Calculation
            </h2>
            <p className="text-xl text-gray-600">
              Learn how your monthly installment is calculated
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  EMI Formula
                </h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <code className="text-lg text-purple-700 font-mono">
                    EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
                  </code>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    P
                  </div>
                  <div className="font-semibold text-purple-900 mb-2">
                    Principal Amount
                  </div>
                  <div className="text-sm text-gray-600">
                    The loan amount you borrow
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    R
                  </div>
                  <div className="font-semibold text-purple-900 mb-2">
                    Monthly Interest Rate
                  </div>
                  <div className="text-sm text-gray-600">
                    Annual rate divided by 12 months
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    N
                  </div>
                  <div className="font-semibold text-purple-900 mb-2">
                    Number of Months
                  </div>
                  <div className="text-sm text-gray-600">
                    Total loan tenure in months
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">
                  Example Calculation:
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    Loan Amount: ₹5,00,000 | Interest Rate: 12% per annum |
                    Tenure: 5 years (60 months)
                  </p>
                  <p>Monthly Interest Rate (R) = 12% ÷ 12 = 1% = 0.01</p>
                  <p>
                    EMI = [5,00,000 x 0.01 x (1.01)^60] / [(1.01)^60 - 1] =
                    ₹11,122
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #5b2c87;
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #5b2c87;
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default EMICalculator;
