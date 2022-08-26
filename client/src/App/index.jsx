import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "../components/Auth"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import { classes, Root } from "./styles"
import { useState } from "react"
// import { students } from "../data/users"

const App = () => {
	const test = null // || students[0]
	const [user, setUser] = useState(test)
	return (
		<BrowserRouter>
			<Root className={classes.root}>
				<Navbar user={user} setUser={setUser} />
				<Routes>
					<Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
					<Route path="/auth" element={user ? <Navigate to="/" /> : <Auth setUser={setUser} />} />
				</Routes>
			</Root>
		</BrowserRouter>
	)
}

export default App
