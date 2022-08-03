import './app.sass'
import {Routes,Route} from "react-router-dom";
import AllNotes from './Pages/AllNotes';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/allnotes' element={<AllNotes titlePage={"All Notes"}/>}/>
				<Route path='/youtube' element={<CategoryPage titlePage={"YouTube Links"} filterPage={"YouTube"}/>}/>
				<Route path='/tiktok' element={<CategoryPage titlePage={"TikTok Links"} filterPage={"TikTok"}/>}/>
				<Route path='/figma' element={<CategoryPage titlePage={"Figma Links"} filterPage={"Figma"}/>}/>
				<Route path='/otherlinks' element={<CategoryPage titlePage={"Other Links"} filterPage={"OtherLinks"}/>}/>
				<Route path='/othernotes' element={<CategoryPage titlePage={"Other Notes"} filterPage={"OtherNotes"}/>}/>
            </Routes>
		</div>
	);
}

export default App;
