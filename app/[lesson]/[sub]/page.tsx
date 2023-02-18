type Props = {
  params: {
    lesson: string
    sub: string
  }
}

export default function Page({params}: Props) {
  return <b>Lesson Page for {params.lesson} / {params.sub}</b>
}