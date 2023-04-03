import React, { PropsWithChildren, useState } from "react"
import { Outlet, useParams, useNavigate } from "react-router-dom"
import {
  WordTest,
  useTestMutation,
  WordResult,
  TestResult,
} from "hooks/queries/queries"
import WordTestItem from "./WordTestItem"
import { useStoreDispatch, useStoreSelector } from "hooks/useStoreSelector"
import { wordTestActions } from "store/wordTestSlice"
import { testResultActions } from "store/testResultSlice"
import TaleNavigator from "components/UI/TaleNavigator"
import SuperHeroLanding from "components/PlayTaleComponents/SuperHeroLanding"
import WordTestBack from "assets/images/wordTestBack.png"
import WordTestTitle from "assets/images/wordTestTitle.png"

interface Props {
  wordInfo: WordTest
}

interface wordTestStore {
  wordId: number
  taleId: number
  correct: boolean
}

function WordTesting({ wordInfo }: PropsWithChildren<Props>) {
  const { taleId } = useParams() as { taleId: string }
  const navigate = useNavigate()
  const { mutateAsync: WordTestMutate } = useTestMutation()
  const wordList = useStoreSelector((state) => state.wordTest.wordTestList)

  console.log(wordInfo, "989898")

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const dispatch = useStoreDispatch()

  const handleResponse = (response: boolean) => {
    const wordTest: wordTestStore = {
      wordId: wordInfo.testList[currentWordIndex].id,
      taleId: parseInt(taleId),
      correct: response,
    }

    if (currentWordIndex < 4) {
      dispatch(wordTestActions.appendWordTest({ wordTest: wordTest }))
      console.log(wordTest, "wordtest")
      setCurrentWordIndex(currentWordIndex + 1)
    } else {
      dispatch(wordTestActions.appendWordTest({ wordTest: wordTest }))
      console.log(wordTest, "wordtest")
      WordTestMutate({
        method: `post`,
        url: `/api/word-test`,
        data: { wordList },
      })
        .then((res) => {
          console.log(res, "😎😋😊")
          console.log(res.data, "😎😋😊")
          const wordResult: WordResult = res.data
          dispatch(testResultActions.saveTestResult({ wordResult }))
          console.log("성공성공이당")
        })
        .catch((err) => {
          console.log(err)
        })
      dispatch(wordTestActions.resetWordTest({ wordTest: wordTest }))
      navigate("result")
    }
  }

  const currentWordInfo = wordInfo.testList[currentWordIndex]

  return (
    <>
      <TaleNavigator />
      <SuperHeroLanding>
        <img
          alt="단어테스트 배경"
          src={WordTestBack}
          className="w-[95%] h-[90%] -z-10 fixed top-[13%]"
        />
        <img
          alt="동화 제목"
          src={WordTestTitle}
          className=" z-20 fixed top-[-15%] h-[40%] w-[40%]"
        />
        <div className="z-30 fixed top-[9%] text-[220%] text-white">
          {wordInfo.title}
        </div>
      </SuperHeroLanding>

      <WordTestItem
        key="item-${WordInfo.title}"
        wordInfo={currentWordInfo}
        handleResponse={handleResponse}
      />
    </>
  )
}

export default WordTesting
