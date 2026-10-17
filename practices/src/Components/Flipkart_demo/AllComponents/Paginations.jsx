
import React, { useEffect, useState } from 'react'

export default function Pagination({ Total = 10, SetSkip, Limit }) {
  const [Page, SetPage] = useState(1)
  const Totals = Math.floor(Total / Limit)
  useEffect(() => {
    SetSkip((Page - 1) * Limit);
  }, [Page])

  return (
    <div className="flex justify-center items-center gap-2 my-8 flex-wrap">

      <button
        disabled={Page === 1}
        onClick={() => SetPage(Page - 1)}
        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white disabled:opacity-40"
      >
        Previous
      </button>
      <button
        disabled={Page === 1}
        onClick={() => SetPage(1)}
        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white disabled:opacity-40"
      >
        1
      </button>

      {[Page - 1, Page, Page + 1]
        .filter(n => n >= 1 && n <= Totals)
        .map(n => (
          <button
            key={n}
            onClick={() => SetPage(n)}
            className={`px-4 py-2 rounded-lg border transition ${Page === n
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
          >
            {n}
          </button>
        ))}
      <button
        disabled={Page === Totals}
        onClick={() => SetPage(Totals)}
        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white disabled:opacity-40"
      >
        {Totals}
      </button>
      <button
        disabled={Page === Totals}
        onClick={() => SetPage(Page + 1)}
        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white disabled:opacity-40"
      >
        Next
      </button>

    </div>
  )
}
