import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/state";

export default function Item({ item, width }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const {category, price, name, image } = item.attributes;
  const {
      data: {
          attributes: {
              formats: {
                  medium: { url }
              }
          }
      }
  } = image;

  return (
      
  );
}
