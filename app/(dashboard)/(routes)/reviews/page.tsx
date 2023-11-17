"use client";
import type { Reviews } from "@prisma/client";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import DeleteReview from "@/components/deleteReview";

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    fetch(`/api/reviews?searchquery=${searchTerm}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setReviews(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: ";

  return (
    <div className="h-full bg-gradient-to-r from-slate-700 via-stone-900 to-slate-800 py-5">
      <div className="text-center mb-2 text-white">
        <h2 className="text-4xl ">
          <b>Reviews</b>
        </h2>
        <p>All the valuable reviews from users.</p>
      </div>
      <hr />

      <div className="flex justify-end items-center ">
        <input
          className="rounded-md border-2 border-gray-300 py-2 px-4 mr-2 mt-2 focus:outline-none focus:border-indigo-500"
          name="search"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-4 py-4">
        {
          // @ts-ignore
          reviews.map((review, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{review.email}</h3>
                  <p className="text-gray-600">{review.feedback}</p>
                </div>
                <DeleteReview id={review.id} />
              </div>
            );
          })
        }
      </div>

      <Link href="/reviews/add" className="fixed bottom-4 right-4">
        <PlusCircle size={100} color="skyblue" />
      </Link>
    </div>
  );
}
