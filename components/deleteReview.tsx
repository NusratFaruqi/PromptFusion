"use client";

import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteReview = ({ id }: any) => {
  const router = useRouter();
  const deleteReview = async (id: any) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/reviews?id=${id}`
      );
      toast.success("Review deleted successfully");

      router.push("/reviews");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data || "Something went wrong");

      router.push("/reviews");
    }
  };

  return (
    <div className="cursor-pointer" onClick={() => deleteReview(id)}>
      <Trash2 />
    </div>
  );
};

export default DeleteReview;
