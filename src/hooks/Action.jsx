import useGlobalReducer from "./useGlobalReducer"
const Actions = () => {
    const {store, dispatch} =useGlobalReducer()

    const getContacts = async () => {
console.log("getContactsCalled ")
    }

    return {
        getContacts
    }
}
export default Actions;