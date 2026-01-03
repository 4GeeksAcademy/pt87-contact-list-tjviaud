import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Actions from "../hooks/Action.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const {getContacts} =Actions()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<button onClick={()=>getContacts()}>test</button>
		</div>
	);
}; 