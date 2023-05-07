import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {

    const error: any = useRouteError();

    console.log(error)

    return (
        <div id="error-page">
            <h1>Oooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}