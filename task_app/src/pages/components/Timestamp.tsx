import { GetServerSideProps } from "next"


type timestamp = {
  message?: string
}

const Timestamp = (props: timestamp) => {
  const {message} = props

  return(
    <div className="font-bold">
      <p>{message}</p>
    </div>
  )
}

// TODO
// レンダリングに成功はしているが、SSRの関数が呼び出されていない可能性があるので
// 原因調査
export const getServerSideProps: GetServerSideProps<timestamp> =async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp} now from SSR`

  return{
    props:{
      message
    }
  }
}


export default Timestamp