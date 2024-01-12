import Test3 from '@/components/Test3'

const Test2 = ({ a }) => {
  console.log('test 2')

  return (
    <div>
      <div>test 2</div>
      <Test3 a={a}></Test3>
    </div>
  )
}

export default Test2
