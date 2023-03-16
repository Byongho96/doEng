import React, { FC, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  size?: "small" | "medium" | "large"
}

const MyPageButton: FC<ButtonProps> = ({
  color = "lime",
  size = "medium",
  children,
  ...rest
}) => {
  // 배경색 관련 Tailwind Class 할당
  const colorClass = {
    orange: "bg-orange-500 hover:bg-orange-700",
    lime: "bg-lime-500 hover:bg-lime-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700",
    gray: "bg-gray-500 hover:bg-gray-700",
    red: "bg-red-500 hover:bg-red-700",
  }[color]

  // 사이즈 관련 Tailwind Class 할당
  const sizeClass = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-3 py-1",
    large: "text-lg px-4 py-2",
  }[size]

  return (
    <button
      className={`rounded ${colorClass} ${sizeClass} text-white font-bold focus:outline-none`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default MyPageButton

// interface Props {
//   value: string // 버튼 안에 띄울 문구
//   onClick?: (e: MouseEvent<HTMLElement>) => void // 클릭 시 동작 함수
//   size?: "small" | "medium" | "large" // 크기: sizing 옵션
//   color?: string // 색깔: tailwind 클래스
//   disabled?: boolean // 아이콘 클릭 가능 여부
// }