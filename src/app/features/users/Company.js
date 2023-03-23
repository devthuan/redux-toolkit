import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompanies } from "../counter/postsSlice";

const Company = () => {

    const companies = useSelector((state) => state.companyList.company);
    const loading = useSelector((state) => state.companyList.loading);
    const error = useSelector((state) => state.companyList.error);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchAPI() {
            await dispatch(getCompanies('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'))
        }

        setTimeout(() => {
            fetchAPI();
        }, 1)

    }, [dispatch])


    return (
        <div>
            {loading === false && error === false && companies && companies.length > 0 &&
                companies.map((item, index) => {
                    return (
                        <div key={index + 1}>{item.name} - {item.city}</div>
                    )
                })}
            {loading === true && (
                <p>Loading ...</p>
            )}
            {error === true && (
                <p>error ...</p>
            )}
        </div>
    )
}


export default Company;