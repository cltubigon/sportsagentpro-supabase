import { useEffect } from "react"
import supabase from "../config/supabaseClient"
import { useState } from "react"

const Home = () => {
  const [athletes, setAthletes] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchAthletes = async () => {
      const { data, error } = await supabase
        .from("athlete")
        .select("*")
        .range(page, page + 10)
        .order("id", { ascending: false })
      if (data) {
        setAthletes(data)
      } else if (error) {
        console.log("error: ", error)
      }
    }
    fetchAthletes()
  }, [])

  useEffect(() => {
    console.log("athletes: ", athletes)
  }, [athletes])
  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home
