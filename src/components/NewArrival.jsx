import { useState } from "react"
const NewArrival = ()=> {
        const [numFlight, setNumFlight]=useState(null);
        const [FromFlight, setFromFlight]=useState(null);
        const [remarksFlight, setRemarksFlight]=useState(null);
        const [timeFlight, setTimeFlight]=useState(null);
        const [user, setUser]=useState(null);
        const [password, setPassword]=useState(null);

        const credentials = {
            userI: 'user',
            passwordI: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiI5MjYwNTVjYi04NTAzLTRlOGQtYjdhMi1iYjQzYmViMmVkZmMiLCJleHAiOjE2NzU1MzU0MzUsIm5iZiI6MCwiaWF0IjoxNjc1NDk5NDM1LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiNWJmYzA2ZDMtMTQ0ZC00YzE2LWJhN2YtNGM3OGI5NTcwZjZmIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjc1NDk5NDM1LCJzZXNzaW9uX3N0YXRlIjoiMDUyMzkxNWYtNTQ4MC00ZWVlLWEzYTgtYmMzNzdiYzkyNWY4IiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6IkxpbmEgQWNvc3RhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibGluYS5hY29zdGEyQHUuaWNlc2kuZWR1LmNvIiwiZ2l2ZW5fbmFtZSI6IkxpbmEiLCJmYW1pbHlfbmFtZSI6IkFjb3N0YSIsImVtYWlsIjoibGluYS5hY29zdGEyQHUuaWNlc2kuZWR1LmNvIn0.WR8_jTdVdhHjDTXLezL-gn_5VyjkKPLruB6JgHfxVGLxXsd483IoQr2TGbvhvMCowf5m2yKIbbLDRMyqRkb7DWLmQzMzQEHyYV1-jq04jt_IdU3i4FH8GIwzXcKux2yM19M-Dxkb6NXUYUMx3EiFDYYO2wTV70T0dzZUgDkpv_wQdSRWdTgO3zDfQCKsS1FLogUgTlTsGCyYZhCZtGRmYrmQBLk2PgzAYtIl7lFQnM2pxLnR_I_jlGi5tqC4IDy6byZTGOdE_-PpIVrdo2aH1ilycaw1InVWsfRupyYD3id-GFYYpomTCcS-pKC9h_5TIOAG5bORMgP_UnW39evsxQ'
        };

        const userItems = {
            'user': user,
            'password': password
        };

        const insertData=(e)=>{
            if(userItems.user === credentials.userI && userItems.password === credentials.passwordI){
                console.log("yes");
                const arrivalFlight = {
                    'flightNo': numFlight,
                    'from': FromFlight,
                    'remarks': remarksFlight,
                    'time': timeFlight
                };
                console.log(arrivalFlight);
                e.preventDefault();
                fetch("https://a682ba76-35a9-41b5-8d4e-90e5e7a6ad5e-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/arrivals/collections/arrivals", {
                    method: "POST", 
                    headers: {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                        'X-Cassandra-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiI5MjYwNTVjYi04NTAzLTRlOGQtYjdhMi1iYjQzYmViMmVkZmMiLCJleHAiOjE2NzU1MzU0MzUsIm5iZiI6MCwiaWF0IjoxNjc1NDk5NDM1LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiNWJmYzA2ZDMtMTQ0ZC00YzE2LWJhN2YtNGM3OGI5NTcwZjZmIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjc1NDk5NDM1LCJzZXNzaW9uX3N0YXRlIjoiMDUyMzkxNWYtNTQ4MC00ZWVlLWEzYTgtYmMzNzdiYzkyNWY4IiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6IkxpbmEgQWNvc3RhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibGluYS5hY29zdGEyQHUuaWNlc2kuZWR1LmNvIiwiZ2l2ZW5fbmFtZSI6IkxpbmEiLCJmYW1pbHlfbmFtZSI6IkFjb3N0YSIsImVtYWlsIjoibGluYS5hY29zdGEyQHUuaWNlc2kuZWR1LmNvIn0.WR8_jTdVdhHjDTXLezL-gn_5VyjkKPLruB6JgHfxVGLxXsd483IoQr2TGbvhvMCowf5m2yKIbbLDRMyqRkb7DWLmQzMzQEHyYV1-jq04jt_IdU3i4FH8GIwzXcKux2yM19M-Dxkb6NXUYUMx3EiFDYYO2wTV70T0dzZUgDkpv_wQdSRWdTgO3zDfQCKsS1FLogUgTlTsGCyYZhCZtGRmYrmQBLk2PgzAYtIl7lFQnM2pxLnR_I_jlGi5tqC4IDy6byZTGOdE_-PpIVrdo2aH1ilycaw1InVWsfRupyYD3id-GFYYpomTCcS-pKC9h_5TIOAG5bORMgP_UnW39evsxQ'
                    },
                    body: JSON.stringify(arrivalFlight),
                  })
                    .then((response) => response.json())
                    .then((arrivalFlight) => {
                        console.log("Success:", arrivalFlight);
                    });
            }else{
                console.log("error");
            }
                
        }

        
        return(
            <>
                    <h3 id = "title">Authentication</h3>
                    <input type="text" id= "user" placeholder="User" onChange={e=>setUser(e.target.value)}/>
                    <br></br>
                    <input type="text" id= "time" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <br></br>
                    <h3 id= "title">Data Fligth</h3>
                    <input type="text" id= "flightNo" placeholder="Flight No." onChange={e=>setNumFlight(e.target.value)}/>
                    <br></br>
                    <input type="text" id= "from" placeholder="From" onChange={e=>setFromFlight(e.target.value)}/>
                    <br></br>
                    <input type="text" id= "remarks" placeholder="Remarks" onChange={e=>setRemarksFlight(e.target.value)}/>
                    <br></br>
                    <input type="text" id= "time" placeholder="Time" onChange={e=>setTimeFlight(e.target.value)}/>
                    <br></br>
                    <button id = "button" onClick={insertData}>Save</button>
                    <label></label>
            </>
        )
}
export default NewArrival