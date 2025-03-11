"use client";

import { useState, useEffect } from "react";
import { QuoteText, QuoteWrapper } from "./Quate.styles";
import quotes from "@/data/quotes.json";

export const Quote = (): JSX.Element => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <QuoteWrapper>
      <QuoteText>{quotes[currentQuoteIndex]}</QuoteText>
    </QuoteWrapper>
  );
};
