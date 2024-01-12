import Test4 from '@/components/Test4'

const Test3 = ({ a }) => {
  console.log('test 3')

  return (
    <div>
      <div>test 3</div>
      <Test4 a={a}></Test4>
    </div>
  )
}

export default Test3
