import React, { PropsWithChildren } from "react"
import { TestResult } from "hooks/queries/queries"
import wordcard from "assets/images/wordcard.png"

interface Props {
  word: TestResult
}

function WordTestResultItem({ word }: PropsWithChildren<Props>) {
  return (
    <>
      <div className="w-[14%] h-[14%] object-contain relative">
        <img
          alt="단어카드"
          src={wordcard}
          className="w-full h-full object-contain"
        />
        <img
          alt="단어이미지"
          src={word.image}
          className="absolute -top-[5%] -left-[-5%] w-[90%] h-[90%] object-contain"
        />
        <p className="absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
          {word.engWord}
        </p>
      </div>
    </>
  )
}

export default WordTestResultItem
