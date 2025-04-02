"use client"

import type React from "react"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

export function Calculator() {
  const [periodStart, setPeriodStart] = useState(5)
  const [periodLength, setPeriodLength] = useState(5)
  const [cycleLength, setCycleLength] = useState(5)
  const [showResults, setShowResults] = useState(false)

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value + 1)
  }

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 1) {
      setter(value - 1)
    }
  }

  const handleSeeResults = () => {
    setShowResults(true)
  }

  return (
    <div className="w-full mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">When did your last period start?</h3>
        <div className="flex items-center border border-gray-300 rounded-xl sm:rounded-2xl overflow-hidden">
          <button
            className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
            onClick={() => handleIncrement(setPeriodStart, periodStart)}
          >
            <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <div className="flex-1 text-center text-xl sm:text-2xl font-medium">{periodStart}</div>
          <button
            className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
            onClick={() => handleDecrement(setPeriodStart, periodStart)}
          >
            <MinusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 mb-6 sm:mb-8">
        <div>
          <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">How many days did it last?</h3>
          <div className="flex items-center border border-gray-300 rounded-lg sm:rounded-xl overflow-hidden">
            <button
              className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
              onClick={() => handleIncrement(setPeriodLength, periodLength)}
            >
              <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="flex-1 text-center text-xl sm:text-2xl font-medium">{periodLength}</div>
            <button
              className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
              onClick={() => handleDecrement(setPeriodLength, periodLength)}
            >
              <MinusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">Average cycle length (days)</h3>
          <div className="flex items-center border border-gray-300 rounded-xl sm:rounded-2xl overflow-hidden">
            <button
              className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
              onClick={() => handleIncrement(setCycleLength, cycleLength)}
            >
              <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="flex-1 text-center text-xl sm:text-2xl font-medium">{cycleLength}</div>
            <button
              className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-gray-100"
              onClick={() => handleDecrement(setCycleLength, cycleLength)}
            >
              <MinusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <button
          className="w-full bg-[#F06184] text-sm sm:text-base hover:bg-[#E04164] text-white font-medium py-3 sm:py-4 rounded-xl sm:rounded-full"
          onClick={handleSeeResults}
        >
          See results
        </button>
      </div>

      {showResults && (
        <div className="border border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-300">Results ...</h3>
        </div>
      )}
    </div>
  )
}

