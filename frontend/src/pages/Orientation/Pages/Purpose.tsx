import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import onCheck from "./utils";
import { userModel, userObservable } from "../../../models/userobserver";
import { Motive } from "../../../models/common";
import { capitalize } from "./utils";
import './Purpose.css';
function Purpose(props: any) {
    const [user, setUser] = useState(userModel);
    const [motives, setMotives] = useState<Set<string>>(new Set(user.motives));
    const input = useRef<HTMLInputElement>(null);
    // Watch changes to shared userModel
    useEffect(() => {
        const subscribtion = userObservable.subscribe(setUser);
        return () => {
            // TODO: PUT updated data to the back-end API
            subscribtion.unsubscribe();
        }
    }, []);

    return (
        <div className="purpose-page">
            <h3 className="main-heading">Let's get you stiched in</h3>
            <p className="sub-heading">Find your team. What brings you to Regenquest?</p>
            <p className="sub-text">Select all that apply</p>
                            
            {Object.values(Motive).map(
                    (motive) => (
                        <div key={motive}>
                            <input
                            ref={input}
                            
                            onChange={(e) => { onCheck([setMotives, props.updateData], motives, e);}}
                            type="checkbox"
                            id={motive.toLowerCase()}
                            value={motive}
                            defaultChecked={motives.has(motive)} />

            <label htmlFor={motive.toLocaleLowerCase()}>{capitalize(motive)}</label>
                        </div>
                    )
                    
                )}
                
             
        </div>
    );
}

export default Purpose;
