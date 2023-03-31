import React, { PropsWithChildren } from "react"
import { TestResult } from "hooks/queries/queries"

interface Props {
  word: TestResult
}

function WordTestResultItem({ word }: PropsWithChildren<Props>) {
  return (
    <>
      {word.engWord}
      <img src={word.image} />
    </>
  )
}

export default WordTestResultItem