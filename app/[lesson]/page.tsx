type Props = {
  params: {
    lesson: string
  }
}

export default function Page({params}: Props) {
	return <b>Lesson Page for {params.lesson}</b>
}