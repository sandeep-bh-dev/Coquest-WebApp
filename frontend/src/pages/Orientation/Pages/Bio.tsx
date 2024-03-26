import React, { useEffect, useState } from "react";
import { userModel, userObservable } from "../../../models/userobserver";
import './Bio.css';
const MAX_CHAR_COUNT = 1000;

function Bio(props: any) {
    const [user, setUser] = useState(userModel);
    const [biography, setBiography] = useState(user.biography);

    // Watch changes to shared userModel
    useEffect(() => {
        const subscribtion = userObservable.subscribe(setUser);
        return () => {
            // TODO: PUT updated data to the back-end API
            subscribtion.unsubscribe();
        }
    }, []);

    function onEdit(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newBio = e.target.value
        setBiography(newBio);
        props.updateData(newBio);
    }

    return (
        <div className="bio-page">
            <h3 className="main-heading">Welcome to Regenquest&#44; {userModel.name}</h3>
             <h4>Let's get to know you</h4> 
             
            <textarea
                className="bio-input"
                placeholder="Add your bio"
                value={biography}
                onChange={onEdit}
                maxLength={MAX_CHAR_COUNT}>
            </textarea>
            <p>{biography.length}&nbsp;/&nbsp;{MAX_CHAR_COUNT}</p>
        </div>
    );
}

export default Bio;