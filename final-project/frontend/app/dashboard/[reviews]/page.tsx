'use client';

import { lusitana } from '@/app/ui/fonts';
import '@fontsource/inter';
import ReviewTable from '@/app/ui/reviews/review-table';
import { CalendarUI } from '@/app/ui/reviews/calender';
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'


// Data

const product = {
  name: 'Basic Tee',
  price: '$35',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1667871124729-54ba82b9fb23?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    // { name: 'XXS', inStock: true },
    // { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. </p>
  `,
  details: [
    // 'Only the best materials',
  ],
}
const policies = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]
const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2021',
      datetime: '2021-01-06',
    },
    // More reviews...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  // More products...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

// Functions
function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}






export default function Page({ params }: { params: any }) {
  const path = decodeURIComponent(params.reviews);
  const [hotelName, cityName] = path.split('_');
  // New Add   
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <>
      {/* the review page name  */}
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Intro for {hotelName}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

           {/* the review cards*/}

           <div className="bg-white">

      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">{hotelName}</h1>
              <p className="text-xl font-medium text-gray-900">{product.price}</p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {reviews.average}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    See all {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                    'rounded-lg'
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form>
              {/* Color picker */}
              <div>
                <h2 className="text-sm font-medium text-gray-900"> Room Type</h2>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a type</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Bed Size</h2>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    See all Size 
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                            active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                            checked
                              ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                            'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {<div>
                <CalendarUI/>
              </div>
              }
              

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Reserve
              </button>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              <div
                className="prose prose-sm mt-4 text-gray-500"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {product.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {policies.map((policy) => (
                  <div key={policy.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                    <dt>
                      <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
            Recent reviews
          </h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            {reviews.featured.map((review) => (
              <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related products */}
        {/* <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </main>

    </div>
        </div>
      </div>





      <div className="mt-10"></div>




      {/* the review table*/}
      <div>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Reviews for {hotelName}
        </h1>
        <ReviewTable hotelName={hotelName} cityName={cityName} />
      </div>
    </>
  );
}
//   const path = decodeURIComponent(params.reviews);
//   const [hotelName, cityName] = path.split('_');

//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Reviews for {hotelName}
//       </h1>
//       <ReviewTable hotelName={hotelName} cityName={cityName} />
//     </main>
//   );
// }