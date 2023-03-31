import React, { PropsWithChildren } from "react"
import { Word } from "hooks/queries/queries"
import wordcard from "assets/images/wordcard.png"

interface Props {
  word: Word
}

function WordCard({ word }: PropsWithChildren<Props>) {
  return (
    <div className="w-[90%] h-[90%] object-contain relative">
      <img
        alt="단어카드"
        src={wordcard}
        className="w-full h-full object-contain"
      />
      <img
        alt="단어이미지"
        src={word.image}
        className="absolute -top-[5%] -left-0 w-[90%] h-[90%] object-contain"
      />
      <p className="absolute top-[65%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
        {word.engWord}
      </p>
    </div>
  )
}

export default WordCard