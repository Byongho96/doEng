import { SpinnerDots } from "../components/UI/Spinner"
// import { useStoreDispatch } from "../hooks/useStoreSelector"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import { useStoreDispatch } from "hooks/useStoreSelector"
import { tokenActions } from "store/tokenSlice"
import LoadingPage from "./LoadingPage"
import { useStoreDispatch } from "hooks/useStoreSelector"
import { googleActions } from "store/googleSlice"
import { passwordActions } from "store/passwordSlice"

const GoogleLoginLoadingPage = function () {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const dispatch = useStoreDispatch()

  useEffect(
    function () {
      const code = searchParams.get(`code`)
      if (code) {
        axios({
          method: `get`,
          baseURL: `https://j8a601.p.ssafy.io`,
          // baseURL: `http://localhost:8200`,
          url: `/api/auth/login/code/GOOGLE/callback`,
          params: {
            code,
          },
        })
          .then((res) => {
            console.log(res)
            if (res.data.type === "login") {
              dispatch(googleActions.resetGoogleSlice({}))
              dispatch(passwordActions.setGoogle({}))
               dispatch(
              tokenActions.setAccessToken({
                accessToken: res.headers[`accesstoken`],
                }),
              )
              dispatch(
                tokenActions.setRefreshToken({
                  refreshToken: res.headers[`refreshtoken`],
                }),
              )
              navigate(`/`)
            } else if (res.data.type === "signup") {
              dispatch(googleActions.setGCode({ code: code }))
              dispatch(
                googleActions.setGoogleSlice({
                  gId: `${res.data.memberId}`,
                  gmail: `${res.data.email}`,
                  gname: `${res.data.name}`,
                }),
              )
              navigate("/member/google/info")
              return res
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    [searchParams],
  )
  return <LoadingPage loadingText="구글 로그인 진행중..." />
}

export default GoogleLoginLoadingPage