import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Sidebar() {
  let [Categories, SetCategories] = useState([])
  let [temps, SetTemps] = useState(true)
  let [SortName, SetSortName] = useState("")
  let [SortPrice, SetSortPrice] = useState("")
  let [SortRating, SetSortRating] = useState("")
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => SetCategories(data))
      .catch(err => console.log(err))
      .finally(() => SetTemps(false))
  }, [])

  if (temps) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-[280px] p-3 bg-white">

      <div className="border-b py-3 px-2 font-medium text-lg border-[#dadada]">
        Filters
      </div>

      <div className="py-3 px-2 text-lg font-medium uppercase">
        All Categories
      </div>

      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          id="category-dropdown"
          className="w-full border flex justify-between items-center"
        >
          Select Category
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-full">
          {Categories.map((value) => (
            <Dropdown.Item
              as={Link}
              to={`/category/${value.slug}`}
              key={value.slug}
            >
              {value.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>



      <div className=" mt-4">

        <div className="text-lg font-medium uppercase pl-2 text-gray-800 mb-4">
          Sort Products
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort by Name
          </label>
          <select
            value={SortName}
            onChange={(e) => SetSortName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="">Select order</option>
            <option value="asc">Ascending (A–Z)</option>
            <option value="desc">Descending (Z–A)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort by Price
          </label>
          <select
            value={SortPrice}
            onChange={(e) => SetSortPrice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="">Select order</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort by Rating
          </label>
          <select
            value={SortRating}
            onChange={(e) => SetSortRating(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="">Select order</option>
            <option value="high-low">Highest First</option>
            <option value="low-high">Lowest First</option>
          </select>
        </div>

      </div>
      <button
        type="button"
        onClick={() => {
          SetSortName("")
          SetSortPrice("")
          SetSortRating("")
        }}
        className="w-full mt-4 rounded-lg border border-gray-300 px-4 py-2.5 font-semibold hover:bg-gray-100"
      >
        Clear All
      </button>

    </div>
  )
}
