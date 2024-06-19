

const Home = ({ user }) => {
  return (
    <div className="flex justify-center">
       <ul>
        {
            user.map((user) => <li>Name: {user.name}</li>)
        }
       </ul>
    </div>
  )
}

export default Home
