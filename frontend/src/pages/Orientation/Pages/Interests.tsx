import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import onCheck from "./utils";
import { userModel, userObservable } from "../../../models/userobserver";
import { Topic } from "../../../models/common";
import { capitalize } from "./utils";
import './Interests.css';
function Interests(props: any) {    
    const [user, setUser] = useState(userModel);
    const [topics, setTopics] = useState(new Set<string>(user.topics));
    const input = useRef<HTMLInputElement>(null);
    // Watch changes to shared userModel
    useEffect(() => {
        const subscription = userObservable.subscribe(setUser);
        return () => {
            // TODO: PUT updated data to the back-end API
            subscription.unsubscribe();
        }
    }, []);

    return (
        <div className="interests-page">
            <h3 className="main-heading">Let's get you stiched in</h3>
            <p className="sub-heading">What are your interests?</p>
            <p className="sub-text">Select 3 or more</p>
            <input type="search" className="search" name="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
            {Object.values(Topic).map(
                    (topic) => (
                        <div key={topic}>
                            <input
                                ref={input}
                                onChange={(e) => onCheck([setTopics, props.updateData], topics, e)}
                                type="checkbox"
                                id={topic.toLowerCase()}
                                name={topic}
                                defaultChecked={topics.has(topic)} />
                            <label htmlFor={topic.toLowerCase()}>{capitalize(topic)}</label>
                        </div>
                    )
                )}
        </div>
    );
}

export default Interests;
